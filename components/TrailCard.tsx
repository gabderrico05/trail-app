import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LevelIcon from "../assets/level_icon.svg";

const TrailCard = ({
  imgSrc,
  title,
  time,
  distance,
  level,
  detailLink,
}: {
  imgSrc: string;
  title: string;
  time: string;
  distance: string;
  level: string;
  detailLink: string;
}) => {
  function handleOnPressStart() {}

  function handleOnPressDetails() {
    router.push(`/detailTrail`);
  }
  return (
    <View className="w-full max-h-min bg-white rounded-2xl overflow-hidden my-2.5 shadow-lg p-4">
      <Image
        source={require("../assets/imagem_trilha.jpg")}
        style={{ width: "100%", height: 128 }}
        className="rounded-xl"
      />

      <View className=" w-full pt-1">
        <Text className="text-xl font-bold mb-2 text-forestGreen-500">
          {title}
        </Text>

        {/* Seção de Detalhes */}
        <View className="mb-4">
          <View className="flex-row items-center mb-1.5">
            <MaterialCommunityIcons name="clock" size={16} color="#BF360C" />
            <Text className="ml-2 text-sm text-forestGreen-500 font-semiold">
              {time}
            </Text>
          </View>
          <View className="flex-row items-center mb-1.5">
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={16}
              color="#BF360C"
            />
            <Text className="ml-2 text-sm text-forestGreen-500 font-semiold">
              {distance}
            </Text>
          </View>
          <View className="flex-row items-center">
            <LevelIcon width={16} height={16} />
            <Text className="ml-2 text-sm text-forestGreen-500 font-semiold">
              {level}
            </Text>
          </View>
        </View>

        {/* Botões */}
        <TouchableOpacity
          className="bg-[#FDECB9] py-3 rounded-xl items-center mb-2.5"
          onPress={handleOnPressDetails}
        >
          <Text className="text- font-medium text-forestGreen-500">
            Ver mais detalhes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleOnPressStart}
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
