import { useMemo, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatsBottomSheet from "../(screens)/StatsBottomSheet";
import useGlobalStore from "@/contexts/useGlobalStore";
import SearchBar from "@/components/SearchBar";
import VoteEventCard from "@/components/VoteEventCard";
import Colors from "@/constants/Colors";

export default function Stats() {
  const EVENTS = useGlobalStore((state) => state.events);
  const user = useGlobalStore((state) => state.user);

  const votedEvents = useMemo(() => {
    const votedEventIds = new Set(user.votedEvents.map((v) => v.eventId));
    return EVENTS.filter((event) => votedEventIds.has(event.id));
  }, [EVENTS, user.votedEvents]);

  const [showStatsBottomSheet, setShowStatsBottomSheet] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleShowStats = (eventId) => {
    setSelectedEventId(eventId);
    setShowStatsBottomSheet(true);
  };

  return (
    <View className="flex-1" style={{ gap: 20 }}>
      <View style={{ gap: 15 }}>
        <View className="flex-row items-center justify-between">
          <Text className="font-boldFont text-2xl text-default">
            Vote History
          </Text>
          <Ionicons name="calendar-outline" size={24} color={Colors.text} />
        </View>

        <SearchBar
          iconColor={Colors.text}
          placeholder="Search..."
          placeholderTextColor="rgba(6, 7, 8, 0.5)"
          onSearch={(value) => console.log(value)}
        />
      </View>

      <FlatList
        data={votedEvents}
        renderItem={({ item }) => (
          <VoteEventCard
            {...item}
            variant="Stats"
            onPress={() => handleShowStats(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, paddingBottom: 20 }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="font-regularFont text-xl text-default">
              No vote history...
            </Text>
          </View>
        )}
      />

      {showStatsBottomSheet && (
        <StatsBottomSheet
          eventId={selectedEventId}
          onDismiss={() => setShowStatsBottomSheet(false)}
        />
      )}
    </View>
  );
}
