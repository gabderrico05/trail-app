import { useTrailSession } from "@/store/useTrailSession"; // ajuste o path conforme seu projeto
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

export function useStartTrail() {
  const router = useRouter();

  const { currentTrail, startTrail, resetTrail } = useTrailSession();

  const [buttonText, setButtonText] = useState("Começar");

  const start = useCallback(
    (trail: any) => {
      if (!trail) return;

      const navigateToSession = () => {
        router.push("/(tabs)/(home)/startTrail");
      };

      const startNewTrail = () => {
        resetTrail();
        startTrail(trail);
        navigateToSession();
      };

      // Já existe uma trilha ativa
      if (currentTrail) {
        const sameTrail = currentTrail.id === trail.id;

        if (sameTrail) {
          setButtonText("Continuar");
          return navigateToSession();
        }

        return Alert.alert(
          "Iniciar nova trilha",
          "Você já está em uma trilha diferente. Iniciar uma nova trilha irá reiniciar seu progresso atual. Deseja continuar?",
          [
            { text: "Não", style: "cancel" },
            { text: "Sim", style: "destructive", onPress: startNewTrail },
          ]
        );
      }

      // Nenhuma trilha ativa → inicia normal
      startTrail(trail);
      navigateToSession();
    },
    [currentTrail, router, startTrail, resetTrail]
  );

  return { start, buttonText, setButtonText };
}
