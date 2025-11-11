import LogoApp from "@/components/LogoApp";
import ParkCard from "@/components/ParkCards";
import ReturnButton from "@/components/ReturnButton";
import SearchBar from "@/components/SearchBar";
import TextFont from "@/components/TextFont";
import { EntityProps } from "@/types/Entity";
import axios from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectPark() {
  const [allEntities, setAllEntities] = useState<EntityProps[]>([]);
  const [entities, setEntities] = useState<EntityProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchEntities() {
      (async () => {
        try {
          const { data } = await axios.get<{
            entities: EntityProps[];
          }>("https://api.trilhainterativa.com.br/entities");
          setAllEntities(data.entities);          
          setEntities(data.entities);              
          setLoading(false);
        } catch (error) {
          Alert.alert(
            "Ocorreu um erro Inesperado \nPor favor, tente novamente mais tarde."
          );
        } finally {
          setLoading(false);
        }
      })();
    }
    fetchEntities();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white"
      
      edges={Platform.OS === 'ios' ? ['top', 'bottom']: ['top']}
    >
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={"#113D31"} />
        </View>
      ) : (
        <View className="flex-1">
          <FlatList
            ListHeaderComponent={
              <Header
                allEntities={allEntities}
                onFiltered={setEntities}
              />
            }
            data={entities}
            renderItem={({ item: entity }) => (
              <ParkCard
                image={"/imagem_trilha.jpg"}
                name={entity.name}
                complement={entity.nameComplement}
                address={entity.address}
                onPress={() => {
                  router.push({
                    pathname: "/selectTrail",
                    params: {
                      park: JSON.stringify(entity),
                    },
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View className="flex-1 h-full justify-center items-center py-5">
                <TextFont className="text-forestGreen-400 text-center text-lg">
                  Nenhum resultado encontrado
                </TextFont>
              </View>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

type HeaderProps = {
  allEntities: EntityProps[];
  onFiltered: (entities: EntityProps[]) => void;
};

export function Header({ allEntities, onFiltered }: HeaderProps) {
  return (
    <View className="px-7">
      <ReturnButton />
      <View className="items-center gap-4">
        <LogoApp className="w-[152px] h-[149px]" />
        <TextFont className="text-xl font-bold text-forestGreen-500 text-center">
          Pronto para começar?
        </TextFont>
        <TextFont
          className="text-md text-forestGreen-500 text-center"
          numberOfLines={1}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.8}
        >
          Selecione a instituição ou parque e comece a explorar.
        </TextFont>
        <TextFont className="text-md text-forestGreen-500 text-center">
          Permita o compartilhamento de localização para uma experiência
          aprimorada
        </TextFont>

        <SearchBar
          className="mx-6 mt-1 mb-6"
          data={allEntities}
          filterKey={
            ["name", "address", "nameComplement"] as (keyof EntityProps)[]
          }
          onFiltered={onFiltered} 
        />
      </View>
    </View>
  );
}
