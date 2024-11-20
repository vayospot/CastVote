import { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { CreateBottomSheetModal } from "@/components/BottomSheet";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import useGlobalStore from "@/contexts/useGlobalStore";
import StatsBarChart from "@/components/StatsBarChart";
import CandidateTable from "@/components/CandidateTable";
import Colors, { CandidateColors } from "@/constants/Colors";
import randomValue from "@/utils/randomValue";
import shuffle from "@/utils/shuffle";

export default function StatsBottomSheet({ eventId, onDismiss }) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["95%"], []);

  const voteEvent = useGlobalStore((state) => state.events).find(
    (event) => event.id === eventId,
  );

  const candidates = useGlobalStore((state) => state.candidates);
  const getCandidates = useGlobalStore((state) => state.getCandidates);
  const isLoadingCandidates = useGlobalStore(
    (state) => state.isLoadingCandidates,
  );

  const [voteEventCount, setVoteEventCount] = useState(voteEvent.voteCount);
  const [isChartLoaded, setIsChartLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const newVoteEventCount = randomValue({
        min: voteEventCount,
        max: voteEventCount * 1.1,
      });
      setVoteEventCount(newVoteEventCount);
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    bottomSheetRef.current?.present();
  }, []);

  useEffect(() => {
    getCandidates(voteEvent.candidateIds);
  }, [getCandidates, voteEvent.candidateIds]);

  const updatedCandidates = useMemo(() => {
    if (!isLoadingCandidates && candidates?.length) {
      const shuffledColors = shuffle(CandidateColors);
      return candidates.map((candidate, index) => ({
        ...candidate,
        voteCount: randomValue({ min: 1, max: voteEventCount }),
        color: shuffledColors[index],
      }));
    }
  }, [candidates, voteEventCount, isLoadingCandidates]);

  return (
    <CreateBottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enableContentPanningGesture={false}
      backgroundStyle={{ backgroundColor: Colors.background }}
      handleComponent={() => (
        <Header onPress={() => bottomSheetRef.current?.dismiss()} />
      )}
      onDismiss={onDismiss}
    >
      <BottomSheetScrollView
        contentContainerStyle={{ paddingHorizontal: 24, gap: 30 }}
        refreshing={refreshing}
        onRefresh={onRefresh}
      >
        {isLoadingCandidates ? (
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            className="mt-10"
          />
        ) : (
          <>
            <StatsBarChart
              data={updatedCandidates}
              onLoad={() => setIsChartLoaded(true)}
            />
            {isChartLoaded && <CandidateTable candidates={updatedCandidates} />}
          </>
        )}
      </BottomSheetScrollView>
    </CreateBottomSheetModal>
  );
}

const Header = ({ onPress }) => {
  return (
    <View className="relative flex-row items-center justify-center border-b border-subtle/10 p-2">
      <View className="absolute left-2">
        <Ionicons.Button
          name="close"
          size={24}
          color={Colors.text}
          backgroundColor="transparent"
          underlayColor="transparent"
          iconStyle={{ marginRight: 0 }}
          onPress={onPress}
        />
      </View>
      <Text className="font-boldFont text-xl text-default">Stats</Text>
    </View>
  );
};
