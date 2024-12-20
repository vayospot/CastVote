import { useState } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

export default function VoterIDInput({ onSubmit, onNavigate }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      voterID: "",
    },
  });

  const formatVoterID = (value) => {
    const numeric = value.replace(/\D/g, "");
    // Format with dashes on every 4 characters
    const formatted = numeric.match(/.{1,4}/g)?.join("-") || "";
    return formatted.slice(0, 24);
  };

  const submitForm = (data) => {
    try {
      setIsLoading(true);
      onSubmit(data);
      setTimeout(() => {
        onNavigate();
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="flex-1" style={{ gap: 50 }}>
      <View className="items-center" style={{ gap: 30 }}>
        <Ionicons name="card-sharp" size={100} color={Colors.primary} />

        <View style={{ gap: 10 }}>
          <Text className="text-center font-boldFont text-3xl text-default">
            Enter Voter ID
          </Text>
          <Text className="text-center font-regularFont text-lg text-default">
            Provide your Voter ID to verify your details and keep voting secure.
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
          handleChangeText={formatVoterID}
          rules={{
            required: "Voter ID is required",
            pattern: {
              value: /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/,
              message: "Voter ID must be 20 digits",
            },
          }}
          validationError={errors.voterID}
          onSubmit={handleSubmit(submitForm)}
        />

        <CustomButton
          title="Verify"
          className="bg-primary"
          disabled={!dirtyFields.voterID}
          onPress={handleSubmit(submitForm)}
          loading={isLoading}
          loadingColor={Colors.background}
        />
      </View>
    </View>
  );
}
