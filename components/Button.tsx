import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TextFont from "./TextFont";

interface ButtonProps {
  viewClassName?: string;
  buttonClassName?: string;
  textClassName?: string;
  children?: string | React.ReactNode;
  buttonType?: 'primary' | 'secondary' | 'ghost';
  onPress?: () => void;
}

const Button = ({ buttonClassName, viewClassName, textClassName, children, buttonType = "primary", onPress}: ButtonProps ) => {

  const [isPressed, setIsPressed] = useState(false);
  

  return (
    <View className={cn(`w-full items-center px-20`, viewClassName)}>
      <TouchableOpacity 
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        activeOpacity={(buttonType === 'ghost' && 1) || 0.7} 
        className={cn(`w-full py-4 px-1.5 items-center justify-center rounded-3xl ${buttonType === 'primary' ? "bg-forestGreen-500" : buttonType === 'secondary' ? "bg-butterYellow" : `border border-forestGreen-400 ${isPressed ? "bg-forestGreen-400" : ""}`}`, buttonClassName)}
      >
        <TextFont className={cn(`font-bold text-xl ${buttonType === 'primary' ? "text-white" : buttonType === 'secondary' ? "text-forestGreen-600" : `text-forestGreen-400 ${isPressed&&"text-white"}`}`, textClassName)}>
          {children}
        </TextFont>
      </TouchableOpacity>
    </View>
  );
};


export default Button;