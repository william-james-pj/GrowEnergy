import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import { ColorModeContext } from "./src/contexts/ColorModeContext";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Routes } from "./src/routes";

import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [loadedFont] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if (!loadedFont) return null;

  return (
    <ColorModeContext>
      <AuthContextProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </AuthContextProvider>
    </ColorModeContext>
  );
}
