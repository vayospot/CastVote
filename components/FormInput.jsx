import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FormInput({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  secureIconSize = 24,
  secureIconColor = "#d4d4d4",
  labelClassName,
  inputClassName,
  inputBoxClassName,
  containerClassName,
  IconLeft,
  handleSubmit,
  ...props
}) {
  const [hideSecureText, setHideSecureText] = useState(true);

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    handleSubmit();
  };

  return (
    <View className={`gap-1.5 ${containerClassName}`}>
      {label && (
        <Text className={`font-regularFont text-neutral-300 ${labelClassName}`}>
          {label}
        </Text>
      )}

      <View
        className={`flex-row items-center gap-3 border border-x-0 border-t-0 border-white ${inputBoxClassName}`}
      >
        {IconLeft && <IconLeft />}
        <TextInput
          className={`flex-1 py-1 font-regularFont text-lg text-white ${inputClassName}`}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry && hideSecureText}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            className="items-center justify-center"
            activeOpacity={0.7}
            onPress={() => setHideSecureText(!hideSecureText)}
          >
            {hideSecureText ? (
              <Ionicons
                name="eye-off-outline"
                size={secureIconSize}
                color={secureIconColor}
              />
            ) : (
              <Ionicons
                name="eye-outline"
                size={secureIconSize}
                color={secureIconColor}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
