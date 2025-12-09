import { LandMarkProps } from "./Landmark";

export interface TrailProps {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  duration: number;
  distance: number;
  difficulty: "fácil" | "moderado" | "difícil";
  safetyTips: string;
  coverUrl: string | null;
  gallery: { id: number; url: string; uuid: string }[];
  // Em algumas respostas da API de lista, este campo pode vir ausente
  pointsOfInterest?: LandMarkProps[];
}