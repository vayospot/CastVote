import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";
import toastConfig from "@/constants/toastConfig";
import { Ionicons } from "@expo/vector-icons";

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
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} />
    </>
  );
}
