import CheckCircle from '@/assets/check-circle.svg';
import LeftArrowCircle from '@/assets/left-arrow-circle.svg';
import { Pressable, Text, View } from "react-native";

interface LandmarkTopic {
  title: string
  id: number;
  onPress?: () => void;
  registered?: boolean;
  disable?: boolean;
}


const LandmarkTopic = ({title, id, onPress, registered, disable = false}: LandmarkTopic) => {

  return(

    <Pressable onPress={disable? undefined : onPress}>
    <View className="flex-row items-center">
            {registered ? 
              <CheckCircle width={50} height={50} />
              :
              <LeftArrowCircle width={50} height={50} />
            }
            <Text className="text-forestGreen-500 text-xl font-medium ml-3">{title}</Text>
    </View>
    </Pressable>

  );
}
export default LandmarkTopic;






// <View className="flex-row items-center ">
//             <MaterialCommunityIcons name="check-circle" size={50} color="forestGreen-500" />
//             <Text className="text-forestGreen-500 font-medium ml-2">
//               Inicio da Trilha
//             </Text>
//   </View>

//           <View className="flex-row items-center">
//             <MaterialCommunityIcons
//               name="arrow-right-circle-outline"
//               size={50}
//               color="forestGreen-500"
//             />
//             <Text className="text-forestGreen-500 font-medium ml-2">
//               Gruta da Pedra Furada (+1,2km)
//             </Text>
//           </View>