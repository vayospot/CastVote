import VoterIDInput from "@/components/VoterIDInput";
import { View } from "react-native";

export default function VoterIDSetup() {
  const onSubmit = (data) => {
    const cleanedData = {
      ...data,
      voterID: data.voterID.replaceAll("-", ""),
    };
    console.log(cleanedData);
  };

  return (
    <View className="flex-1 bg-default px-6 pt-5">
      <VoterIDInput onSubmit={onSubmit} href="/(auth)/(signup)/AccountSetup" />
    </View>
  );
}
