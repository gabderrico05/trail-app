import EntityBanner from "@/components/EntityBanner";
import SearchBar from "@/components/SearchBar";
import TrailCard from "@/components/TrailCard";
import { useStartTrail } from "@/hooks/useStartTrail";
import { api, getImageUrl, trailsService } from "@/lib/api";
import { EntityProps } from "@/types/Entity";
import { TrailProps } from "@/types/Trail";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SelectTrail() {
  const { park } = useLocalSearchParams<{ park: string }>();
  const parkData: EntityProps = JSON.parse(park);

  const insets = useSafeAreaInsets();

  const [allTrails, setAllTrails] = useState<TrailProps[]>([]);
  const [filteredTrails, setFilteredTrails] = useState<TrailProps[]>([]);
  const [loading, setLoading] = useState(true);
   const { start, buttonText } = useStartTrail();

  useEffect(() => {
    async function fetchTrails() {
      try {
        const trailsData = await api.trails.getAll(parkData.id);
        setAllTrails(trailsData);
        setFilteredTrails(trailsData);
      } catch (error: any) {
        Alert.alert(
          "Erro",
          error?.message ||
            "Ocorreu um erro ao carregar as trilhas.\nPor favor, tente novamente."
        );
      } finally {
        setLoading(false);
      }
    }
    fetchTrails();
  }, [parkData?.id]);

  return (
    <>
      <View
        style={{
          height: insets.top,
          backgroundColor: "#F3EEED",
        }}
      />

      <View className="flex-1 bg-white">
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color={"#113D31"} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <View>
                <EntityBanner
                  name={parkData?.name}
                  nameComplement={parkData?.nameComplement}
                  image={getImageUrl(parkData?.coverUrl)}
                />

                <View className="mx-5 mt-7 mb-4">
                  <SearchBar
                    data={allTrails}
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
                  buttonText={buttonText}
                  title={item.name}
                  imgSrc={getImageUrl(item.coverUrl) || ""}
                  distance={`${item.distance} km`}
                  time={`${item.duration} min`}
                  level={item.difficulty}
                  onPressDetails={() => {
                    router.push({
                      pathname: "/detailTrail",
                      params: {
                        trailId: String(item.id),
                        parkImage: getImageUrl(parkData?.coverUrl) || "",
                      },
                    });
                  }}
                  onPressStart={async () => {
                    const data = await trailsService.getById(item.id);
                    const trail : TrailProps = data;
                    start(trail);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </>
  );
}
