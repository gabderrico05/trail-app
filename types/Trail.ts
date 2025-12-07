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
}