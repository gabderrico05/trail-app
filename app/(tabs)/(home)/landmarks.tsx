import { LandmarkCard } from "@/components/LandmarkCard";
import ReturnButton from "@/components/ReturnButton";
import StartButton from "@/components/StartButton";
import { useStartTrail } from "@/hooks/useStartTrail";
import { getImageUrl } from "@/lib/api";
import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function landmarks() {
  const { start, buttonText } = useStartTrail();

  useEffect(() => {}, [buttonText]);

  const { trail, parkImage } = useLocalSearchParams<{
    trail: string;
    parkImage: string;
  }>();

  if (!trail) {
    router.back();
    return null;
  }
  const trailData: TrailProps = JSON.parse(trail);

  const landmarks: LandMarkProps[] = trailData?.pointsOfInterest || [];

  const LandmarksHeader = () => {
    return (
      <View className="mb-6">
       <ImageBackground
        className="p-6"
        style={{ height: "auto", width: "auto" }}
        source={{ uri: getImageUrl(trailData?.coverUrl) || undefined }}
        resizeMode="cover"
      >
        <View className="w-full ">
          <ReturnButton buttonType="secondary" />
        </View>
        <View className="bg-white items-center p-2 px-4 mt-4 rounded-2xl flex-row">
          <Text className="text-forestGreen-500 font-bold mr-auto">
            {trailData?.name}
          </Text>
          <Image
            source={{ uri: parkImage }}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>

      <View className="bg-forestGreen-500 justtfy-center">
        <View className="flex-row items-center mb-4 pt-3 pl-3">
          <Ionicons name="analytics-outline" size={40} color="white" />
          <Text className="ml-2 text-white font-semibold">
            Pontos de interesse
          </Text>
        </View>
      </View>
      </View>
    );
  }


  return (
    <SafeAreaView className="flex-1">
     
      <FlatList
        data={landmarks}
        ListHeaderComponent={LandmarksHeader}
        keyExtractor={(item: LandMarkProps, index: number) => String(item?.id)}
        renderItem={({ item }) => (
          <LandmarkCard
            landmark={item}
            onPress={() =>
              router.push({
                pathname: "/(tabs)/(home)/detailPoint",
                params: {
                  landmark: JSON.stringify(item),
                  trail: trail,
                  parkImage: parkImage,
                },
              })
            }
          />
        )}
      />
      <StartButton
        text={buttonText}
        onPress={() => start(trailData, parkImage)}
      />
    </SafeAreaView>
  );
}

export default landmarks;
