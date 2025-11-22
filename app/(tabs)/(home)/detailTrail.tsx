import LevelIcon from "@/assets/level_icon.svg";
import StartButton from "@/components/StartButton";
import TrailHeader from "@/components/TrailHeader";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ImgProps = {
  src: any;
};

const images: ImgProps[] = [
  { src: require("@/assets/imagem_trilha.jpg") },
  { src: require("@/assets/imagem_trilha2.jpg") },
  { src: require("@/assets/imagem_trilha3.jpg") },
  { src: require("@/assets/imagem_trilha.jpg") },
  { src: require("@/assets/imagem_trilha2.jpg") },
  { src: require("@/assets/imagem_trilha3.jpg") },
];

function detailTrail() {
  const renderItem = ({ item }: { item: ImgProps }) => {
    return (
      <Image
        className="rounded-2xl mr-2"
        source={item.src}
        style={{ width: 150, height: 190 }}
      />
    );
  };

  function handleOnPressStart() {}
  return (
    <SafeAreaView className="flex-1"  edges={Platform.OS === 'ios' ? ['top', 'bottom']: ['top']}>
      <ScrollView>
        <TrailHeader />
        <View className="p-6 gap-2">
          <View className="flex-row items-center ">
            <MaterialCommunityIcons name="clock" size={14} color="#BF360C" />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Tempo Estimado
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={14}
              color="#BF360C"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Distância
            </Text>
          </View>
          <View className="flex-row items-center">
            <LevelIcon width={14} height={14} />
            <Text className="text-forestGreen-500 font-medium ml-2">Nível</Text>
          </View>
        </View>
        <View className="bg-[#85808028] p-6">
          <Text className="text-forestGreen-500 font-semibold m-1">
            Descrição
          </Text>
          <Text className="text-black font-semibold m-1 text-justify text-xs">
            A Trilha leva você a um dos melhores pontos de observação da baía. O
            percurso é sombreado pela mata e possui trechos com pequenas
            subidas.
          </Text>
        </View>
        <View className="bg-[#FFE489] pl-6 py-6 ">
          <Text className="text-forestGreen-500 font-semibold m-1 mb-4">
            Imagens
          </Text>
          <FlatList
            data={images}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          className="bg-forestGreen-500 p-6 flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/(home)/interestPoints")}
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
            Use calçados adequados. Prefira tênis ou botas com sola
            antiderrapante para evitar escorregões.
          </Text>
          <Text className=" font-semibold text-xs  m-1">
            Leve água e lanches leves. Mantenha-se hidratado e faça pequenas
            pausas para se alimentar.
          </Text>
          <Text className=" font-semibold text-xs  m-1">
            Não se afaste da trilha marcada. Trilhas secundárias podem ser
            perigosas e dificultar a localização em caso de emergência.
          </Text>
        </View>
      </ScrollView>
      <StartButton />
    </SafeAreaView>
  );
}

export default detailTrail;
