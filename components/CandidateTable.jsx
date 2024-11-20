import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";

export default function CandidateTable({ candidates }) {
  const [percentages, setPercentages] = useState([]);

  const animatedWidths = useRef(
    candidates.map(() => new Animated.Value(0)),
  ).current;

  const totalVoteCount = useMemo(
    () => candidates.reduce((sum, candidate) => sum + candidate?.voteCount, 0),
    [candidates],
  );

  useEffect(() => {
    const newPercentages = candidates.map((candidate) =>
      Math.round((candidate?.voteCount / totalVoteCount) * 100),
    );
    setPercentages(newPercentages);

    newPercentages.forEach((percentage, index) => {
      Animated.timing(animatedWidths[index], {
        toValue: percentage,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  }, [candidates, totalVoteCount, animatedWidths]);

  return (
    <View className="px-1" style={{ gap: 15 }}>
      <View className="flex-row items-center" style={{ gap: 10 }}>
        <Text className="basis-3/6 font-boldFont text-sm text-subtle">
          CANDIDATES
        </Text>
        <Text className="basis-2/6 font-boldFont text-sm text-subtle">
          VOTES
        </Text>
        <Text className="basis-1/6 font-boldFont text-sm text-subtle">PCT</Text>
      </View>

      {candidates.map((candidate, index) => (
        <View key={candidate?.uid}>
          <View className="flex-row items-center" style={{ gap: 10 }}>
            <Text className="basis-3/6 font-boldFont text-lg">
              {candidate?.name}
            </Text>
            <Text className="basis-2/6 font-regularFont text-base">
              {(candidate?.voteCount).toLocaleString()}
            </Text>
            <Text className="basis-1/6 font-boldFont text-base">
              {percentages[index]}%
            </Text>
          </View>

          <View className="flex-row items-center" style={{ gap: 10 }}>
            <Text className="basis-3/6 font-regularFont text-subtle">
              {candidate?.party}
            </Text>

            <View className="basis-3/6 overflow-hidden rounded-full">
              <Animated.View
                className="h-2"
                style={{
                  width: animatedWidths[index].interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                  backgroundColor: candidate?.color.frontColor,
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
