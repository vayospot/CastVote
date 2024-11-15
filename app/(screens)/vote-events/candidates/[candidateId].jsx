import { View, Text, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import useGlobalStore from "@/contexts/useGlobalStore";
import ProfileImage from "@/components/ProfileImage";
import CustomButton from "@/components/CustomButton";
import { MANIFESTO } from "@/services/mockData";

export default function Candidate() {
  const { candidateId, hasVoted } = useLocalSearchParams();
  const candidate = useGlobalStore((state) => state.candidates).find(
    (candidate) => candidate.uid === candidateId,
  );
  const setSelectedCandidate = useGlobalStore(
    (state) => state.setSelectedCandidate,
  );

  const handleVotePress = () => {
    setSelectedCandidate(candidateId);
    router.replace(`(screens)/vote-events/VerifyVoterID`);
  };

  return (
    <View className="flex-1 pt-5" style={{ gap: 30 }}>
      <View className="px-6" style={{ gap: 30 }}>
        <View
          className="flex-row items-center justify-center px-6"
          style={{ gap: 30 }}
        >
          <ProfileImage source={candidate?.imageUrl} size={80} />
          <View>
            <Text className="font-boldFont text-2xl text-default">
              {candidate?.name}
            </Text>
            <Text className="text-center font-regularFont text-subtle">
              {candidate?.party}
            </Text>
          </View>
        </View>

        <CustomButton
          title="Vote"
          className="bg-primary"
          onPress={handleVotePress}
          disabled={JSON.parse(hasVoted)}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 30, paddingBottom: 50 }}
      >
        {MANIFESTO.map((item, index) => (
          <View style={{ gap: 10 }} key={index}>
            <Text className="bg-neutral-200/80 py-1 text-center font-boldFont text-lg text-default">
              {item.title}
            </Text>
            <Text className="px-6 font-regularFont text-base text-default">
              {item.content}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
