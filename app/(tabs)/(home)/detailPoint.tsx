import ReturnButton from "@/components/ReturnButton";
import StartButton from "@/components/StartButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ImgProps = {
  src: any;
};

const images: ImgProps[] = [
  { src: require("@/assets/imagem_trilha.jpg") },
  { src: require("@/assets/imagem_trilha2.jpg") },
  { src: require("@/assets/imagem_trilha3.jpg") },
  { src: require("@/assets/imagem_trilha.jpg") },
  { src: require("@/assets/imagem_trilha2.jpg") },
  { src: require("@/assets/imagem_trilha3.jpg") },
];

function detailPoint() {
  const renderItem = ({ item }: { item: ImgProps }) => {
    return (
      <Image
        className="rounded-2xl mr-2"
        source={item.src}
        style={{ width: 150, height: 190 }}
      />
    );
  };

  function handleOnPressStart() {}
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ImageBackground
          style={{ height: 230, width: "100%" }}
          source={require("@/assets/imageTrilha.jpg")}
          resizeMode="cover"
        >
          <View className="px-6 pb-6">
            <View className="flex-row gap-4 items-center justify-center">
              <View className="">
                <ReturnButton buttonType="secondary" />
              </View>
              <View className="bg-white items-center px-4 mt-4 rounded-3xl flex-row">
                <Text className="text-forestGreen-500 font-bold mr-auto">
                  Trilha da Pedra Branca
                </Text>
                <Image
                  source={require("@/assets/parqueEstadual.png")}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View className="flex-row items-center p-6 gap-3">
          <FontAwesome name="arrow-circle-o-right" size={30} color="black" />
          <Text className="text-forestGreen-500 font-semibold">
            Gruta da Onça
          </Text>
        </View>

        <View className="bg-[#85808028] p-6">
          <Text className="text-forestGreen-500 font-semibold m-1">
            Descrição
          </Text>
          <Text className="text-black font-semibold m-1 text-justify text-xs">
            Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa
            et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras
            maecenas enim tristique egestas morbi. Scelerisque ac et consectetur
            amet at molestie tortor at.
          </Text>
        </View>
        <View className="bg-[#FFE489] pl-6 py-6 ">
          <Text className="text-forestGreen-500 font-semibold m-1 mb-4">
            Imagens
          </Text>
          <FlatList
            data={images}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>

        <TouchableOpacity
          className="bg-forestGreen-500 p-6 flex-row items-center justify-between"
          onPress={() => router.push("/(tabs)/(home)/interestPoints")}
        ></TouchableOpacity>
      </ScrollView>
      <StartButton />
    </SafeAreaView>
  );
}

export default detailPoint;
