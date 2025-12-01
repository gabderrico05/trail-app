import TrailHeader from "@/components/TrailHeader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function startTrail() {

  function handleOnPressStart() {}
  return (
    <SafeAreaView className="flex-1" edges={Platform.OS === 'ios' ? ['top', 'bottom']: ['top', 'bottom']}>
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
      <View className="p-5 border-t border-forestGreen-500/50">
        <TouchableOpacity
          onPress={handleOnPressStart}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-center py-5 rounded-2xl pr-3 mx-5"
        >
           <MaterialCommunityIcons name="qrcode" size={40} color="white" /> 
          <Text className="text-white text-2xl font-bold ml-5">Ler QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default startTrail;
