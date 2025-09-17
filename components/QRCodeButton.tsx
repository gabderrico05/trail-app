import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

interface QRCodeButtonProps {
  buttonClassName?: string;
  children?: string | React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  onPress?: () => void;
}

const QRCodeButton = ({ buttonClassName, children, buttonType = "primary", onPress}: QRCodeButtonProps ) => {

    const handlePress = () => {
        
       
          
        
      };

  return (
  
<TouchableOpacity onPress={handlePress} className="h-11 w-11 items-center justify-center rounded-lg bg-white">

    <View className='h-full w-full items-center justify-center'>
        <Image source={require('../assets/QRcode.svg')} />
    </View>
        
</TouchableOpacity >

  );
};


export default QRCodeButton;