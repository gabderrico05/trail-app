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
      <View className="flex-1 p-6 bg-white">
        <WebView
          originWhitelist={["*"]}
          style={{ background: "black" }}
          source={{ html: `
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>
            <h1 style='color: #113D31; font-size: 4rem'>Lorem ipsum</h1>
            <p style='font-size: 3rem'>Lorem ipsum dolor sit amet consectetur. Sed aliquet enim elit massa et morbi massa lorem. Sed arcu egestas non condimentum. Mattis cras maecenas enim tristique egestas morbi. Scelerisque ac et consectetur amet at molestie tortor at.</p>s
            ` }}
        />
      </View>

      <StartButton />
    </View>
  );
}

export default aboutTrail;
