import CheckCircle from '@/assets/check-circle.svg';
import LeftArrowCircle from '@/assets/left-arrow-circle.svg';
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

interface LandmarkTopic {
  title: string
  id: number;
  onPress?: () => void;
  registered?: boolean;
  disable?: boolean;
  animated?: boolean;
  size?: number;
}


const LandmarkTopic = ({title, id, onPress, registered, disable = false, animated = true, size = 50}: LandmarkTopic) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (registered && animated) {
      scale.value = withTiming(1.1, { duration: 250, easing: Easing.bounce }, () => {
        scale.value = withSpring(1, { damping: 8, stiffness: 150 });
      });
      
    }
  }, [registered]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return(

    <Pressable onPress={disable? undefined : onPress}>
    <View className="flex-row items-center">
            <Animated.View style={animatedStyle}>
              {registered ? 
                <CheckCircle width={size} height={size} />
                :
                <LeftArrowCircle width={size} height={size} />
              }
            </Animated.View>
            <Text className="text-forestGreen-500 text-xl font-medium ml-3">{title}</Text>
    </View>
    </Pressable>

  );
}
export default LandmarkTopic;

