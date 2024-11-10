import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";

export default function RoutesLayout() {
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
      <Stack.Screen name="vote-events/[id]" />
    </Stack>
  );
}
