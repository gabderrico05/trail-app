import LogoApp from "@/components/LogoApp";
import ParkCard from "@/components/ParkCards";
import ReturnButton from "@/components/ReturnButton";
import SearchBar from "@/components/SearchBar";
import TextFont from "@/components/TextFont";
import parquesData from "@/db-mock/parques.json";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export const parksData = [
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
  {
    id: '6',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '7',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
];



export default function App() {
  
  const [filteredParks, setFilteredParks] = useState(parquesData);


  return (
    <SafeAreaView className="flex-1 bg-white">
      

        <View className="flex-1">
          <FlatList
            ListHeaderComponent={Header({setFilteredParks})}
            data={filteredParks}
            renderItem={({ item }) => (
              <ParkCard
                image={item.image}
                title={item.name}
                subtitle={item.address}
                onPress={() => { router.push('/selectTrail') }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 h-full justify-center items-center py-5">
                <TextFont className="text-forestGreen-400 text-center text-lg">
                  Nenhum resultado encontrado
                </TextFont>
                <TextFont className="text-forestGreen-400 text-center text-sm mt-2">
                  Tente pesquisar por outro termo
                </TextFont>
              </View>
            }
          />
        </View>

        
        
    </SafeAreaView>
  );
}

type HeaderProps = {
  setFilteredParks: (parkdata: typeof parquesData) => void
};


export function Header({ setFilteredParks}: HeaderProps) {
  return (
    <View className="px-7">
      <ReturnButton />
      
      <View className="items-center gap-4">
        <LogoApp  className="w-[152px] h-[149px]" />
        
        <TextFont className="text-xl font-bold text-forestGreen-500 text-center">
          Pronto para começar?
        </TextFont>
        
        <TextFont className={` text-md text-forestGreen-500 text-center`}>
          Selecione a instituição ou parque e comece a explorar.
        </TextFont>
        
        <TextFont className="text-md text-forestGreen-500 text-center">
          Permita o compartilhamento de localização para uma experiência aprimorada
        </TextFont>
        
        <SearchBar
          className="mx-6 mt-1 mb-6"
          data={parquesData}
          filterKey={["name", "address"]}
          onFiltered={setFilteredParks}
        />
      </View>
    </View>
  );
}



