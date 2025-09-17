import React from "react";
import { TouchableOpacity, View } from "react-native";
import QRCode from "../assets/QRCode.svg";

interface QRCodeButtonProps {
  buttonClassName?: string;
  onPress?: () => void;
}

const QRCodeButton = ({ buttonClassName,  onPress}: QRCodeButtonProps ) => {

    const handlePress = () => {
        
       
          
        
      };

  return (
  
<TouchableOpacity onPress={handlePress} className={`h-11 w-11 items-center justify-center rounded-lg bg-forestGreen-600 ${buttonClassName}`} activeOpacity={0.7}>

    <View className='h-full w-full items-center justify-center'>
        <QRCode width={32} height={32} />
    </View>
        
</TouchableOpacity >

  );
};


export default QRCodeButton;