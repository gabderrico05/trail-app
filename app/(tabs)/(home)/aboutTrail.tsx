import StartButton from "@/components/StartButton";
import TrailHeader from "@/components/TrailHeader";
import Foundation from "@expo/vector-icons/Foundation";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

function aboutTrail() {
  return (
    <View className="flex-1">
      <TrailHeader />
      <View className="bg-[#FFC500] flex-row p-6 items-center gap-4">
        <Foundation name="info" size={24} color="#113D31" />
        <Text className="font-bold text-forestGreen-500">Sobre a Trilha</Text>
      </View>
      <View className="flex-1 bg-white">
        <WebView
          originWhitelist={["*"]}
          style={{ background: "black" }}
          source={{ html: `
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap" rel="stylesheet">
            <div style='padding: 24px; font-family: Gabarito, Roboto, sans-serif'>
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>
            </div>
            ` }}
        />
      </View>

      <StartButton />
    </View>
  );
}

export default aboutTrail;
