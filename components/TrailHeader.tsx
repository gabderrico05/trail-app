import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import ReturnButton from "./ReturnButton";

function TrailHeader({
  name,
  imgSrc,
  parkImage,
}: {
  name?: string;
  imgSrc?: string | null;
  parkImage?: string | null;
}) {
  return (
    <ImageBackground
      style={{ height: "auto", width: "auto" }}
      source={{ uri: imgSrc || undefined }}
      resizeMode="cover"
    >
      <View className="p-6">
        <View className="w-full">
          <ReturnButton buttonType="secondary" />
        </View>
        <View className="bg-white items-center p-2 px-4 mt-4 rounded-2xl flex-row">
          <Text className="text-forestGreen-500 font-bold mr-auto">
            {name || "Nome da trilha"}
          </Text>
          <Image
            source={{ uri: parkImage || undefined }}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default TrailHeader;
