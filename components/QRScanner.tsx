import { useRegisterLandmark } from '@/hooks/useRegisterLandmark';
import { entitiesService, getImageUrl, landmarksService, trailsService } from '@/lib/api';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { CameraView, CameraViewProps } from "expo-camera";
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import QRCodeType from '../types/QRCode';
import ReturnButton from './ReturnButton';

type QRScannerProps = CameraViewProps & {
};

export default function QRScanner({ ...rest }: QRScannerProps) {
  const [torchOn, setTorchOn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { register } = useRegisterLandmark();


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

        router.replace({
          pathname: "/detailTrail",
          params: {
            trailId: String(qrData.id),
            entityId: String(qrData.entityId),
          },
       });
       
        
      } else if (qrData.type === 'poi') {

        const poi = await landmarksService.getById(qrData.id);
        
        const trail = await trailsService.getById(poi.trailId);

        const entity = await entitiesService.getById(qrData.entityId);
        const parkImage = getImageUrl(entity.coverUrl) || "";

        
        register(trail, poi.id, parkImage);
        
      }

    } catch (error) {
      console.error('Erro ao fazer parse do QR Code:', error);
      setError('QR Code inválido');
      setIsProcessing(false); 
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
