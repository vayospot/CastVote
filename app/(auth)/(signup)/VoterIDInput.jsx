import { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

export default function VoterIDInput() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    defaultValues: {
      voterID: "",
    },
  });

  const formatVoterID = (value) => {
    const numeric = value.replace(/\D/g, "");
    // Format with dashes on every 4 characters
    const formatted = numeric.match(/.{1,4}/g)?.join("-") || "";

    setValue("voterID", formatted.slice(0, 24), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleFormSubmit = () => {
    if (!isValid) return;
    try {
      setIsLoading(true);
      handleSubmit(onSubmit)();
      setTimeout(() => {
        router.push("/(auth)/(signup)/AccountSetup");
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

  return (
    <View className="flex-1 bg-default px-6 pt-5" style={{ gap: 50 }}>
      <View className="items-center" style={{ gap: 30 }}>
        <Ionicons name="card-sharp" size={100} color={Colors.primary} />

        <View style={{ gap: 10 }}>
          <Text className="text-center font-boldFont text-3xl text-default">
            Enter Voter ID
          </Text>
          <Text className="text-center font-regularFont text-lg text-default">
            Provide your Voter ID to confirm your details and keep voting
            secure.
          </Text>
        </View>
      </View>

      <View style={{ gap: 30 }}>
        <FormInput
          control={control}
          name="voterID"
          placeholder="Voter ID"
          inputMode="numeric"
          maxLength={24} // 20 digits + 4 dashes
          onChangeText={formatVoterID}
          rules={{
            required: "Voter ID is required",
            pattern: {
              value: /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/,
              message: "Voter ID must be 20 digits",
            },
          }}
          validationError={errors.voterID}
          onSubmit={handleFormSubmit}
        />

        <CustomButton
          title="Next"
          className="bg-primary"
          disabled={!dirtyFields.voterID}
          onPress={handleFormSubmit}
          loading={isLoading}
          loadingColor={Colors.background}
        />
      </View>
    </View>
  );
}
