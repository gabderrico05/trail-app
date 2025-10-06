import React from "react";
import { View } from "react-native";
import ReturnButton from "./ReturnButton";
import TextFont from "./TextFont";

export default function EntityBanner(parkData: any) {
  return(
    <View className="w-full bg-lightGray-200 h-min-60 pb-10 px-7">
            
            <View className="w-full">
              <ReturnButton buttonType="secondary"/>
            </View>

            <View className="w-full items-center justify-center pt-2 ">
              
              <View className="bg-forestGreen-600 w-40 h-40 rounded-2xl items-center justify-center">
                 <TextFont className="text-5xl text-white">
                      PE
                 </TextFont>
              </View>
                 <TextFont className="text-xl font-bold mt-5">
                    {parkData && parkData.name}
                 </TextFont>
            </View>
            

          </View> 
    

  );
}