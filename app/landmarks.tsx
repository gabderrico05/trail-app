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
                <Ionicons name="analytics-outline" size={40} color="white"/>
                <Text className="ml-2 text-white font-semibold">Pontos de interesse</Text>
                </View>
            </View>
            <FlatList
                data={[{ id: "1", imgSrc: "", title: "aaaaa", time: "22", distance: "22", level: "2", detailLink: "" }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LandmarkCard
                    />
                )}
            />

        </SafeAreaView>
    );
}

export default detailTrail;
