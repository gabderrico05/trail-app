import React, { useState } from "react";
import { Image, View } from "react-native";
import ReturnButton from "./ReturnButton";
import TextFont from "./TextFont";

export default function EntityBanner(parkData: any) {

  const [imageLoaded, setImageLoaded] = useState(!!parkData.image);
  
  return(
    <View className="w-full bg-lightGray-200 h-min-60 pb-10 px-7">
            
            <View className="w-full">
              <ReturnButton buttonType="secondary"/>
            </View>

            <View className="w-full items-center justify-center pt-2 ">
              
              { parkData.image && imageLoaded ? 
              
                  <View className="bg-white w-40 h-40 rounded-2xl items-center justify-center overflow-hidden">
                    <Image
                      source={{ uri: parkData.image }}
                      className="w-32 h-32"
                      resizeMode="contain"
                      onError={() => setImageLoaded(false)}
                      onLoad={() => setImageLoaded(true) }
                    />
                  </View>

                    :

                  <View className="bg-forestGreen-600 w-40 h-40 rounded-2xl items-center justify-center">
                    <TextFont className="text-5xl text-white">
                      { (parkData?.name?.charAt(0)?.toUpperCase() ?? '') + (parkData?.name?.split(/\s+/)[1]?.charAt(0)?.toUpperCase() ?? parkData?.name?.charAt(0)?.toUpperCase()) }
                    </TextFont>
                  </View>
          
              } 
                 <TextFont
                  className="text-xl font-bold mt-5"
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                  minimumFontScale={0.8}
                  >
                    {parkData && parkData.name}
                 </TextFont>
            </View>
            

          </View> 
    

  );
}