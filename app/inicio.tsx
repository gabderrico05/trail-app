import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'react-native';

function inicio() {
  return (
    <SafeAreaView className="flex-1  bg-butterYellow items-center py-10">
      <StatusBar backgroundColor="#000" translucent barStyle="dark-content" />
      <LogoApp />
      <Text className=" text-forestGreen-500 text-xl font-bold my-5">
        Bem-vindo(a) à sua jornada interativa!
      </Text>
      <Text className=" text-forestGreen-500 text-md text-center w-2/3 font-semibold mb-auto">
        Explore trilhas de forma interativa, descubra curiosidades e registre
        conquistas a cada passo. Escolha sua rota e viva a experiência!
      </Text>
      <Button onPress={() => router.push("/selectPark")}>Começar</Button>
    </SafeAreaView>
  );
}

export default inicio;
