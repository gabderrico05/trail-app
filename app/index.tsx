import Button from "@/components/Button";
import LogoApp from "@/components/LogoApp";
import QRCodeButton from "@/components/QRCodeButton";
import ReturnButton from "@/components/ReturnButton";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { View } from "react-native";
import './global.css';
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-2">
      
      <LogoApp />

      <SearchBar/>

      <Button buttonType="primary" onPress={() => {}}>
        Começar
      </Button>
      <Button  buttonType="secondary" onPress={() => {}}>
        Começar
      </Button>
      <View className="w-full bg-gray-200 p-3 gap-3">
        <ReturnButton/>
        <ReturnButton buttonType="secondary"/>
        <QRCodeButton/>
      </View>
      
    </View>
  );
}