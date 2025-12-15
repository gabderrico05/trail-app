import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface LandmarkTopic {
  title: string
  id: number;
  onPress?: () => void;
}


const LandmarkTopic = ({title, id, onPress}: LandmarkTopic) => {

  return(

    <Pressable onPress={onPress}>
    <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="arrow-right-circle-outline"
              size={50}
              color="forestGreen-500"
            />
            <Text className="text-forestGreen-500 font-medium ml-2">{title}</Text>
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