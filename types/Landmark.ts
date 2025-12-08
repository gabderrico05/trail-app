export interface LandMarkProps {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  coverUrl: string | null;
  gallery: { id: number; url: string; uuid: string }[];
  trailId: number;
}