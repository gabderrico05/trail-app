import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      style={{ height: "auto", width: "auto" }}
      source={{ uri: imgSrc || undefined }}
      resizeMode="cover"
    >
      <View className="p-6  overflow-hidden" style={{ paddingTop: insets.top }}>
        <View className="w-full">
          <ReturnButton buttonType="secondary" />
        </View>
        <View className="bg-white items-center p-2 px-4 mt-8 rounded-2xl flex-row overflow-hidden">
          <Text className="text-forestGreen-500 text-lg font-bold mr-auto adjustsFontSizeToFit" numberOfLines={1} minimumFontScale={0.8}>
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
