import { cn } from '@/lib/utils';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ReturnButtonProps {
  className?: string;
  children?: string | React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  onPress?: () => void;
}

const ReturnButton = ({ className, children, buttonType = "primary", onPress}: ReturnButtonProps ) => {

    const handlePress = () => {
        if (onPress) {
          onPress();
        } else {
          router.back();
        }
      };

  return (

<TouchableOpacity onPress={handlePress} className={cn(`h-12 w-12 items-center justify-center rounded-lg bg-white`, className)} >

    <View className='h-full w-full items-center justify-center'>
        <MaterialIcons  className="-mr-3" name="arrow-back-ios" size={20} color={buttonType === 'primary'? "black" : "#BF360C"} />
    </View>
        
</TouchableOpacity >

  );
};


export default ReturnButton;