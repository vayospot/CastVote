import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function FormInput({
  control,
  name,
  label,
  rules,
  secureTextEntry = false,
  secureIconSize = 24,
  secureIconColor = "#9E9E9E",
  labelClassName,
  inputClassName,
  inputBoxClassName,
  containerClassName,
  handleChangeText,
  IconLeft,
  validationError,
  onSubmit,
  type,
  checkboxTitle,
  checkboxColor,
  checkboxIconColor,
  disabled = false,
  ...props
}) {
  const [isSecureHidden, setIsSecureHidden] = useState(true);

  const handleFormSubmit = () => {
    Keyboard.dismiss();
    if (onSubmit) onSubmit();
  };

  return (
    <View className={containerClassName} style={{ gap: 6 }}>
      {label && (
        <Text className={`font-regularFont text-default/75 ${labelClassName}`}>
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {type === "checkbox" ? (
              <Checkbox
                title={checkboxTitle}
                checkboxColor={checkboxColor}
                iconColor={checkboxIconColor}
                checked={value}
                onToggle={onChange}
              />
            ) : (
              <View
                className={`flex-row items-center border-b border-default ${inputBoxClassName} ${disabled && "opacity-40"}`}
                style={{ gap: 15 }}
              >
                {IconLeft && <IconLeft />}

                <TextInput
                  className={`flex-1 py-1 font-regularFont text-lg text-default ${inputClassName}`}
                  value={value}
                  onChangeText={(text) => {
                    const value = handleChangeText
                      ? handleChangeText(text)
                      : text;

                    onChange(value);
                  }}
                  onBlur={onBlur}
                  onSubmitEditing={handleFormSubmit}
                  secureTextEntry={secureTextEntry && isSecureHidden}
                  editable={!disabled}
                  {...props}
                />

                {secureTextEntry && (
                  <TouchableOpacity
                    className="items-center justify-center"
                    activeOpacity={0.7}
                    onPress={() => setIsSecureHidden(!isSecureHidden)}
                  >
                    <Ionicons
                      name={isSecureHidden ? "eye-off-outline" : "eye-outline"}
                      size={secureIconSize}
                      color={secureIconColor}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </>
        )}
      />

      <Text
        className={`text-sm text-red-600 opacity-0 ${validationError && "opacity-100"}`}
      >
        {validationError?.message}
      </Text>
    </View>
  );
}

function Checkbox({
  checked = false,
  title,
  onToggle,
  checkboxColor,
  iconColor,
}) {
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      className="flex-row items-center"
      style={{ gap: 8 }}
      onPress={() => onToggle(!checked)}
    >
      <View
        className={`h-5 w-5 items-center justify-center rounded-full border`}
        style={{
          backgroundColor: checked ? checkboxColor : "transparent",
          borderColor: checkboxColor,
        }}
      >
        {checked && (
          <Ionicons name="checkmark" size={16} color={iconColor || "white"} />
        )}
      </View>
      <Text className="font-boldFont text-default">{title}</Text>
    </Pressable>
  );
}

export function PickerInput({
  control,
  name,
  label,
  rules,
  labelClassName,
  containerClassName,
  inputBoxClassName,
  IconLeft,
  disabled = false,
  pickerItems = [],
  pickerItemsFont,
  pickerItemsColor,
  placeholder,
  validationError,
  ...props
}) {
  const [pickerFocused, setPickerFocused] = useState(false);

  return (
    <View className={containerClassName} style={{ gap: 6 }}>
      {label && (
        <Text className={`font-regularFont text-default/75 ${labelClassName}`}>
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            className={`flex-row items-center border-b border-default py-2 ${inputBoxClassName} ${disabled && "opacity-40"}`}
            style={{ gap: 15 }}
          >
            {IconLeft && <IconLeft />}

            <Picker
              selectedValue={value}
              onValueChange={onChange}
              enabled={!disabled}
              onBlur={() => {
                setPickerFocused(false);
                onBlur();
              }}
              onFocus={() => setPickerFocused(true)}
              style={{
                flex: 1,
                margin: -16, // Remove default picker padding: https://stackoverflow.com/a/73412764/18845418
              }}
              {...props}
            >
              <Picker.Item
                value={null}
                label={placeholder}
                enabled={!pickerFocused}
                color="#737373"
              />
              {pickerItems.map((item, index) => (
                <Picker.Item
                  key={`${item.value}-${index}`}
                  label={item.label}
                  value={item.value}
                  fontFamily={pickerItemsFont}
                  style={{ fontSize: 16, color: pickerItemsColor || "#000" }}
                />
              ))}
            </Picker>
          </View>
        )}
      />

      <Text
        className={`text-sm text-red-600 opacity-0 ${validationError && "opacity-100"}`}
      >
        {validationError?.message}
      </Text>
    </View>
  );
}
