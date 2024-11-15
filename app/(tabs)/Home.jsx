import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/SearchBar";
import VoteEventCard from "@/components/VoteEventCard";
import FilterCategories from "@/components/FilterCategories";
import Colors from "@/constants/Colors";
import useGlobalStore from "@/contexts/useGlobalStore";

export default function Home() {
  const EVENTS = useGlobalStore((state) => state.events);

  return (
    <View className="flex-1" style={{ gap: 20 }}>
      <View style={{ gap: 15 }}>
        <View className="flex-row items-center justify-between">
          <Text className="font-boldFont text-3xl text-default">
            Voting Events
          </Text>
          <Ionicons name="calendar-outline" size={24} color={Colors.text} />
        </View>

        <SearchBar
          iconColor={Colors.text}
          placeholder="Search..."
          placeholderTextColor="rgba(6, 7, 8, 0.5)"
          onSearch={(value) => console.log(value)}
        />

        <FilterCategories
          filterOptions={["Ongoing", "Upcoming", "Participated"]}
          itemClassName="rounded-lg"
          inactiveFilterColor="transparent"
        />
      </View>

      <FlatList
        data={EVENTS}
        renderItem={({ item }) => <VoteEventCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, paddingBottom: 20 }}
      />
    </View>
  );
}
