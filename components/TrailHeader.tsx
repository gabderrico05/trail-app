import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import ReturnButton from "./ReturnButton";

function TrailHeader() {
  return (
    <ImageBackground
      style={{ height: "auto", width: "100%" }}
      source={require("@/assets/imageTrilha.jpg")}
      resizeMode="cover"
    >
      <View className="p-6">
        <View className="w-full">
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
      </View>
    </ImageBackground>
  );
}

export default TrailHeader;
