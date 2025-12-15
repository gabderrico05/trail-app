import ReturnButton from "@/components/ReturnButton";
import StartButton from "@/components/StartButton";
import { useRegisterLandmark } from "@/hooks/useRegisterLandmark";
import { useTrailSession } from "@/store/useTrailSession";
import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
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

  const { landmark, parkImage, trail } = useLocalSearchParams<{ landmark: string, trail: string, parkImage: string,  }>();
  const parkImg = parkImage;
  const landmarkData: LandMarkProps = JSON.parse(landmark);
  const trailData: TrailProps = JSON.parse(trail);

  const currentTrail = useTrailSession((s) => s.currentTrail);
  const { register } = useRegisterLandmark();
  

  const renderItem = ({ item }: { item: {id: number, url: string, uuid: string}}) => {
    return (
      <Image
        className="rounded-2xl mr-2"
        source={item.url ? { uri: item.url } : undefined}
        style={{ width: 150, height: 190 }}
      />
    );
  };

  function handlePress() {
    register(trailData, landmarkData.id, parkImage);
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ImageBackground
          style={{ height: 230, width: "100%" }}
          source={landmarkData.coverUrl ? { uri: landmarkData.coverUrl } : require("@/assets/imageTrilha.jpg")}
          resizeMode="cover"
        >
          <View className="px-6 pb-6">
            <View className="flex-row gap-4 items-center justify-center mt-4">
              <ReturnButton buttonType="secondary" />

              <View className="bg-white items-center py-1 justify-between pl-6 gap-4 pr-2 rounded-3xl flex-row">
                <Text className="text-forestGreen-500 font-bold mr-auto">
                  {trailData.name}
                </Text>
                <Image
                  source={parkImg ? { uri: parkImg } : undefined}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View className="flex-row items-center p-6 gap-3">
          <FontAwesome name="arrow-circle-o-right" size={30} color="black" />
          <Text className="text-forestGreen-500 font-semibold">
            {landmarkData.name}
          </Text>
        </View>

        <View className="bg-[#85808028] p-6">
          <Text className="text-forestGreen-500 font-semibold m-1">
            Descrição
          </Text>
          <Text className="text-black font-semibold m-1 text-justify text-xs">
            {landmarkData.description || "Descrição não disponível."}
          </Text>
        </View>
        <View className="bg-[#FFE489] pl-6 py-6 ">
          <Text className="text-forestGreen-500 font-semibold m-1 mb-4">
            Imagens
          </Text>
          <FlatList
            data={landmarkData.gallery}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </ScrollView>
      <StartButton text="Registrar" onPress={handlePress}/>
    </SafeAreaView>
  );
}

export default detailPoint;
