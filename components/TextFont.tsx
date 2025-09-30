import { cn } from "@/lib/utils";
import React from "react";
import { Text } from "react-native";

interface TextFontProps {
  className?: string;
  children?: string | React.ReactNode;
}

const TextFont = ({className, children}: TextFontProps) => {
  
  
  return (
    <Text className={cn("font-normal text-base", className)}>
      {children}
    </Text>
  );
};


export default TextFont;