import PointCard from "@/components/PointCard";
import React from "react";
import { View } from "react-native";
import "./global.css";

export default function App() {
  return (<View>
    <PointCard name={"Gruta que Chora"}/>
    <PointCard name={"Cachoeira do arco da paz celestial"}/>
    <PointCard name={"Praça da Paz Celestial"}/>
    <PointCard name={"Ohio"}/>
  </View>);
}
