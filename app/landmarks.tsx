import LandmarkCard from "@/components/LandmarkCard";
import ReturnButton from "@/components/ReturnButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function detailTrail() {
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                className="p-6"
                style={{ height: "auto", width: "100%" }}
                source={require("../assets/imageTrilha.jpg")}
                resizeMode="cover"
            >
                <View className="w-full ">
                    <ReturnButton buttonType="secondary" />
                </View>
                <View className="bg-white items-center p-2 px-4 mt-4 rounded-2xl flex-row">
                    <Text className="text-forestGreen-500 font-bold mr-auto">
                        Trilha da Pedra Branca
                    </Text>
                    <Image
                        source={require("../assets/parqueEstadual.png")}
                        style={{ width: 50, height: 50 }}
                        resizeMode="contain"
                    />
                </View>
            </ImageBackground>



            <View className="bg-forestGreen-500 justtfy-center">
                <View className="flex-row items-center mb-4 pt-3 pl-3">
                    <Ionicons name="analytics-outline" size={40} color="white" />
                    <Text className="ml-2 text-white font-semibold">Pontos de interesse</Text>
                </View>
            </View>
            <FlatList
                data={[
                    { id: "1", title: "Lugar A", time: "22", distance: "22", level: "2", detailLink: "", imgSrc: "" },
                    { id: "2", title: "Lugar B", time: "30", distance: "15", level: "1", detailLink: "", imgSrc: "" }, 
                    { id: "3", title: "Lugar C", time: "45", distance: "10", level: "3", detailLink: "", imgSrc: "" },
                    { id: "4", title: "Lugar D", time: "60", distance: "5", level: "2", detailLink: "", imgSrc: "" },
                    { id: "5", title: "Lugar E", time: "15", distance: "25", level: "1", detailLink: "", imgSrc: "" },
                    { id: "6", title: "Lugar F", time: "35", distance: "18", level: "2", detailLink: "", imgSrc: "" },
                    { id: "7", title: "Lugar G", time: "50", distance: "12", level: "3", detailLink: "", imgSrc: "" },
                    { id: "8", title: "Lugar H", time: "70", distance: "8", level: "2", detailLink: "", imgSrc: "" },
                    { id: "9", title: "Lugar I", time: "20", distance: "30", level: "1", detailLink: "", imgSrc: "" },
                    { id: "10", title: "Lugar J", time: "40", distance: "20", level: "2", detailLink: "", imgSrc: "" },
                    { id: "11", title: "Lugar K", time: "55", distance: "14", level: "3", detailLink: "", imgSrc: "" },
                    { id: "12", title: "Lugar L", time: "75", distance: "7", level: "2", detailLink: "", imgSrc: "" },
                    
                ]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LandmarkCard
                    // Dica: Você provavelmente vai querer passar os dados para o card aqui:
                    // title={item.title}
                    // distance={item.distance}
                    />
                )}
            />

        </SafeAreaView>
    );
}

export default detailTrail;
