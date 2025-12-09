import { LandMarkProps } from "@/types/Landmark";
import { TrailProps } from "@/types/Trail";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export type LandmarkWithStatus = LandMarkProps & {
  registered: boolean;
}


export type TrailWithStatus = TrailProps & {
  landmarks : LandmarkWithStatus[]
}


type TrailSessionStore = {
  currentTrail: TrailWithStatus | null;

  startTrail: (trail: TrailProps) => void;
  registerPoint: (pointId: number) => void;
  resetTrail: () => void;
};


export const useTrailSession = create(
  persist<TrailSessionStore>(
    (set, get) => ({
      currentTrail: null,

      // Quando o usuário inicia uma trilha
      startTrail: (trail) =>
        set({
          currentTrail: {
            ...trail,
            // Garante que não quebre caso pointsOfInterest venha undefined
            landmarks: (trail.pointsOfInterest || []).map((lm) => ({
              ...lm,
              registered: false,
            })),
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

          return {
            currentTrail: {
              ...state.currentTrail,
              landmarks: updated,
            },
          };
        }),

      // Finalizar / limpar sessão
      resetTrail: () => set({ currentTrail: null }),
    }),

    {
      name: "trail-session", // nome no AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);