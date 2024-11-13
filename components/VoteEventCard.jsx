import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "@/components/Image";
import Colors from "@/constants/Colors";
import abbreviateNumber from "@/utils/abbreviateNumber";
import formatTimestamp from "@/utils/formatTimestamp";

export default VoteEventCard = ({
  id: eventId,
  title,
  subtitle,
  timeLeft,
  voteCount,
  imageSource,
  voted = false,
}) => {
  return (
    <Link href={`/(screens)/vote-events/${eventId}`} asChild>
      <TouchableOpacity activeOpacity={0.9} className="max-w-xs self-center">
        <ImageBackground
          source={imageSource}
          className="relative justify-between overflow-hidden rounded-xl"
          transition={1000}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.1)", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.6 }}
            className="absolute inset-x-0 inset-y-0 z-0"
          />

          <View className="p-3">
            <Text className="font-boldFont text-lg text-background">
              {title}
            </Text>
            <Text className="font-boldFont text-background">{subtitle}</Text>
          </View>

          <View
            className="flex-row items-center bg-primary px-3 py-2"
            style={{ gap: 8 }}
          >
            <View className="flex-1">
              <View className="flex-row items-center" style={{ gap: 5 }}>
                <Ionicons
                  name="timer-outline"
                  size={15}
                  color={Colors.background}
                />
                <Text className="font-regularFont text-sm text-background">
                  {formatTimestamp(timeLeft).timeLeft().hours} hours left
                </Text>
              </View>

              <View className="flex-row items-center" style={{ gap: 5 }}>
                <Ionicons
                  name="people-outline"
                  size={15}
                  color={Colors.background}
                />
                <Text className="font-regularFont text-sm text-background">
                  {abbreviateNumber(voteCount)} votes
                </Text>
              </View>
            </View>

            <Ionicons.Button
              name="stats-chart-outline"
              size={24}
              iconStyle={{ marginRight: 0 }}
              color={Colors.background}
              backgroundColor="transparent"
              underlayColor="transparent"
              onPress={() => console.log("Pressed")}
            />

            <View
              className={`min-w-[65] rounded-lg bg-background ${voted && "border border-background bg-transparent"}`}
            >
              <Text
                className={`px-4 py-2 text-center font-boldFont text-default ${voted && "text-background"}`}
              >
                {voted ? "Voted" : "Vote"}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Link>
  );
};
