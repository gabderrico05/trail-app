import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import ParkCard from "@/components/ParkCards";
import QRCodeButton from "@/components/QRCodeButton";
import ReturnButton from "@/components/ReturnButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import './global.css';

export default function App() {

  return (

<View className="flex-1 items-center justify-center bg-gray-100 gap-2">
      
      <LogoApp />
      <View className="w-full px-9">
      
        <QRCodeButton/>
      </View>

      <ParkCard
        image={require("../assets/park_icon.png")}
        title="Parque Estadual da Serra do Mar - Núcleo Caraguatatuba"
        subtitle="Rua Horto Florestal, 1200."
        onPress={() => {}}
      />
      
      <ParkCard
        title="Parque Estadual da Serra do Mar - Núcleo Caraguatatuba"
        subtitle=""
        onPress={() => {}}
      />

      <ParkCard
        title="Parque Estadual da Serra do Mar - Núcleo Caraguatatuba"
        subtitle=""
        onPress={() => {}}
      />


      <Button buttonType="primary" onPress={() => {}}>
        Começar
      </Button>
      <Button  buttonType="secondary" onPress={() => {router.push('/selectPark')}}>
        Começar
      </Button>
      <View className="w-full bg-gray-200 p-3 gap-3">
        <ReturnButton/>
        <ReturnButton buttonType="secondary"/>
        <QRCodeButton/>
      </View>
      
    </View>
  );
}