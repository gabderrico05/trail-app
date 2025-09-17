import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  viewClassName?: string;
  buttonClassName?: string;
  children?: string | React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  onPress?: () => void;
}

const Button = ({ buttonClassName, viewClassName, children, buttonType = "primary", onPress}: ButtonProps ) => {
  return (
  <View className={`w-full items-center px-20 ${viewClassName}`}>
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} className={`w-full h-fit px-2 py-4 items-center justify-center rounded-3xl ${buttonType === 'primary'? "bg-forestGreen-500": "bg-butterYellow"} ${buttonClassName}`}>
        <Text className={`font-bold text-xl ${buttonType === 'primary' ? "text-white" : "text-forestGreen-600"}`}>{children}</Text>
  </TouchableOpacity>
  </View>
  );
};


export default Button;