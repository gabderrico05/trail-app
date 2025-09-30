import { cn } from "@/lib/utils";
import React from "react";
import { Image, View } from "react-native";

interface LogoAppProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoApp = ({className}: LogoAppProps) => {
  return (
    <View className={cn("w-[230px] h-56",className)}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  );
};


export default LogoApp;