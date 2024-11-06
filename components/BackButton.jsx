import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function BackButton({ size = 24, isVertical = false }) {
  const handleBackPress = () => router.canGoBack() && router.back();

  return (
    <>
      {router.canGoBack() && (
        <Ionicons.Button
          name={isVertical ? "chevron-down" : "chevron-back"}
          size={size}
          color={Colors.text || "gray"}
          backgroundColor="transparent"
          underlayColor="transparent"
          activeOpacity={0.3}
          onPress={handleBackPress}
        />
      )}
    </>
  );
}
