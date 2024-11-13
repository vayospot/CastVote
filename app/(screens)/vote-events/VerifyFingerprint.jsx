import { View, Alert } from "react-native";
import { router } from "expo-router";
import Fingerprint from "@/components/Fingerprint";

export default function VerifyFingerprint() {
  const onSubmit = () => {
    Alert.alert(
      "Cast Vote",
      "Are you sure you want to vote for this candidate? This action cannot be undone.",
      [
        {
          text: "No",
          style: "cancel",
          onPress: () =>
            router.replace("/(screens)/vote-events/aFWdHRn39TAxjJZ9Hgb3MjkF"),
        },
        { text: "Yes", onPress: () => router.push("/(tabs)/Home") },
      ],
      { cancelable: true },
    );
  };

  return (
    <View className="flex-1 pt-5">
      <Fingerprint
        title="Verify Fingerprint"
        subtitle="When you're ABSOLUTELY CERTAIN, click Cast Vote. This action cannot be undone."
        buttonText="Cast Vote"
        required
        onsubmit={onSubmit}
      />
    </View>
  );
}
