import { Stack } from "expo-router";

export default function StackLayout() {
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
      <Stack.Screen
        name="detailTrail"
        options={{
          headerShown: false
        }}
      />

    </Stack>
  );
}
