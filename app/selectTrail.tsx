import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";



export const parksData = [
  {
    id: '1',
    image: require("../assets/park_icon.png"),
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "Rua Horto Florestal, 1200.",
  },
  {
    id: '2',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '3',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '4',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '5',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '6',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
  {
    id: '7',
    title: "Parque Estadual da Serra do Mar - Núcleo Caraguatatuba",
    subtitle: "",
  },
];



export default function App() {
  
  const [filteredParks, setFilteredParks] = useState(parksData);

  return(
    <SafeAreaView className="flex-1 bg-white">

    </SafeAreaView>
  );
  
}




