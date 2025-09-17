import React from "react";
import { Image, View } from "react-native";

interface LogoAppProps {
  className?: string;
}

const LogoApp = ({className}: LogoAppProps) => {
  return (
    <View className={`${className}`}>
      <Image source={require('../assets/logo-app.png')} />
    </View>
  );
};


export default LogoApp;