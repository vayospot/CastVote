import { View } from "react-native";
import VoterIDInput from "@/components/VoterIDInput";
import { router } from "expo-router";

export default function VerifyVoterID() {
  const onSubmit = (data) => {
    const cleanedData = {
      ...data,
      voterID: data.voterID.replaceAll("-", ""),
    };
    console.log(cleanedData);
  };

  return (
    <View className="flex-1 pt-5">
      <VoterIDInput
        onSubmit={onSubmit}
        onNavigate={() =>
          router.replace("/(screens)/vote-events/VerifyFingerprint")
        }
      />
    </View>
  );
}
