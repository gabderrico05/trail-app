import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../assets/forward_button_icon.svg";

type ParkCardProps = {
  image?: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export default function ParkCard({
  image,
  title,
  subtitle,
  onPress,
}: ParkCardProps) {
  const [pressed, setPressed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`flex-row min-h-fit items-center rounded-xl p-3 mb-3 border-2 ${
        pressed ? "border-butterYellow" : "border-gray-300"
      } mr-9 ml-9`}
    >
      <View
           className="w-12 h-12 mr-3 rounded-full items-center justify-center bg-lightGray-300">
        {image && (
          <Image 
            source={{ uri: image }}
            resizeMode="contain"
            className={`w-full h-full ${imageLoaded && 'bg-white'}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </View>
      
      
      <View className="flex-1">
        <Text className="text-sm font-semibold text-gray-900">{title}</Text>
        {subtitle && <Text className="text-xs text-gray-500">{subtitle}</Text>}
      </View>
      <View className="ml-3">
        <Button />
      </View>
    </Pressable>
  );
}