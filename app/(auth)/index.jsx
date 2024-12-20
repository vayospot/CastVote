import { useRef, useState } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "@/utils/swiper";
import Colors from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";

export default function OnboardScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  return (
    <SafeAreaView className="flex-1 bg-default">
      <Swiper
        ref={swiperRef}
        enablePagination={true}
        dotWidth={20}
        dotHeight={3}
        paginationPosition={6}
        dotColor={Colors.primary}
        onIndexChange={(index) => setActiveSlide(index)}
      >
        <OnboardingStep
          title={"Voting Shouldn't\nBe a Chore"}
          description="With just your voter's card digits, you're one step closer to making your voice heard — Easy, fast, and stress-free."
          imageSource={require("../../assets/images/secure_card.png")}
        />
        <OnboardingStep
          title="Your Finger, Your Vote"
          description="Confirm with a touch—safe, quick, and uniquely yours. Voting has never been this secure."
          imageSource={require("../../assets/images/fingerprint.png")}
        />
      </Swiper>

      <CustomButton
        title={activeSlide === 1 ? "Get Started" : "Next"}
        className="mb-16 bg-primary"
        onPress={() => {
          if (activeSlide === 1) {
            router.push("/(auth)/SignIn");
          } else {
            swiperRef.current?.next();
          }
        }}
      />
    </SafeAreaView>
  );
}

const OnboardingStep = ({ title, description, imageSource }) => {
  return (
    <View className="h-full w-screen items-center px-6 py-20">
      <View className="self-start" style={{ gap: 10 }}>
        <Text className="font-boldFont text-4xl text-default">{title}</Text>
        <Text className="font-regularFont text-lg text-default">
          {description}
        </Text>
      </View>
      <Image
        source={imageSource}
        className="mt-20"
        style={{ width: 180, height: 180 }}
        resizeMode="contain"
      />
    </View>
  );
};
