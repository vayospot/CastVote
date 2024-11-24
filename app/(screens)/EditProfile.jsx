import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FormInput, { PickerInput } from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

const COUNTRY_OPTIONS = [
  { label: "USA", value: "USA" },
  { label: "UK", value: "UK" },
  { label: "Nigeria", value: "Nigeria" },
];

const STATE_OPTIONS = [
  { label: "Lagos", value: "Lagos" },
  { label: "Abuja", value: "Abuja" },
  { label: "Carlifornia", value: "Carlifornia" },
];

const CITY_OPTIONS = [{ label: "Ikeja", value: "Ikeja" }];

const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export default function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: "Chinonso Okeke",
      voterID: "0491-0846-5263-2638-2363",
      date_of_birth: "01-01-2000",
      gender: "Male",
      email: "chinoso@example.com",
      country: "Nigeria",
      state: "Lagos",
      city: "Ikeja",
      address: "Ikeja, Lagos",
      zip_code: "100001",
    },
  });

  const formatVoterID = (value) => {
    const numeric = value.replace(/\D/g, "");
    // Format with dashes on every 4 characters
    const formatted = numeric.match(/.{1,4}/g)?.join("-") || "";
    return formatted.slice(0, 24);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const cleanedData = {
        ...data,
        voterID: data.voterID.replaceAll("-", ""),
      };
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Submitted data:", cleanedData);

      router.back();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1" style={{ gap: 30 }}>
      <View style={{ gap: 10 }}>
        <Text className="font-boldFont text-2xl text-default">
          Personal details
        </Text>
        <Text className="font-regularFont text-base text-subtle">
          Update your personal details according to your government issued ID.
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          position: "relative",
          paddingBottom: 20,
          gap: 15,
        }}
        scrollEventThrottle={16}
      >
        <PersonalInfoSection
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          formatVoterID={formatVoterID}
          onSubmit={onSubmit}
        />

        <AddressInfoSection
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />

        <CustomButton
          title="Update"
          className="bg-primary"
          disabled={!isDirty}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          loadingColor={Colors.background}
        />
      </ScrollView>
    </View>
  );
}

function PersonalInfoSection({
  control,
  errors,
  handleSubmit,
  formatVoterID,
  onSubmit,
}) {
  return (
    <View style={{ gap: 10 }}>
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
          <Ionicons name="person-outline" size={20} color={Colors.text} />
        )}
        validationError={errors.name}
        onSubmit={handleSubmit(onSubmit)}
      />

      <View className="flex-row" style={{ gap: 15 }}>
        <FormInput
          control={control}
          name="date_of_birth"
          placeholder="Date of birth"
          rules={{
            required: "Date of birth is required",
          }}
          IconLeft={() => (
            <Ionicons name="calendar-outline" size={20} color={Colors.text} />
          )}
          validationError={errors.date_of_birth}
          onSubmit={handleSubmit(onSubmit)}
          containerClassName="flex-1"
        />

        <PickerInput
          control={control}
          name="gender"
          rules={{
            required: "Gender is required",
          }}
          IconLeft={() => (
            <Ionicons
              name="male-female-outline"
              size={20}
              color={Colors.text}
            />
          )}
          validationError={errors.gender}
          onSubmit={handleSubmit(onSubmit)}
          containerClassName="flex-1"
          placeholder="Gender"
          pickerItemsFont="PTSansRegular"
          pickerItemsColor={Colors.text}
          pickerItems={GENDER_OPTIONS}
        />
      </View>

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
        IconLeft={() => (
          <Ionicons name="card-outline" size={20} color={Colors.text} />
        )}
        validationError={errors.voterID}
        onSubmit={handleSubmit(onSubmit)}
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
          <Ionicons name="mail-outline" size={20} color={Colors.text} />
        )}
        validationError={errors.email}
        onSubmit={handleSubmit(onSubmit)}
      />
    </View>
  );
}

function AddressInfoSection({ control, errors, handleSubmit, onSubmit }) {
  return (
    <View style={{ gap: 15 }}>
      <Text className="font-boldFont text-base text-primary">
        Official Residential Address
      </Text>

      <View style={{ gap: 10 }}>
        <View className="flex-row" style={{ gap: 15 }}>
          <PickerInput
            control={control}
            name="country"
            rules={{
              required: "Country is required",
            }}
            IconLeft={() => (
              <Ionicons name="flag-outline" size={20} color={Colors.text} />
            )}
            validationError={errors.country}
            containerClassName="flex-1"
            placeholder="Country"
            pickerItemsFont="PTSansRegular"
            pickerItemsColor={Colors.text}
            pickerItems={COUNTRY_OPTIONS}
          />

          <PickerInput
            control={control}
            name="state"
            rules={{
              required: "State is required",
            }}
            IconLeft={() => (
              <Ionicons name="location-outline" size={20} color={Colors.text} />
            )}
            validationError={errors.state}
            containerClassName="flex-1"
            placeholder="State"
            pickerItemsFont="PTSansRegular"
            pickerItemsColor={Colors.text}
            pickerItems={STATE_OPTIONS}
          />
        </View>

        <View className="flex-row" style={{ gap: 15 }}>
          <PickerInput
            control={control}
            name="city"
            rules={{
              required: "City is required",
            }}
            IconLeft={() => (
              <Ionicons name="location-outline" size={20} color={Colors.text} />
            )}
            validationError={errors.city}
            containerClassName="flex-1"
            placeholder="City"
            pickerItemsFont="PTSansRegular"
            pickerItemsColor={Colors.text}
            pickerItems={CITY_OPTIONS}
          />

          <FormInput
            control={control}
            name="zip_code"
            placeholder="Zip Code"
            rules={{
              required: "Zip Code is required",
            }}
            inputMode="numeric"
            IconLeft={() => (
              <Ionicons name="barcode-outline" size={20} color={Colors.text} />
            )}
            validationError={errors.zip_code}
            onSubmit={handleSubmit(onSubmit)}
            containerClassName="flex-1"
          />
        </View>
        <FormInput
          control={control}
          name="address"
          placeholder="Residential Address"
          rules={{
            required: "Address is required",
          }}
          IconLeft={() => (
            <Ionicons name="pin-outline" size={20} color={Colors.text} />
          )}
          validationError={errors.address}
          onSubmit={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
