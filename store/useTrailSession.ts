import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export type LandmarkWithStatus = LandMarkProps & {
  registered: boolean;
  disable?: boolean;
}


export type TrailWithStatus = TrailProps & {
  landmarks : LandmarkWithStatus[],
  parkImage: string,
  finalized: boolean
}


type TrailSessionStore = {
  currentTrail: TrailWithStatus | null;

  startTrail: (trail: TrailProps, parkImage : string) => void;
  registerPoint: (pointId: number) => void;
  resetTrail: () => void;
};


export const useTrailSession = create(
  persist<TrailSessionStore>(
    (set, get) => ({
      currentTrail: null,
      
      startTrail: (trail, parkImage) =>
        set({
          currentTrail: {
            ...trail,
            parkImage : parkImage,
            landmarks: [
              
              {
                id: 0,
                name: "Início da trilha",
                description: "Ponto de partida da trilha",
                shortDescription: "Ponto de partida da trilha",
                coverUrl: null,
                gallery: [],
                trailId: trail.id,
                registered: true,
                disable: true,
              } as LandmarkWithStatus,
              // Demais landmarks da trilha
              ...(trail.pointsOfInterest || []).map((lm) => ({
                ...lm,
                registered: false,
              })),
            ],
            finalized: false, // No início, nunca está finalizada
          },
        }),

      // Registrar ponto de interesse
      registerPoint: (pointId) =>
        set((state) => {
          if (!state.currentTrail) return state;

          const updated = state.currentTrail.landmarks.map((lm) =>
            lm.id === pointId
              ? { ...lm, registered: true }
              : lm
          );

          // Verifica se todos os landmarks estão registrados
          const allRegistered = updated.every((lm) => lm.registered);

          return {
            currentTrail: {
              ...state.currentTrail,
              landmarks: updated,
              finalized: allRegistered,
            },
          };
        }),

      resetTrail: () => set({ currentTrail: null }),
    }),

    {
      name: "trail-session", // nome no AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);