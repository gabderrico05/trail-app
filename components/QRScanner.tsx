import { landmarksService, trailsService } from '@/lib/api';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { CameraView, CameraViewProps } from "expo-camera";
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import QRCodeType from '../types/QRCode';
import ReturnButton from './ReturnButton';

type QRScannerProps = CameraViewProps & {
};

export default function QRScanner({ ...rest }: QRScannerProps) {
  const { width, height } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const [torchOn, setTorchOn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);


  useFocusEffect(
    useCallback(() => {
      // Reset states quando a tela ganhar foco
      setIsProcessing(false);
      setError(null);
      setTorchOn(false);

      // Cleanup: desliga a lanterna quando sair da tela
      return () => {
        setTorchOn(false);
      };
    }, [])
  );


  async function handleScan (scanningResult: { data: string }) {
    if (!scanningResult?.data) return;

    setIsProcessing(true);

    try {
      const qrData: QRCodeType = JSON.parse(scanningResult.data);
      if (qrData.type === 'trail') {

        const trail = await trailsService.getById(qrData.id);
        console.log(trail)

        router.replace({
          pathname: "/detailTrail",
          params: {
            rawTrailData: JSON.stringify(trail),
          },
       });
       
        
      } else if (qrData.type === 'poi') {
        
        const poi = await landmarksService.getById(qrData.id);

        router.replace({
          pathname: "/startTrail",
          params: {
            rawLandmarkData: JSON.stringify(poi),
          },
       });
        
      }

    } catch (error) {
      console.error('Erro ao fazer parse do QR Code:', error);
      setError('QR Code inválido');
      setIsProcessing(false); // Libera para tentar novamente em caso de erro
    }
  };

  return (
    <View className="flex-1">
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={isProcessing ? undefined : handleScan}
        enableTorch={torchOn}
        {...rest}
      />

      <View className='z-20 absolute top-14 right-6 pt-1 pr-0.5'>

      <TouchableOpacity className="h-12 w-12 bg-white rounded-full " onPress={() => setTorchOn(!torchOn)}>
        <View className='flex-1 items-center justify-center pt-0.5 pl-0.5'>
          <FontAwesome5  name="bolt" size={24} color={torchOn? "#BF360C" : "black"} />
        </View>
      </TouchableOpacity>

       </View>

      <View className='absolute top-14 left-6 z-20 '>
         <ReturnButton />
      </View>
      
    </View>
  );
}
