import React from 'react';
import { Image, Text, View } from 'react-native';

export default function App() {
    return (
        <View className="p-4">
            <LandmarkCard />
        </View>
    );
}

function LandmarkCard() {
    return (
        // O CARD PRINCIPAL
        <View className="bg-white rounded-xl drop-shadow-sm overflow-hidden h-40 p-4">

            {/* CONTÊINER DA IMAGEM*/}
            <View className="w-full h-20 rounded-lg overflow-hidden mb-2">
                <Image
                    source={{ uri: 'https://picsum.photos/seed/river/400/200' }} // Substitua pela sua imagem
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>

            {/* ÁREA DO TEXTO */}
            <View className="pt-2 justify-center items-center">
                <Text className="text-lg font-gabarito font-forestGreen-500">
                    Gruta da Onça
                </Text>
            </View>

        </View>
    );
}