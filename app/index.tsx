import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import ParkCard from "@/components/ParkCards";
import ReturnButton from "@/components/ReturnButton";
import SearchBar from "@/components/SearchBar";
import TextFont from "@/components/TextFont";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import './global.css';

 
export default function App() {
  const parksData = [
    {
      id: '1',
      image: require("../assets/park_icon.png"),
      title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
      subtitle: "Rua Horto Florestal, 1200.",
    },
    {
      id: '2',
      title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
      subtitle: "",
    },
    {
      id: '3',
      title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
      subtitle: "",
    },
    {
      id: '4',
      title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
      subtitle: "",
    },
    {
      id: '5',
      title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
      subtitle: "",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-2 px-7">
        <ReturnButton/>
      
        <View className="flex-2 items-center gap-4">
          <LogoApp width={120} height={120} className="mb-1"/>
          
          <TextFont className="text-xl font-bold text-forestGreen-500 text-center">
            Pronto para começar?
          </TextFont>

          <TextFont className="text-sm text-forestGreen-500 text-center">
            Selecione a instituição ou parque e comece a explorar.
          </TextFont>

          <TextFont className="text-md text-forestGreen-500 text-center">
            Permita o compartilhamento de localização para uma experiência aprimorada
          </TextFont>

          <SearchBar className="mx-6 mt-1"/>
        </View>

      </View>
      <View className="flex-1 pt-4">
      <FlatList
            data={parksData}
            renderItem={({ item }) => (
              <ParkCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => {router.push('/')}}
              />
            )}
            keyExtractor={(item) => item.id}
            className="flex-1"
            showsVerticalScrollIndicator={false}
          />
      
      
      {/* Teste 3: Seu botão problemático */}
      <Button buttonType="ghost" viewClassName=" mt-4 " buttonClassName="w-auto px-3 py-1.5 rounded-xl" textClassName="text-sm font-medium">
        PROCURAR NO MAPA
      </Button>
      
      <Button buttonType="secondary" viewClassName="flex-3 mt-12">
        Continuar
      </Button>
      </View>
    </SafeAreaView>
  );
}