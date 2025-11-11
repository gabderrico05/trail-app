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
      className={`flex-col h-[40%] items-center rounded-xl p-3 mb-3 mt-14 border-2 ${
        pressed ? "border-butterYellow" : "border-gray-300"
      } mr-9 ml-9`}
    >
      <View
           className=" w-15 h-fit flex-1 rounded-2xl items-center bg-gray-800">
        {image && (
          <Image 
            source={{ uri: image }}
            resizeMode="contain"
            className={`w-full h-full ${imageLoaded && 'bg-white'}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </View>
      <View><Text className="text-sm font-semibold text-gray-900">{name}</Text></View>
    </Pressable>
  );
}