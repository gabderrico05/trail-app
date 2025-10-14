import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function StackLayout() {

const [fontsLoaded] = useFonts({
    "Gabarito-Regular": require("../assets/fonts/Gabarito-Regular.ttf"),
    "Gabarito-Bold": require("../assets/fonts/Gabarito-Bold.ttf"),
    "Gabarito-ExtraBold": require("../assets/fonts/Gabarito-ExtraBold.ttf"),
    "Gabarito-Medium": require("../assets/fonts/Gabarito-Medium.ttf"),
    "Gabarito-SemiBold": require("../assets/fonts/Gabarito-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="inicio"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="selectPark"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="selectTrail"
        options={{
          headerShown: false
        }}
      />

    </Stack>
  );
}
