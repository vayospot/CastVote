import { View } from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageBackground } from "@/components/Image";
import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";

export default function RoutesLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
        headerLeft: () => <BackButton />,
        contentStyle: {
          backgroundColor: Colors.background,
          paddingHorizontal: 24,
        },
      }}
    >
      <Stack.Screen
        name="vote-events/[id]"
        // Options is set dynamically by the route file
      />
    </Stack>
  );
}
