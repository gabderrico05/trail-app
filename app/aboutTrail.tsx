import Foundation from "@expo/vector-icons/Foundation";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

function aboutTrail() {
  return (
    <View>
      <View className="bg-[#FFC500] flex-row p-6 items-center gap-4">
        <Foundation name="info" size={24} color="#113D31" />
        <Text className="font-bold text-forestGreen-500">Sobre a Trilha</Text>
      </View>
      <WebView
        originWhitelist={["*"]}
        style={{ background: "black" }}
        source={{ html: "<h1>oi</h1>" }}
      />
    </View>
  );
}

export default aboutTrail;
