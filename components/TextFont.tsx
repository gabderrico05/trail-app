import React from "react";
import { Text } from "react-native";

interface TextFontProps {
  className?: string;
  children?: string | React.ReactNode;
}

const TextFont = ({className, children}: TextFontProps) => {
  const hasCustomFont = className?.includes('font-');
  const hasCustomTextSize = className?.includes('text-');
  
  const defaultFont = hasCustomFont ? '' : 'font-normal';
  const defaultTextSize = hasCustomTextSize ? '' : 'text-base';
  
  return (
    <Text className={`${defaultFont} ${defaultTextSize} ${className || ''}`}>
      {children}
    </Text>
  );
};


export default TextFont;