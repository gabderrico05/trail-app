import EntityBanner from "@/components/EntityBanner";
import SearchBar from "@/components/SearchBar";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SelectTrail() {
  const { park } = useLocalSearchParams<{ park: string }>();
  
  const parkData = park ? JSON.parse(park) : undefined;
  
  // Obter as margens exatas do SafeAreaView
  const insets = useSafeAreaInsets();

  const [filteredParks, setFilteredParks] = useState(parkData);

  return(
    <>
      <View 
        style={{ 
          height: insets.top, 
          backgroundColor: '#F3EEED' 
        }} 
      />

      <View 
        className="flex-1 bg-white"
        style={{
          paddingBottom: insets.bottom,
        }}
      >

    <FlatList
      ListHeaderComponent={
          <View>
            
          <EntityBanner {...parkData} />

          <View className="mx-7 mt-10">
            <SearchBar data={parkData} onFiltered={setFilteredParks} filterKey={"name"}/>
          </View>

        </View>
      }

      className="flex-1"
      data={filteredParks}
      
      renderItem={({ item }) => (
        <View >    
        </View>
      )}
    />

    </View>
    </>
  );
}




