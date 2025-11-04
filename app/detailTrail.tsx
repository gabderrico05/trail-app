import ReturnButton from "@/components/ReturnButton";
import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LevelIcon from "../assets/level_icon.svg";

type ImgProps = {
  src: any;
};

const images: ImgProps[] = [
  { src: require("../assets/imagem_trilha.jpg") },
  { src: require("../assets/imagem_trilha2.jpg") },
  { src: require("../assets/imagem_trilha3.jpg") },
  { src: require("../assets/imagem_trilha.jpg") },
  { src: require("../assets/imagem_trilha2.jpg") },
  { src: require("../assets/imagem_trilha3.jpg") },
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
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ImageBackground
          className="p-6"
          style={{ height: "auto", width: "100%" }}
          source={require("../assets/imageTrilha.jpg")}
          resizeMode="cover"
        >
          <View className="w-full ">
            <ReturnButton buttonType="secondary" />
          </View>
          <View className="bg-white items-center p-2 px-4 mt-4 rounded-2xl flex-row">
            <Text className="text-forestGreen-500 font-bold mr-auto">
              Trilha da Pedra Branca
            </Text>
            <Image
              source={require("../assets/parqueEstadual.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
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
        <View className="bg-forestGreen-500 p-6 flex-row items-center justify-between">
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
        </View>
        <View className="bg-[#FFC500] p-6 flex-row items-center justify-between">
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
        </View>
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
      <View className="p-5 border-t border-forestGreen-500/50">
        <TouchableOpacity
          onPress={handleOnPressStart}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-end py-5 rounded-2xl pr-3 mx-5"
        >
          <Text className="text-white text-lg font-bold mr-1">Iniciar</Text>
          <Feather name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default detailTrail;
