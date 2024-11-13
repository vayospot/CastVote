import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { VOTE_EVENTS, CANDIDATES } from "@/services/mockData";
import { ImageBackground } from "@/components/Image";
import BackButton from "@/components/BackButton";
import ProfileImage from "@/components/ProfileImage";
import CustomButton from "@/components/CustomButton";
import formatTimestamp from "@/utils/formatTimestamp";
import Colors from "@/constants/Colors";
import Toast from "react-native-toast-message";
import useVoteStore from "@/contexts/useVoteStore";

export default function VoteEvent() {
  const selectedCandidate = useVoteStore((state) => state.selectedCandidate);
  const setSelectedCandidate = useVoteStore(
    (state) => state.setSelectedCandidate,
  );
  const setVoteEvent = useVoteStore((state) => state.setVoteEvent);
  const { eventId } = useLocalSearchParams();
  const event = VOTE_EVENTS.find((event) => event.id === eventId);
  const candidates = event.candidates.map((id) => CANDIDATES[id]);

  useEffect(() => {
    setVoteEvent(eventId);
  }, []);

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
      <Stack.Screen options={headerOptions(event)} />
      <View className="flex-1 pt-4" style={{ gap: 40 }}>
        <View style={{ gap: 15 }}>
          <View
            className="flex-row items-center justify-center"
            style={{ gap: 5 }}
          >
            <Ionicons name="people-outline" size={20} color={Colors.subtle} />
            <Text className="font-boldFont text-neutral-500">Total Votes</Text>
          </View>

          <View style={{ gap: 8 }}>
            <Text className="text-center font-boldFont text-5xl text-primary">
              {event?.voteCount.toLocaleString()}
            </Text>

            <View
              className="flex-row items-center justify-center"
              style={{ gap: 5 }}
            >
              <Ionicons name="timer-outline" size={20} color={Colors.text} />
              <Text className="font-boldFont text-default">
                Voting ends in {formatTimestamp(event?.timeLeft).dateTime}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 15 }}>
          {candidates.map((candidate) => (
            <TouchableOpacity
              key={candidate.id}
              className={`flex-row items-center justify-between rounded-lg border-2 border-white bg-white p-2.5 ${selectedCandidate === candidate.id && "border-primary"}`}
              activeOpacity={0.8}
              onPress={() => setSelectedCandidate(candidate.id)}
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
                  router.push(
                    `(screens)/vote-events/candidates/${candidate.id}`,
                  )
                }
                activeOpacity={0.3}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-5 mt-auto" style={{ gap: 15 }}>
          <CustomButton
            title="Vote"
            className="bg-primary"
            onPress={handleVotePress}
          />
          <CustomButton
            title="Stats"
            className="border border-primary bg-default"
            textClassName="text-primary"
          />
        </View>
      </View>
    </>
  );
}

const headerOptions = (data) => {
  const insets = useSafeAreaInsets();

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
              source={data?.imageSource}
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
                  {data?.subtitle}
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
