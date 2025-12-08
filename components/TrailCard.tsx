import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LevelIcon from "../assets/level_icon.svg";

const TrailCard = ({
  imgSrc,
  title,
  time,
  distance,
  level,
  onPressDetails,
  onPressStart,
}: {
  imgSrc: string;
  title: string;
  time: string;
  distance: string;
  level: string;
  onPressDetails: () => void;
  onPressStart: () => void;
}) => {
  function handleOnPressStart() {

  }
  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);
  return (
    <View className="w-full max-h-min bg-white rounded-2xl overflow-hidden my-2.5 shadow-lg p-4 border border-black/20">
      <View className="w-full h-32 rounded-xl bg-slate-200 relative">
        {!imgSrc && (
          <FontAwesome6
            name="image"
            size={24}
            color="#cbd5e1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <Image
          source={{ uri: imgSrc }}
          resizeMode="cover"
          style={{ width: "100%", height: 128, borderRadius: 12 }}
        />
      </View>

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
          onPress={onPressDetails}
        >
          <Text className="text- font-medium text-forestGreen-500">
            Ver mais detalhes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressStart}
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
