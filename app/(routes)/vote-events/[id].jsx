import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function VoteEvent() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>VoteEventScreen for {id}</Text>
    </View>
  );
}
