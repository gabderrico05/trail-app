import LandmarkTopic from "@/components/LandmarkTopic";
import QRCodeButton from "@/components/QRCodeButton";
import TrailHeader from "@/components/TrailHeader";
import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function startTrail() {
  
  const { trail, parkImage } = useLocalSearchParams<{ trail: string, parkImage: string}>();
  const trailData: TrailProps = JSON.parse(trail);


  const landmarks: LandMarkProps[] = trailData.pointsOfInterest
  

  return (
    <SafeAreaView className="flex-1" edges={Platform.OS === 'ios' ? ['top']: ['top', 'bottom']}>
      
        <FlatList
          ListHeaderComponent={<TrailHeader name={trailData.name} imgSrc={trailData.coverUrl} parkImage={parkImage}/>}
          className="gap-2"
          data={landmarks}
          renderItem={ ({item}) => (
            <View className="px-6">
              <LandmarkTopic title={item.name} id={item.id}/>
            </View>
          )}
          ListEmptyComponent={<Text className="px-6">esta trilha não possui pontos de interesse</Text>}
        />
      <QRCodeButton/>
    </SafeAreaView>
  );
}

export default startTrail;
