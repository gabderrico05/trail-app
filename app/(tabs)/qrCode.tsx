import Button from "@/components/Button";
import QRScanner from "@/components/QRScanner";
import { useCameraPermissions } from "expo-camera";
import { Text, View } from "react-native";


export default function QrCode() {

  const [permissions, requestPermissions] = useCameraPermissions();

  async function handleAllow(){
    await requestPermissions();
  }

  if (permissions?.granted){
    return(
      <QRScanner/>
    );
  }

  return(
  
        <View className="flex-1 justify-center items-center bg-white">
                <Text className="text-xl font-semibold px-2">Precisamos da sua permissão!</Text>
                <Text className="text-lg pt-2 pb-4 text-center px-2">Permita o acesso a camera do celular para habilitar o scanner de QrCode</Text>

                <Button buttonType='primary' onPress={handleAllow}>Permitir o acesso</Button>
                
        </View>
  );
}