import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen 
      name="detailTrail" 
      options={{ title: "Detalhes" }} 
      />
      <Stack.Screen name="selectTrail" options={{ title: "Perfil" }} />
    </Stack>
  );
}
