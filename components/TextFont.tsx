import { cn } from "@/lib/utils";
import React from "react";
import { Text, TextProps } from "react-native";

interface TextFontProps extends TextProps {
  className?: string;
  children?: string | React.ReactNode;
}

const TextFont = ({className, children, ...props}: TextFontProps) => {
  
  
  return (
    <Text className={cn("font-normal text-base", className)} {...props}>
      {children}
    </Text>
  );
};


export default TextFont;