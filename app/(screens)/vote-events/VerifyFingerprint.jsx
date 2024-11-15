import { View, Alert } from "react-native";
import { router } from "expo-router";
import Fingerprint from "@/components/Fingerprint";
import useGlobalStore from "@/contexts/useGlobalStore";

export default function VerifyFingerprint() {
  const event = useGlobalStore((state) => state.selectedEvent);
  const candidate = useGlobalStore((state) => state.selectedCandidate);
  const setVotedEvents = useGlobalStore((state) => state.setVotedEvents);

  const onSubmit = () => {
    Alert.alert(
      "Cast Vote",
      "Are you sure you want to vote for this candidate? This action cannot be undone.",
      [
        {
          text: "No",
          style: "cancel",
          onPress: () => router.back(),
        },
        {
          text: "Yes",
          onPress: handleCastVote,
        },
      ],
      { cancelable: true },
    );
  };

  const handleCastVote = () => {
    setVotedEvents({
      eventId: event.id,
      candidateId: candidate.uid,
      timestamp: Date.now(),
    });
    router.replace("/(screens)/vote-events/VoteReceipt");
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
