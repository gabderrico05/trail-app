import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type PointCardProps = {
  image?: any;
  name: string;
  onPress?: () => void;
};

export default function ParkCard({
  image,
  name,
  onPress,
}: PointCardProps) {
  const [pressed, setPressed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`flex-col min-h-fit items-center rounded-xl p-3 mb-3 border-2 ${
        pressed ? "border-butterYellow" : "border-gray-300"
      } mr-9 ml-9`}
    >
      <View
           className="w-full h-24 rounded-2xl items-center mx-3 bg-gray-300">
        {image && (
          <Image 
            source={{ uri: image }}
            resizeMode="contain"
            className={`w-full h-full ${imageLoaded && 'bg-white'}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </View>
      <View><Text className="text-xl font-semibold text-gray-900">{name}</Text></View>
    </Pressable>
  );
}