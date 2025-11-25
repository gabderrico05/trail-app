import EndDrawing from '@/assets/endDrawing.svg';
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function endTrail() {
  const handleOnPressStart = () => {
    // TODO: replace with actual navigation or QR scanner logic
    router.push("/(tabs)/(home)");
  };

  return (
    <SafeAreaView className="flex-1  bg-lemnonYellow items-center pt-60">
      <StatusBar backgroundColor="#000" translucent barStyle="dark-content" />
      <View>
        <EndDrawing width={280} height={240} />
      </View>
      <Text className=" text-forestGreen-500 text-2xl font-bold mb-5 max-w-[60%] text-center">
        Parabéns! Você chegou ao final da trilha!
      </Text>
      
      <View className="pt-56">
        <TouchableOpacity
          onPress={handleOnPressStart}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-center py-5 rounded-2xl pr-3 mx-5"> 
          <Text className="text-white text-xl font-bold mr-5 ml-56">Continuar</Text>
          <Feather name="chevron-right" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default endTrail;
