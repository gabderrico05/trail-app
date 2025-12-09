import LandmarkTopic from "@/components/LandmarkTopic";
import QRCodeButton from "@/components/QRCodeButton";
import TrailHeader from "@/components/TrailHeader";
import { useTrailSession } from "@/store/useTrailSession";
import React from "react";
import {
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function startTrail() {
  
  const currentTrail = useTrailSession((s) => s.currentTrail);

  if (!currentTrail) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center" edges={Platform.OS === 'ios' ? ['top']: ['top', 'bottom']}>
        <Text>Você não está em nenhuma trilha no momento.</Text>
      </SafeAreaView>
    );
  }
  

  return (
    <SafeAreaView className="flex-1" edges={Platform.OS === 'ios' ? ['top']: ['top', 'bottom']}>
      
        <FlatList
          ListHeaderComponent={<TrailHeader name={currentTrail.name} imgSrc={currentTrail.coverUrl} parkImage={""}/>}
          className="gap-2"
          data={currentTrail.landmarks}
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
