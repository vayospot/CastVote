import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import toastConfig from "@/constants/toastConfig";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    PTSansBold: require("../assets/fonts/PTSans-Bold.ttf"),
    PTSansRegular: require("../assets/fonts/PTSans-Regular.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(screens)" />
      </Stack>
      <Toast config={toastConfig} />
    </>
  );
}
