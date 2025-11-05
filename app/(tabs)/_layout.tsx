import HistoryIcon from "@/assets/icons/history.svg";
import HomeIcon from "@/assets/icons/home.svg";
import QrIcon from "@/assets/icons/qrCode.svg";
import { Tabs, useSegments } from "expo-router";
import { Text, View } from "react-native";

function TabIcon({ Icon, focused, title }: { Icon: any; focused: boolean; title: string }) {
  return (
    <View className="items-center justify-center">
      <Icon
        width={35}
        height={35}
        color={focused ? "#BF360C" : "#113D31"}
        fill={focused ? "#BF360C" : "#113D31"}
      />
      <Text className={`text-sm font-bold ${focused ? 'text-burntOrange' : 'text-forestGreen-500'}`}>
        {title}
      </Text>
    </View>
  );
}

export default function TabsLayout() {

  const segments = useSegments();

  // Telas onde você quer esconder a TabBar (adicione/remova nomes aqui)
  const HIDE_TABS_ON = new Set<string>(['detailTrail', 'aboutTrail',]);
  const hideTabBar = segments[0] === '(tabs)' && segments.some(s => HIDE_TABS_ON.has(String(s)));



  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [{
          flexDirection: 'row',
          backgroundColor: "white",
          borderTopWidth: 2,
          alignItems: 'center',
          height: 80,
        },
        hideTabBar && { display: "none" }
        ],
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={() => {
          const title = "Início";
          return {
            title,
            tabBarIcon: ({ focused }) => (
              <TabIcon Icon={HomeIcon} focused={focused} title={title} />
            ),
          };
        }}
      />
      <Tabs.Screen
        name="qrCode"
        options={() => {
          const title = "QRCode";
          return {
            title,
            tabBarIcon: ({ focused }) => (
              <TabIcon Icon={QrIcon} focused={focused} title={title} />
            ),
          };
        }}
      />
      <Tabs.Screen
        name="history"
        options={() => {
          const title = "Histórico";
          return {
            title,
            tabBarIcon: ({ focused }) => (
              <TabIcon Icon={HistoryIcon} focused={focused} title={title} />
            ),
          };
        }}
      />
    </Tabs>
  );
}
