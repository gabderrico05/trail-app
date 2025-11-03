import ReturnButton from "@/components/ReturnButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LevelIcon from "../assets/level_icon.svg";

function detailTrail() {
  return (
    <SafeAreaView className="flex-1">
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
      <View className="p-6">
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="clock" size={16} color="#BF360C" />
          <Text className="text-forestGreen-500 font-medium ml-2">
            Tempo Estimado
          </Text>
        </View>
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={16}
            color="#BF360C"
          />
          <Text className="text-forestGreen-500 font-medium ml-2">
            Distância
          </Text>
        </View>
        <View className="flex-row items-center">
          <LevelIcon width={16} height={16} />
          <Text className="text-forestGreen-500 font-medium ml-2">Nível</Text>
        </View>
      </View>
      <View className="bg-[#85808028] p-6">
        <Text className="text-forestGreen-500 font-semibold m-1">
          Mais informações
        </Text>
        <Text className="text-black font-semibold m-1 text-justify text-xs">
          A Trilha leva você a um dos melhores pontos de observação da baía. O
          percurso é sombreado pela mata e possui trechos com pequenas subidas.
        </Text>
      </View>
      <View className="border border-forestGreen-500/50 p-6 m-6 rounded-2xl ">
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name="shield-alert-outline"
            size={24}
            color="#FF3C00"
          />
          <Text className="text-forestGreen-500 font-semibold m-1">
            Dicas de seguança
          </Text>
        </View>

        <Text className=" font-semibold text-xs text-justify m-1">
          Use calçados adequados. Prefira tênis ou botas com sola antiderrapante
          para evitar escorregões.
        </Text>
        <Text className=" font-semibold text-xs text-justify m-1">
          Leve água e lanches leves. Mantenha-se hidratado e faça pequenas
          pausas para se alimentar.
        </Text>
        <Text className=" font-semibold text-xs text-justify m-1">
          Não se afaste da trilha marcada. Trilhas secundárias podem ser
          perigosas e dificultar a localização em caso de emergência.
        </Text>
      </View>
      <View className="bg-[#FFF4D0] p-5 ">
        <View>
          <Text className="text-forestGreen-500 font-semibold">Imagens</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default detailTrail;
