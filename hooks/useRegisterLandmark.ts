import { useTrailSession } from "@/store/useTrailSession";
import { TrailProps } from "@/types/Trail";
import { router } from "expo-router";
import { useCallback } from "react";
import { Alert } from "react-native";

export function useRegisterLandmark() {
  const { currentTrail, registerPoint, startTrail, resetTrail } = useTrailSession();

  const navigateToSession = () => {
        router.push("/(tabs)/(home)/startTrail");
      };

  const register = useCallback(
    (trail: TrailProps, landmarkId: number, parkImage: string) => {
      // Verifica se há uma trilha ativa
      if (!currentTrail) {
        Alert.alert(
          "Nenhuma trilha ativa",
          "Você precisa iniciar uma trilha antes de registrar pontos."
        );
        return false;
      }

      const startNewTrailAndRegister = () => {
        resetTrail();
        startTrail(trail, parkImage);
        registerPoint(landmarkId);
        navigateToSession();
      };

      // Verifica se a trilha passada é a mesma que a trilha ativa
      if (currentTrail.id !== trail.id) {
        return Alert.alert(
          "Iniciar nova trilha",
          "Você já está em uma trilha diferente. Iniciar uma nova trilha irá reiniciar seu progresso atual. Deseja continuar?",
          [
            { text: "Não", style: "cancel" },
            { text: "Sim", style: "destructive", onPress: startNewTrailAndRegister },
          ]
        );
      }

      // Verifica se o ponto existe na trilha
      const landmarkExists = currentTrail.landmarks.some(
        (lm) => lm.id === landmarkId
      );

      if (!landmarkExists) {
        Alert.alert(
          "Ponto não encontrado",
          "Este ponto de interesse não pertence a esta trilha."
        );
        return false;
      }


      // Registra o ponto
      registerPoint(landmarkId);
      navigateToSession();
      return true;
    },
    [currentTrail, registerPoint, startTrail, resetTrail]
  );

  return { register };
}
