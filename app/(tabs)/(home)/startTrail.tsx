import ReturnButton from "@/components/ReturnButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
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

function startTrail() {

  function handleOnPressStart() {}
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ImageBackground
          className="p-6"
          style={{ height: "auto", width: "100%" }}
          source={require("@/assets/imageTrilha.jpg")}
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
              source={require("@/assets/parqueEstadual.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
        <View className="p-6 gap-2">
          <View className="flex-row items-center ">
            <MaterialCommunityIcons name="check-circle" size={50} color="forestGreen-500" />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Inicio da Trilha
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={50}
              color="forestGreen-500"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Gruta da Pedra Furada (+1,2km)
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={50}
              color="forestGreen-500"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">Pedra do Sol (+1km)</Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-5 border-t border-forestGreen-500/50">
        <TouchableOpacity
          onPress={handleOnPressStart}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-center py-5 rounded-2xl pr-3 mx-5"
        >
           <MaterialCommunityIcons name="qrcode" size={40} color="white" /> 
          <Text className="text-white text-2xl font-bold ml-5">Ler QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default startTrail;
