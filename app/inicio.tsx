import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import React from "react";
import { Text, View } from "react-native";

function inicio() {
  return (
    <View className="flex-1  bg-butterYellow items-center py-10">
      <LogoApp />
      <Text className=" text-forestGreen-500 text-xl font-bold my-5">
        Bem-vindo(a) à sua jornada interativa!
      </Text>
      <Text className=" text-forestGreen-500 text-md text-center w-2/3 font-semibold mb-auto">
        Explore trilhas de forma interativa, descubra curiosidades e registre
        conquistas a cada passo. Escolha sua rota e viva a experiência!
      </Text>
      <Button>Começar</Button>
    </View>
  );
}

export default inicio;
