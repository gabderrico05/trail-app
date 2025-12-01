import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function QRCodeButton({ text = "Iniciar" }: { text?: string }) {
  function handleOnPressStart(): void {
  router.push(`/qrCode`);
  }

  return (
    <View className="p-5 border-t border-forestGreen-500/50 mt-auto">

      <TouchableOpacity
          onPress={handleOnPressStart}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-center py-4 rounded-2xl pr-3 mx-5"
        >
           <MaterialCommunityIcons name="qrcode" size={30} color="white" /> 
          <Text className="text-white text-lg font-bold ml-5">Ler QR Code</Text>
    </TouchableOpacity>

    </View>
    
  );
}

export default QRCodeButton;