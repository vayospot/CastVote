import { View } from "react-native";
import { router } from "expo-router";
import Fingerprint from "@/components/Fingerprint";

export default function VerifyFingerprint() {
  const onSubmit = () => router.push("/(tabs)/Home");

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
