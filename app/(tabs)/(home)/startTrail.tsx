import QRCodeButton from "@/components/QRCodeButton";
import TrailHeader from "@/components/TrailHeader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function startTrail() {

  function handleOnPressStart() {}
  return (
    <SafeAreaView className="flex-1" edges={Platform.OS === 'ios' ? ['top']: ['top', 'bottom']}>
      <ScrollView>
        <TrailHeader />
        <View className="p-6 gap-2">
          <View className="flex-row items-center ">
            <MaterialCommunityIcons name="check-circle" size={50} color="forestGreen-500" />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Inicio da Trilha
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={50}
              color="forestGreen-500"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">
              Gruta da Pedra Furada (+1,2km)
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={50}
              color="forestGreen-500"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">Pedra do Sol (+1km)</Text>
          </View>
        </View>
      </ScrollView>
      
        <QRCodeButton />
      
    </SafeAreaView>
  );
}

export default startTrail;
