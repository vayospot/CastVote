import { View, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View className="flex-1 bg-default px-6 py-16">
      <Text className="mb-14 font-boldFont text-4xl text-default">Log In</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            inputClassName=""
            IconLeft={() => (
              <Ionicons name="mail-outline" size={24} color={Colors.text} />
            )}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder="Email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
    </View>
  );
}
