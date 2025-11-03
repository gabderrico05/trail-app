import EntityBanner from "@/components/EntityBanner";
import SearchBar from "@/components/SearchBar";
import TrailCard from "@/components/TrailCard";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import trails from "../db-mock/trilhas.json";


export default function SelectTrail() {
  const trailData = trails;
  const { park } = useLocalSearchParams<{ park: string }>();
  const parkData = park ? JSON.parse(park) : undefined;

  // Obter as margens exatas do SafeAreaView
  const insets = useSafeAreaInsets();

  const [filteredTrails, setFilteredTrails] = useState(trailData);

  return (
    <>
      <View
        style={{
          height: insets.top,
          backgroundColor: "#F3EEED",
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

              <View className="mx-5 mt-7 mb-4">
                <SearchBar
                  data={trailData}
                  onFiltered={setFilteredTrails}
                  filterKey={"name"}
                />
              </View>
            </View>
          }
          className="flex-1"
          data={filteredTrails}
          renderItem={({ item }) => (
            <View className="max-w-full mx-5">
              <TrailCard
                title={item.name}
                imgSrc={"../assets/" + item.imgSrc}
                distance={item.distance}
                time={item.estimated_time}
                level={item.level}
                detailLink={`/trailDetails?park=`}
              ></TrailCard>
            </View>
          )}
        />
      </View>
    </>
  );
}
