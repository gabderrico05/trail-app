import { getImageUrl } from "@/lib/api";
import { LandMarkProps } from "@/types/Landmark";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function LandmarkCard({ landmark, onPress }: { landmark: LandMarkProps, onPress?: () => void }) {
  return (
    // O CARD PRINCIPAL
    <TouchableOpacity activeOpacity={0.7} className="p-4" onPress={onPress}>
      <View className="bg-white rounded-xl drop-shadow-sm overflow-hidden p-4">
        {/* CONTÊINER DA IMAGEM*/}
        <View className="w-full bg-gray-100 h-40 rounded-lg overflow-hidden mb-2 relative">
          {!landmark.coverUrl && (
            <FontAwesome6
              name="image"
              size={32}
              color="#cbd5e1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}
          <Image
            source={{ uri: getImageUrl(landmark.coverUrl) ?? "" }} // Substitua pela sua imagem
            className="w-full h-full"
            resizeMode="cover"
            width={50}
            height={100}
          />
        </View>

        {/* ÁREA DO TEXTO */}
        <View className="pt-2 justify-center items-center">
          <Text className="text-lg font-gabarito font-forestGreen-500">
            {landmark.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
