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
  
  const hasCustomTextSize = textClassName && /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/.test(textClassName);
  const defaultTextSize = hasCustomTextSize ? '' : 'text-xl';
  
 
  const hasCustomWidth = buttonClassName && buttonClassName.includes('w-');
  const defaultWidth = hasCustomWidth ? '' : 'w-full';
  

  const hasCustomPaddingY = buttonClassName && (buttonClassName.includes('py-') || buttonClassName.includes('p-'));
  const defaultPaddingY = hasCustomPaddingY ? '' : 'py-4';


  const hasCustomPaddingX = buttonClassName && (buttonClassName.includes('px-') || buttonClassName.includes('p-'));
  const defaultPaddingX = hasCustomPaddingX ? '' : 'px-1.5';

  return (
    <View className={`w-full items-center px-20 ${viewClassName}`}>
      <TouchableOpacity 
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        activeOpacity={(buttonType === 'ghost' && 1) || 0.7} 
        className={`${defaultWidth} ${defaultPaddingY} ${defaultPaddingX} items-center justify-center rounded-3xl ${buttonType === 'primary' ? "bg-forestGreen-500" : buttonType === 'secondary' ? "bg-butterYellow" : `border border-forestGreen-400 ${isPressed ? "bg-forestGreen-400" : ""}`} ${buttonClassName}`}
      >
        <TextFont className={`font-bold ${defaultTextSize} ${buttonType === 'primary' ? "text-white" : buttonType === 'secondary' ? "text-forestGreen-600" : `text-forestGreen-400 ${isPressed&&"text-white"}`} ${textClassName}`}>
          {children}
        </TextFont>
      </TouchableOpacity>
    </View>
  );
};


export default Button;