import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

/**
 * Button component with customizable styles and optional icons.
 *
 * @param {Object} props - Props for the button component.
 * @param {string} title - The title text for the button.
 * @param {React.Component} IconLeft - Component to render as the left icon (optional).
 * @param {React.Component} IconRight - Component to render as the right icon (optional).
 * @param {string} className - Additional className for styling with NativeWind.
 * @param {string} textclassName - Additional className for text styling.
 * @param {boolean} disabled - Disable button when true.
 * @param {boolean} loading - Show loading spinner when true.
 * @param {string} loadingText - Optional text to show while loading.
 * @param {string} loadingSize - Size of the loading spinner.
 * @param {string} loadingColor - Color of the loading spinner.
 * @param {Function} onPress - Function to call when the button is pressed.
 * @param {...any} props - Other props to be passed to TouchableOpacity.
 *
 * @returns {JSX.Element} A styled button with optional icons and title.
 */
export default function Button({
  title,
  IconLeft,
  IconRight,
  className = "",
  textclassName,
  disabled = false,
  loading = false,
  loadingText,
  loadingSize = "small",
  loadingColor,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity
      className={`w-full flex-row items-center justify-center rounded-2xl bg-black p-3 shadow-md shadow-neutral-400/70 ${className}`}
      disabled={disabled || loading}
      onPress={disabled || loading ? null : onPress}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <>
          <ActivityIndicator
            size={loadingSize}
            color={loadingColor || "gray"}
          />
          {loadingText && (
            <Text className={`ml-2 ${textclassName}`}>{loadingText}</Text>
          )}
        </>
      ) : (
        <>
          {IconLeft && <IconLeft />}
          <Text className={`text-lg text-white ${textclassName}`}>{title}</Text>
          {IconRight && <IconRight />}
        </>
      )}
    </TouchableOpacity>
  );
}
