import React from "react";
import { Image, View } from "react-native";

interface LogoAppProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoApp = ({className, width, height}: LogoAppProps) => {
  return (
    <View className={className}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: width || 230, height: height || 224 }}
        resizeMode="contain"
      />
    </View>
  );
};


export default LogoApp;