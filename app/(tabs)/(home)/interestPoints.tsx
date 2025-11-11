import StartButton from "@/components/StartButton";
import TrailHeader from "@/components/TrailHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

function interestPoints() {
  return (
    <View className="flex-col flex-1">
      <TrailHeader />
      <View className="bg-forestGreen-500 p-6 flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <Ionicons name="analytics-outline" size={24} color="white" />
          <Text className="text-white">Pontos de interesse</Text>
        </View>
      </View>
      <StartButton />
    </View>
  );
}

export default interestPoints;
