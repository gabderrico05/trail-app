import ReturnButton from "@/components/ReturnButton";
import StartButton from "@/components/StartButton";
import { useRegisterLandmark } from "@/hooks/useRegisterLandmark";
import { getImageUrl } from "@/lib/api";
import { useTrailSession } from "@/store/useTrailSession";
import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";
import { Foundation } from "@expo/vector-icons";
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
import { WebView } from "react-native-webview";

function detailPoint() {
  const { landmark, parkImage, trail } = useLocalSearchParams<{
    landmark: string;
    trail: string;
    parkImage: string;
  }>();
  const parkImg = parkImage;
  const landmarkData: LandMarkProps = JSON.parse(landmark);
  const trailData: TrailProps = JSON.parse(trail);

  const currentTrail = useTrailSession((s) => s.currentTrail);
  const { register } = useRegisterLandmark();

  const renderItem = ({
    item,
  }: {
    item: { id: number; url: string; uuid: string };
  }) => {
    return (
      <Image
        className="rounded-2xl mr-2"
        source={{ uri: getImageUrl(item.url) || undefined }}
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
          style={{ height: "auto", width: "auto" }}
          source={{ uri: getImageUrl(landmarkData.coverUrl) || "" }}
          resizeMode="cover"
        >
          <View className="px-6 py-6 pb-72">
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
            {landmarkData.shortDescription || "Descrição não disponível."}
          </Text>
        </View>
        <View className="bg-[#FFE489] pl-6 pt-6 pb-12">
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
        <View className="bg-white flex-row p-6 items-center gap-4">
          <Foundation name="info" size={24} color="#113D31" />
          <Text className="font-bold text-forestGreen-500">Sobre a Trilha</Text>
        </View>
        <View className="bg-white h-96 w-full">
          <WebView
            originWhitelist={["*"]}
            style={{ background: "white" }}
            source={{
              html: `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap" rel="stylesheet">
            <div style='padding: 24px; font-family: Gabarito, Roboto, sans-serif; font-size: 30px; width: calc(100% - 48px); word-wrap: break-word;'>
              ${landmarkData.description || "Sem descrição disponível."}
            </div>
            `,
            }}
          />
        </View>
      </ScrollView>
      <StartButton text="Registrar" onPress={handlePress} />
    </SafeAreaView>
  );
}

export default detailPoint;
