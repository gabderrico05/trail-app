import { useTrailSession } from "@/store/useTrailSession";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";


export default function History() {
  const { currentTrail } = useTrailSession();
  
  useFocusEffect(
    useCallback(() => {
      if (currentTrail) {
        router.push('/(tabs)/(home)/startTrail');
      }
      else{

      }
    }, [currentTrail])
  );
  
}