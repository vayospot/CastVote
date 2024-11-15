import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Header } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "@/components/Image";
import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import formatTimestamp from "@/utils/formatTimestamp";
import Colors from "@/constants/Colors";
import Toast from "react-native-toast-message";
import useGlobalStore from "@/contexts/useGlobalStore";
import CandidateList from "@/components/CandidateList";

export default function VoteEvent() {
  const insets = useSafeAreaInsets();
  const { eventId } = useLocalSearchParams();

  const event = useGlobalStore((state) => state.events).find(
    (event) => event.id === eventId,
  );
  const setSelectedEvent = useGlobalStore((state) => state.setSelectedEvent);

  const candidates = useGlobalStore((state) => state.candidates);
  const getCandidates = useGlobalStore((state) => state.getCandidates);
  const isLoadingCandidates = useGlobalStore(
    (state) => state.isLoadingCandidates,
  );
  const selectedCandidate = useGlobalStore((state) => state.selectedCandidate);
  const setSelectedCandidate = useGlobalStore(
    (state) => state.setSelectedCandidate,
  );

  const votedEventStatus = useGlobalStore(
    (state) => state.user,
  ).votedEvents.find((e) => e.eventId === eventId);
  const hasVoted = !!votedEventStatus;

  useEffect(() => {
    setSelectedEvent(eventId);
    (async () => await getCandidates(event.candidateIds))();
  }, [getCandidates, event.candidateIds, setSelectedEvent, eventId]);

  const handleVotePress = () => {
    if (!selectedCandidate) {
      Toast.show({
        type: "error",
        text1: "Please select a candidate",
      });
    } else {
      router.push("(screens)/vote-events/VerifyVoterID");
    }
  };

  return (
    <>
      <Stack.Screen options={headerOptions(event, insets)} />
      <View className="flex-1 pt-4" style={{ gap: 40 }}>
        {isLoadingCandidates ? (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            className="flex-1 self-center"
          />
        ) : (
          <>
            <View style={{ gap: 15 }}>
              <View
                className="flex-row items-center justify-center"
                style={{ gap: 5 }}
              >
                <Ionicons
                  name="people-outline"
                  size={20}
                  color={Colors.subtle}
                />
                <Text className="font-boldFont text-neutral-500">
                  Total Votes
                </Text>
              </View>

              <View style={{ gap: 8 }}>
                <Text className="text-center font-boldFont text-5xl text-primary">
                  {event?.voteCount.toLocaleString()}
                </Text>

                <View
                  className="flex-row items-center justify-center"
                  style={{ gap: 5 }}
                >
                  <Ionicons
                    name="timer-outline"
                    size={20}
                    color={Colors.text}
                  />
                  <Text className="font-boldFont text-default">
                    Voting ends in {formatTimestamp(event?.timeLeft).dateTime}
                  </Text>
                </View>
              </View>
            </View>

            <CandidateList
              candidates={candidates}
              selectedCandidate={selectedCandidate}
              onSelectCandidate={setSelectedCandidate}
              votedEventStatus={votedEventStatus}
              hasVoted={hasVoted}
            />

            <View className="mb-5 mt-auto" style={{ gap: 15 }}>
              <CustomButton
                title={hasVoted ? "Voted" : "Vote"}
                className={`bg-primary ${hasVoted && "bg-default shadow-none"}`}
                textClassName={`${hasVoted && "text-primary"}`}
                onPress={handleVotePress}
                disabled={hasVoted}
              />
              <CustomButton
                title="Stats"
                className={`${hasVoted ? "bg-primary" : "border border-primary bg-default"}`}
                textClassName={`${!hasVoted && "text-primary"}`}
                onPress={() => router.push("/(tabs)/Stats")}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
}

const headerOptions = (data, insets) => {
  return {
    header: ({ options }) => (
      <Header
        {...options}
        headerStyle={{
          height: 220,
        }}
        headerBackground={() => (
          <View className="bg-default">
            <ImageBackground
              source={data?.imageUrl}
              aspectVideo={false}
              className="relative h-full justify-center overflow-hidden rounded-bl-3xl rounded-br-3xl"
            >
              <LinearGradient
                colors={[
                  "rgba(0, 0, 0, 0.3)",
                  "rgba(0, 0, 0, 0.35)",
                  "transparent",
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="absolute inset-x-0 inset-y-0 z-0"
              />

              <View>
                <Text
                  className="text-center font-boldFont text-3xl text-background"
                  style={{
                    textShadowColor: "rgba(0, 0, 0, 0.7)",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 2,
                  }}
                >
                  {data?.title}
                </Text>
                <Text
                  className="text-center font-boldFont text-background"
                  style={{
                    textShadowColor: "rgba(0, 0, 0, 0.7)",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 2,
                  }}
                >
                  {data?.location}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
        headerLeft={() => <BackButton color={Colors.background} />}
        headerLeftContainerStyle={{
          justifyContent: "flex-start",
          paddingTop: insets.top + 8,
          paddingLeft: 16,
        }}
      />
    ),
  };
};
