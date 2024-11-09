import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

export default function AccountSetup() {
  const [isLoading, setIsLoading] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    defaultValues: {
      name: "Chinonso Okeke",
      date_of_birth: "01-01-2000",
      voterID: "0491-0846-5263-2638-2363",
      email: "",
      password: "",
      terms_conditions: false,
    },
  });

  const handleFormSubmit = () => {
    if (!isValid) return;
    try {
      setIsLoading(true);
      handleSubmit(onSubmit)();
      setTimeout(() => {
        router.push("/(auth)/(signup)/FingerprintSetup");
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    const cleanedData = {
      ...data,
      voterID: data.voterID.replaceAll("-", ""),
    };
    console.log(cleanedData);
  };

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isNearBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y < 10;
    setShowBottomGradient(!isNearBottom);
  };

  return (
    <View className="flex-1 bg-default px-6 pt-5" style={{ gap: 50 }}>
      <View className="items-center" style={{ gap: 30 }}>
        <Ionicons name="shield-checkmark" size={100} color={Colors.primary} />
        <View style={{ gap: 10 }}>
          <Text className="text-center font-boldFont text-3xl text-default">
            Setup your account
          </Text>
          <Text className="text-center font-regularFont text-lg text-default">
            We need a few more details to get started and secure your account.
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingBottom: 20,
          position: "relative",
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <FormInput
          control={control}
          name="name"
          placeholder="Full name"
          rules={{
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "At least 2 characters",
            },
            maxLength: {
              value: 50,
              message: "Max 50 characters",
            },
          }}
          IconLeft={() => (
            <Ionicons name="person-outline" size={24} color={Colors.text} />
          )}
          validationError={errors.name}
          onSubmit={handleFormSubmit}
          disabled={true}
        />

        <FormInput
          control={control}
          name="date_of_birth"
          placeholder="Date of birth"
          rules={{
            required: "Date of birth is required",
          }}
          IconLeft={() => (
            <Ionicons name="calendar-outline" size={24} color={Colors.text} />
          )}
          validationError={errors.date_of_birth}
          onSubmit={handleFormSubmit}
          disabled={true}
        />

        <FormInput
          control={control}
          name="voterID"
          placeholder="Voter ID"
          inputMode="numeric"
          maxLength={24} // 20 digits + 4 dashes
          rules={{
            required: "Voter ID is required",
            pattern: {
              value: /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/,
              message: "Voter ID must be 20 digits",
            },
          }}
          IconLeft={() => (
            <Ionicons name="card-outline" size={24} color={Colors.text} />
          )}
          validationError={errors.voterID}
          onSubmit={handleFormSubmit}
          disabled={true}
        />

        <FormInput
          control={control}
          name="email"
          placeholder="Email"
          inputMode="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          IconLeft={() => (
            <Ionicons name="mail-outline" size={24} color={Colors.text} />
          )}
          validationError={errors.email}
          onSubmit={handleFormSubmit}
        />

        <FormInput
          control={control}
          name="password"
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: { value: 4, message: "Minimum 4 characters" },
          }}
          IconLeft={() => (
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={Colors.text}
            />
          )}
          validationError={errors.password}
          onSubmit={handleFormSubmit}
        />

        <FormInput
          control={control}
          rules={{ required: "Required" }}
          name="terms_conditions"
          type="checkbox"
          checkboxTitle="I agree to the terms and conditions."
          checkboxColor={Colors.primary}
          checkboxIconColor={Colors.background}
          validationError={errors.terms_conditions}
        />

        <CustomButton
          title="Next"
          className="bg-primary"
          disabled={!dirtyFields.email || !dirtyFields.password}
          onPress={handleFormSubmit}
          loading={isLoading}
          loadingColor={Colors.background}
        />
      </ScrollView>

      {showBottomGradient && (
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.2)"]}
          className="absolute bottom-0 left-0 right-0 z-10 h-6"
          pointerEvents="none"
        />
      )}
    </View>
  );
}
