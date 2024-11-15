import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ProfileImage from "./ProfileImage";
import Colors from "@/constants/Colors";

export default function CandidateList({
  candidates,
  selectedCandidate,
  onSelectCandidate,
  votedEventStatus,
  hasVoted,
}) {
  return (
    <View style={{ gap: 15 }}>
      {candidates?.map((candidate) => (
        <TouchableOpacity
          key={candidate.uid}
          className={`flex-row items-center justify-between rounded-lg border-2 border-white bg-white p-2.5 ${!hasVoted && selectedCandidate?.uid === candidate.uid && "border-primary"} ${hasVoted && votedEventStatus?.candidateId === candidate.uid && "border-primary"}`}
          disabled={hasVoted}
          activeOpacity={0.8}
          onPress={() => onSelectCandidate(candidate.uid)}
          style={{
            shadowColor: Colors.text,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 1,
          }}
        >
          <View className="flex-row items-center" style={{ gap: 10 }}>
            <ProfileImage source={candidate?.imageUrl} />
            <View>
              <Text className="font-boldFont text-lg text-default">
                {candidate?.name}
              </Text>
              <Text className="text-neutral font-regularFont">
                {candidate?.party}
              </Text>
            </View>
          </View>
          <Ionicons.Button
            name="information-circle-outline"
            size={28}
            color={Colors.primary}
            backgroundColor="transparent"
            underlayColor="transparent"
            iconStyle={{ marginRight: 5, marginLeft: 5 }}
            onPress={() =>
              router.push({
                pathname: "(screens)/vote-events/candidates/[candidateId]",
                params: {
                  candidateId: candidate?.uid,
                  hasVoted,
                },
              })
            }
            activeOpacity={0.3}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
