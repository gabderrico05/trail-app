import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ReturnButtonProps {
  buttonClassName?: string;
  children?: string | React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  onPress?: () => void;
}

const ReturnButton = ({ buttonClassName, children, buttonType = "primary", onPress}: ReturnButtonProps ) => {

    const handlePress = () => {
        if (onPress) {
          onPress();
        } else {
          router.back();
        }
      };

  return (
  
<TouchableOpacity onPress={handlePress} className="h-11 w-11 items-center justify-center rounded-lg bg-white">

    <View className='h-full w-full items-center justify-center'>
        <MaterialIcons  className="-mr-3" name="arrow-back-ios" size={24} color={buttonType === 'primary'? "black" : "#BF360C"} />
    </View>
        
</TouchableOpacity >

  );
};


export default ReturnButton;