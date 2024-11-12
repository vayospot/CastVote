import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";

export default function SignUpLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => <BackButton />,
        headerStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="VoterIDSetup" />
      <Stack.Screen name="AccountSetup" />
      <Stack.Screen name="FingerprintSetup" />
    </Stack>
  );
}
