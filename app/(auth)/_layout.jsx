import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => <BackButton />,
        headerStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" options={{ title: "" }} />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
}
