import { View } from "react-native";
import { router } from "expo-router";
import useGlobalStore from "@/contexts/useGlobalStore";
import Fingerprint from "@/components/Fingerprint";

export default function FingerprintSetup() {
  const getEvents = useGlobalStore((state) => state.getEvents);
  const onSubmit = async () => {
    await getEvents.initialFetch();
    router.dismissAll();
    router.replace("/(tabs)/Home");
  };

  return (
    <View className="flex-1 bg-default px-6 pt-5">
      <Fingerprint
        title="Set Up Fingerprint"
        subtitle="Your fingerprint links directly to your voter ID for secure and
            authenticated voting."
        buttonText="Proceed"
        required={false}
        onsubmit={onSubmit}
      />
    </View>
  );
}
