import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../assets/forward_button_icon.svg";

type ParkCardProps = {
  image?: any;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function ParkCard({
  image,
  title,
  subtitle,
  onPress,
}: ParkCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center rounded-xl p-3 mb-3 border mr-9 ml-9`}
    >
      {image && (
        <Image
          source={image}
          className="w-12 h-12 rounded-md mr-3"
          resizeMode="cover"
        />
      )}
      <View className="flex-1">
        <Text className="text-sm font-semibold text-gray-900">{title}</Text>
        <Text className="text-xs text-gray-500">{subtitle}</Text>
      </View>
      <View className="ml-3">
        <Button />
      </View>
    </TouchableOpacity>
  );
}