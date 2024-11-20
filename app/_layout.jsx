import { useEffect } from "react";
import { router, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import toastConfig from "@/constants/toastConfig";
import useGlobalStore from "@/contexts/useGlobalStore";
import Colors from "@/constants/Colors";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const getEvents = useGlobalStore((state) => state.getEvents);
  const [fontLoaded] = useFonts({
    PTSansBold: require("../assets/fonts/PTSans-Bold.ttf"),
    PTSansRegular: require("../assets/fonts/PTSans-Regular.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    const initializeApp = async () => {
      if (fontLoaded) {
        await getEvents.initialFetch();
        router.replace("/(tabs)/Home");
        SplashScreen.hideAsync();
      }
    };

    initializeApp();
  }, [fontLoaded, getEvents]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: Colors.background },
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(screens)" />
        </Stack>
        <Toast config={toastConfig} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
