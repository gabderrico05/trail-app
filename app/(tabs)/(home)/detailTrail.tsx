import LevelIcon from "@/assets/level_icon.svg";
import StartButton from "@/components/StartButton";
import TrailHeader from "@/components/TrailHeader";
import { getImageUrl, trailsService } from "@/lib/api";
import { TrailProps } from "@/types/Trail";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function detailTrail() {
  const { rawTrailData, parkImage } = useLocalSearchParams<{
    rawTrailData: string;
    parkImage: string;
  }>();
  const trailData: TrailProps = JSON.parse(rawTrailData);
  const [trail, setTrail] = useState<TrailProps | null>(null);

  useEffect(() => {
    async function fetchTrailData() {
      
      const data = await trailsService.getById(trailData.id);
      setTrail(data);
      console.log(data)
    }
    fetchTrailData();
  }, []);

  console.log(trailData);

  const renderItem = ({ item }: { item: TrailProps["gallery"][0] }) => {
    console.log(item.url);
    return (
      <Image
        className="rounded-2xl mr-2"
        source={{ uri: getImageUrl(item.url) || undefined }}
        style={{ width: 150, height: 190 }}
      />
    );
  };

  function handleOnPressStart() {}
  return (
    <SafeAreaView
      className="flex-1"
      edges={Platform.OS === "android" ? ["top", "bottom"] : ["top"]}
    >
      <ScrollView>
        <TrailHeader
          name={trail?.name}
          imgSrc={getImageUrl(trail?.coverUrl)}
          parkImage={parkImage}
        />
        <View className="p-6 gap-2">
          <View className="flex-row items-center ">
            <MaterialCommunityIcons name="clock" size={14} color="#BF360C" />
            <Text className="text-forestGreen-500 font-medium ml-2">
              {trail?.duration} min
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={14}
              color="#BF360C"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">
              {trail?.distance} km
            </Text>
          </View>
          <View className="flex-row items-center">
            <LevelIcon width={14} height={14} />
            <Text className="text-forestGreen-500 font-medium ml-2">
              {trail?.difficulty}
            </Text>
          </View>
        </View>
        <View className="bg-[#85808028] p-6">
          <Text className="text-forestGreen-500 font-semibold m-1">
            Descrição
          </Text>
          <Text className="text-black font-semibold m-1 text-justify text-xs">
            {trail?.shortDescription}
          </Text>
        </View>
        <View className="bg-[#FFE489] pl-6 py-6 ">
          <Text className="text-forestGreen-500 font-semibold m-1 mb-4">
            Imagens
          </Text>
          <FlatList
            data={trail?.gallery}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          className="bg-forestGreen-500 p-6 flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/(home)/landmarks")}
        >
          <View className="flex-row items-center gap-4">
            <Ionicons name="analytics-outline" size={24} color="white" />
            <Text className="text-white">Pontos de interesse</Text>
          </View>

          <Octicons
            className="mr-4"
            name="chevron-right"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#FFC500] p-6 flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/(home)/aboutTrail")}
        >
          <View className="flex-row items-center gap-4">
            <Foundation name="info" size={24} color="#113D31" />
            <Text className="text-forestGreen-500 font-semibold">
              Sobre a trilha
            </Text>
          </View>
          <Octicons
            className="mr-4"
            name="chevron-right"
            size={24}
            color="#113D31"
          />
        </TouchableOpacity>
        <View className="border border-forestGreen-500/50 p-6 m-10 rounded-2xl gap-4">
          <View className="flex-row items-center gap-2">
            <MaterialCommunityIcons
              name="shield-alert-outline"
              size={24}
              color="#FF3C00"
            />
            <Text className="text-forestGreen-500 font-semibold m-1">
              Dicas de seguança
            </Text>
          </View>

          <Text className=" font-semibold text-xs  m-1">
            {trail?.safetyTips}
          </Text>
        </View>
      </ScrollView>
      <StartButton 
        onPress={() => {
          if (!trail) return;
          router.push({
            pathname: "/(tabs)/(home)/startTrail",
            params: { 
              trail: JSON.stringify(trail),
              parkImage: parkImage }
          });
        }} 
      />
    </SafeAreaView>
  );
}

export default detailTrail;
