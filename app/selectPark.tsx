import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import ParkCard from "@/components/ParkCards";
import ReturnButton from "@/components/ReturnButton";
import SearchBar from "@/components/SearchBar";
import TextFont from "@/components/TextFont";
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const [filteredParks, setFilteredParks] = useState(parksData);

  const { height } = Dimensions.get("window");
  const logoWidth = height < 900 ? 132 : 152;
  const logoHeight = height < 900 ? 129 : 149;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-7">
        <ReturnButton />
        
        <View className="items-center gap-4">
          <LogoApp width={logoWidth} height={logoHeight} className="" />
          
          <TextFont className="text-xl font-bold text-forestGreen-500 text-center">
            Pronto para começar?
          </TextFont>
          
            <TextFont className={`${height < 900 ? 'text-sm' : 'text-md'} text-forestGreen-500 text-center`}>
            Selecione a instituição ou parque e comece a explorar.
          </TextFont>
          
          <TextFont className="text-md text-forestGreen-500 text-center">
            Permita o compartilhamento de localização para uma experiência aprimorada
          </TextFont>
          
          <SearchBar 
            className="mx-6 mt-1" 
            data={parksData}
            filterKey="title"
            onFiltered={setFilteredParks}
          />
        </View>
      </View>

      <View className="flex-1 pt-4">
        <View className="flex-1">
          <FlatList
            data={filteredParks}
            renderItem={({ item }) => (
              <ParkCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => { router.push('/') }}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 justify-center items-center py-10">
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

        <View className={`mt-4 ${filteredParks.length === 0 ? 'flex-1' : ''}`}>
          <Button 
            buttonType="ghost" 
            viewClassName="mb-3" 
            buttonClassName="w-auto px-3 py-1.5 rounded-xl" 
            textClassName="text-sm font-medium"
          >
            PROCURAR NO MAPA
          </Button>
        </View>
         <Button buttonType="secondary" viewClassName={`${height < 900 ? 'mt-[23%]' : 'mt-[27%]'}`}> 
          Continuar 
        </Button>
        
      </View>
    </SafeAreaView>
  );
}