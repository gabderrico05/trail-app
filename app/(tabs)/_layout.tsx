import HistoryIcon from "@/assets/icons/history.svg";
import HomeIcon from "@/assets/icons/home.svg";
import QrIcon from "@/assets/icons/qrCode.svg";
import { cn } from "@/lib/utils";
import { Tabs, useSegments } from "expo-router";
import { Platform, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function TabIcon({classname, Icon, focused, title }: { classname?: string, Icon: any; focused: boolean; title: string }) {

  return (
    <View className="pl-0.5 items-center justify-center">
      <Icon
        width={35}
        height={35}
        color={focused ? "#BF360C" : "#113D31"}
        fill={focused ? "#BF360C" : "#113D31"}
      />
      <Text className={cn(`w-full text-center text-sm font-bold ${focused ? 'text-burntOrange' : 'text-forestGreen-500'}`,classname)} numberOfLines={1} ellipsizeMode="clip">
        {title}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  const segments = useSegments();
  const insets = useSafeAreaInsets();

  // Telas onde você quer esconder a TabBar (adicione/remova nomes aqui)
  const HIDE_TABS_ON = new Set<string>(['detailTrail', 'aboutTrail', 'startTrail']);
  const hideTabBar = segments[0] === '(tabs)' && segments.some(s => HIDE_TABS_ON.has(String(s)));

  return (
   
      <SafeAreaView
        className="flex-1 bg-white"
        edges={Platform.OS === 'android' ? ['bottom'] : []}
      >
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            flexDirection: 'row',
            backgroundColor: 'white',
            borderTopWidth: 2,
            alignItems: 'center',
            paddingTop: 12,
            height: 30,
            elevation: 0,
          },
          hideTabBar && { display: 'none' },
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
          const title = "QR Code";
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
              <TabIcon Icon={HistoryIcon} classname="pl-1.5" focused={focused} title={title} />
            ),
          };
        }}
      />
    </Tabs>
    </SafeAreaView>
   
  );
}
