import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrailCard = ({
  imagemUrl = 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop',
  titulo = 'Trilha da Montanha',
  tempo,
  distancia,
  nivel,
  onPressDetalhes,
  onPressIniciar,
}) => {
  return (
    <View className="w-full max-h-min bg-white rounded-2xl overflow-hidden my-2.5 mx-4 shadow-lg p-4">
      <Image
        source={{ uri: imagemUrl }}
        className="w-full h-32 rounded-xl"
      />

      <View className=" w-full pt-1">
        <Text className="text-xl font-bold mb-2 text-forestGreen-500">{titulo}</Text>

        {/* Seção de Detalhes */}
        <View className="mb-4">
          <View className="flex-row items-center mb-1.5">
            <MaterialCommunityIcons name="clock-time-eight-outline" size={16} color="#c41a1a" />
            <Text className="ml-2 text-sm text-forestGreen-600">Tempo estimado:{tempo}</Text>
          </View>
          <View className="flex-row items-center mb-1.5">
            <MaterialCommunityIcons name="map-marker-distance" size={16} color="#1a64c4" />
            <Text className="ml-2 text-sm text-forestGreen-600">Distância: {distancia}</Text>
          </View>
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="diamond-stone" size={16} color="#c47a1a" />
            <Text className="ml-2 text-sm text-forestGreen-600">Nível: {nivel}</Text>
          </View>
        </View>

        {/* Botões */}
        <TouchableOpacity
          className="bg-[#FDECB9] py-3 rounded-xl items-center mb-2.5"
          onPress={onPressDetalhes}
        >
          <Text className="text- font-medium text-forestGreen-500">Ver mais detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressIniciar}
          activeOpacity={0.7}
          className="bg-forestGreen-400 flex-row items-center justify-end py-3 rounded-xl pr-3"
        >
          <Text className="text-white text-md font-bold mr-1">Iniciar</Text>
          <Feather name="chevron-right" size={16} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TrailCard;