import { View, Text, TouchableOpacity } from "react-native";
import useVoteStore from "@/contexts/useVoteStore";
import { CANDIDATES, VOTE_EVENTS } from "@/services/mockData";
import ProfileImage from "@/components/ProfileImage";
import { Ionicons } from "@expo/vector-icons";
import {  router } from "expo-router";
import Colors from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import Toast from "react-native-toast-message";

export default function VoteReceipt() {
  const voteEventId = useVoteStore((state) => state.voteEvent);
  const candidateId = useVoteStore((state) => state.selectedCandidate);
  const event = VOTE_EVENTS.find((event) => event.id === voteEventId);
  const candidate = CANDIDATES[candidateId];

  return (
    <View className="flex-1 items-center pt-5" style={{ gap: 30 }}>
      <View
        className="flex-row items-center justify-center px-6"
        style={{ gap: 30 }}
      >
        <ProfileImage source={candidate.imageUrl} size={80} />
        <View>
          <Text className="font-boldFont text-2xl text-default">
            {candidate.name}
          </Text>
          <Text className="text-center font-regularFont text-subtle">
            {candidate.party}
          </Text>
        </View>
      </View>

      <Text className="text-center font-regularFont text-base">
        Thank you for participating in the{" "}
        <Text className="font-boldFont">{event.title}</Text>. Your vote
        has been successfully cast for{" "}
        <Text className="font-boldFont">{candidate.name}</Text>.
      </Text>

      <Ionicons
        name="checkmark-circle-outline"
        size={210}
        color="#16a34a"
        style={{ opacity: 0.8 }}
      />

      <View className="items-center" style={{ gap: 10 }}>
        <TouchableOpacity
          className="flex-row items-center"
          style={{ gap: 10 }}
          onPress={() => Toast.show({ type: "info", text1: "Unavailable" })}
        >
          <Ionicons
            name="document-text-outline"
            size={24}
            color={Colors.primary}
          />
          <Text className="font-boldFont text-base text-primary">
            Download Receipt
          </Text>
        </TouchableOpacity>

        <Text className="text-center font-regularFont text-default">
          Password protected receipt. The Password is your last four digits of
          your Voter ID.
        </Text>
      </View>

      <CustomButton
        title="Back"
        className="mt-3 bg-primary"
        onPress={() => router.back()}
      />
    </View>
  );
}
