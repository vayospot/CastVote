import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

export default function RoleSelection() {
  return (
    <View className="flex-1 bg-default px-6 pt-5" style={{ gap: 50 }}>
      <Text className="font-boldFont text-5xl text-default">I'm a</Text>

      <View style={{ gap: 40 }}>
        <TouchableOpacity
          className="relative aspect-video overflow-hidden rounded-md bg-default"
          activeOpacity={0.8}
          style={{
            shadowColor: Colors.text,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 4,
            gap: 10,
          }}
          onPress={() => router.push("/(auth)/(signup)/VoterIDInput")}
        >
          <Text className="self-end pr-8 pt-8 font-boldFont text-2xl text-default">
            Voter
          </Text>
          <View className="absolute -bottom-5 left-0">
            <Ionicons name="person" size={130} color={Colors.secondary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="relative aspect-video overflow-hidden rounded-md bg-default"
          activeOpacity={0.8}
          style={{
            shadowColor: Colors.text,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 4,
            gap: 10,
          }}
          onPress={() =>
            Toast.show({
              type: "error",
              text1: "Sorry, this feature is not available yet",
              text1Style: {
                fontFamily: "PTSansBold",
                fontWeight: "normal",
                fontSize: 13,
              },
            })
          }
        >
          <Text className="pl-8 pt-8 font-boldFont text-2xl text-default">
            Candidate
          </Text>
          <View className="absolute -bottom-5 right-0">
            <Ionicons name="podium" size={130} color={Colors.secondary} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
