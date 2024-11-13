import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "PTSansBold" },
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
        name="vote-events/[eventId]"
        // Options is set dynamically by the route file
      />
      <Stack.Screen
        name="vote-events/candidates/[candidateId]"
        options={{
          title: "Candidate",
          contentStyle: { backgroundColor: Colors.background },
        }}
      />
      <Stack.Screen name="vote-events/VerifyVoterID" />
      <Stack.Screen name="vote-events/VerifyFingerprint" />
    </Stack>
  );
}
