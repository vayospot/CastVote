import { View, Text, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import Colors from "@/constants/Colors";
import FormInput from "@/components/FormInput";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      setTimeout(() => {
        router.dismissAll();
        router.replace("/(tabs)/Home");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="flex-1 bg-default px-6 pt-5">
      <Text className="mb-14 font-boldFont text-3xl text-default">
        Let's get started!
      </Text>

      <View style={{ gap: 15 }}>
        <FormInput
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          name="email"
          placeholder="Email"
          inputMode="email"
          IconLeft={() => (
            <Ionicons name="mail-outline" size={24} color={Colors.text} />
          )}
          validationError={errors.email}
          onSubmit={handleSubmit(onSubmit)}
        />

        <FormInput
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 4, message: "Minimum 4 characters" },
          }}
          name="password"
          placeholder="Password"
          secureTextEntry
          IconLeft={() => (
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={Colors.text}
            />
          )}
          validationError={errors.password}
          onSubmit={handleSubmit(onSubmit)}
        />

        <CustomButton
          title="Log In"
          className="mt-8 bg-primary"
          disabled={!dirtyFields.email || !dirtyFields.password}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          loadingColor={Colors.background}
        />
      </View>

      <Link href="/(auth)/(signup)" asChild>
        <TouchableOpacity className="mt-3 self-center">
          <Text className="font-regularFont text-default/80">
            Don't have an account?{" "}
            <Text className="font-boldFont">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
