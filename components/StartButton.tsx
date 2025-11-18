import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function StartButton() {
  function handleOnPressStart(): void {}

  return (
    <View className="p-5 border-t border-forestGreen-500/50 mt-auto">
      <TouchableOpacity
        onPress={handleOnPressStart}
        activeOpacity={0.7}
        className="bg-forestGreen-400 flex-row items-center justify-end py-5 rounded-2xl pr-3 mx-5"
      >
        <Text className="text-white text-lg font-bold mr-1">Iniciar</Text>
        <Feather name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default StartButton;
