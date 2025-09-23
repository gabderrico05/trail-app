import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrailCard = ({ 
  imagemUrl, 
  titulo, 
  tempo, 
  distancia, 
  nivel,
  onPressDetalhes,
  onPressIniciar,
}) => {
  return (
    <View className="min-w-64 max-w-[70%] max-h-min bg-white rounded-2xl overflow-hidden my-2.5 mx-4 shadow-lg pb-1">
      <Image source={{ uri: imagemUrl }} className="w-full h-40" />
      
      <View className="p-4 w-full">
        <Text className="text-xl font-bold mb-2 text-gray-800">{titulo}</Text>

        {/* Seção de Detalhes */}
        <View className="mb-4">
          <View className="flex-row items-center mb-1.5">
            <MaterialCommunityIcons name="clock-time-eight-outline" size={16} color="#c41a1a" />
            <Text className="ml-2 text-sm text-forestGreen-600">Tempo estimado: aaaaaaaaaaaaaaaaaaaaaaaaaaaa{tempo}</Text>
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
          <Text className="text-base font-medium text-gray-700">Ver mais detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressIniciar}
          activeOpacity={0.7}
          className="bg-[#387664] flex-row items-center justify-end py-3 rounded-xl pr-3"
        >
          <Text className="text-white text-lg font-bold mr-1">Iniciar</Text>
          <Feather name="chevron-right" size={22} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TrailCard;