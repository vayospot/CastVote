import { useRef, useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  onSearch,
  containerClassName,
  inputClassName,
  showIcon = true,
  iconSize = 20,
  iconColor = "#fff",
  ...props
}) {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = () => onSearch(searchQuery);
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => {
    setSearchQuery("");
    setIsInputFocused(false);
    inputRef.current?.blur();
  };

  return (
    <View
      className={`flex-row items-center rounded-full bg-neutral-300/30 px-4 py-1.5 ${containerClassName}`}
      style={{ gap: 10 }}
    >
      {showIcon && (
        <Ionicons name="search-outline" size={iconSize} color={iconColor} />
      )}

      <TextInput
        ref={inputRef}
        value={searchQuery}
        className={`flex-1 font-boldFont text-lg text-default ${inputClassName}`}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSubmit}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {isInputFocused && (
        <TouchableOpacity onPress={handleBlur}>
          <Ionicons name="close-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}
