import { CameraView, CameraViewProps } from "expo-camera";
import { Dimensions, Linking, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type QRScannerProps = CameraViewProps & {
  onScan?: (data: string) => void;
};

export default function QRScanner({ onScan, ...rest }: QRScannerProps) {
  const { width, height } = Dimensions.get("window");
  const insets = useSafeAreaInsets();

  // Layout constants
  const CUTOUT_SIZE = Math.min(width, height) * 0.6;
  const SAFE_BOTTOM = Math.max(insets.bottom, 8);

  // Padding da área inferior onde ficam botões / textos
  const BOTTOM_UI_HEIGHT = SAFE_BOTTOM + 40 + 14 + 10;

  const verticalPadding = (height - CUTOUT_SIZE) / 2;
  const horizontalPadding = (width - CUTOUT_SIZE) / 2;

  const raise = height * 0.08; // Elevação opcional do recorte
  const cutoutTop = Math.max(0, verticalPadding - raise);

  const bottomOverlayHeight = Math.max(
    0,
    height - cutoutTop - CUTOUT_SIZE - BOTTOM_UI_HEIGHT
  );

  const handleScan = ({ data }: { data: string }) => {
    if (!data) return;

    if (onScan) {
      onScan(data);
      return;
    }

    // Comportamento padrão: tenta abrir o link SE for URL
    if (data.startsWith("http")) {
      Linking.openURL(data).catch(() => {});
    }
  };

  return (
    <View className="flex-1">
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={handleScan}
        {...rest}
      />

      {/* Overlays */}
      <View pointerEvents="none" className="absolute inset-0">

        {/* Superior */}
        <View
          className="absolute top-0 left-0 right-0 bg-black/60"
          style={{height: cutoutTop }}
        />

        {/* Inferior */}
        <View
          className="absolute left-0 right-0 bottom-0 bg-black/60"
          style={{ height: bottomOverlayHeight }}
        />

        {/* Laterais */}
        <View
          className="absolute left-0 bg-black/60"
          style={{
            top: cutoutTop,
            width: horizontalPadding,
            height: CUTOUT_SIZE,
          }}
        />

        <View
          className="absolute right-0 bg-black/60"
          style={{
            top: cutoutTop,
            width: horizontalPadding,
            height: CUTOUT_SIZE,
          }}
        />

        {/* Área do recorte */}
        <View
          className="absolute rounded-lg"
          style={{
            top: cutoutTop,
            left: horizontalPadding,
            width: CUTOUT_SIZE,
            height: CUTOUT_SIZE,
          }}
        />
      </View>
    </View>
  );
}
