import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import Toast from "react-native-toast-message";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

export default function Fingerprint({
  title,
  subtitle,
  buttonText,
  required = false,
  onsubmit,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasFingerprint, setHasFingerprint] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    checkFingerprintHardware();
  }, []);

  const checkFingerprintHardware = async () => {
    setIsLoading(true);
    try {
      const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      setHasFingerprint(
        hasBiometrics &&
          supportedTypes.includes(
            LocalAuthentication.AuthenticationType.FINGERPRINT,
          ),
      );
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Fingerprint setup failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFingerprintSubmit = async () => {
    setIsRegistering(true);

    try {
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      const enrolledLevel = await LocalAuthentication.getEnrolledLevelAsync();

      if (!isEnrolled || enrolledLevel !== 3) {
        Toast.show({
          type: "error",
          text1: "No fingerprint found.",
          text2: "Please register one in your device settings.",
        });
        return;
      }

      const authResult = await LocalAuthentication.authenticateAsync({
        promptMessage: "Fingerprint Authentication",
        cancelLabel: "Cancel",
        disableDeviceFallback: true,
      });

      if (authResult.success) {
        Toast.show({
          type: "success",
          text1: "Fingerprint verified successfully.",
        });
        await onsubmit();
      } else {
        Toast.show({
          type: "error",
          text1: "An error occurred. Try again.",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleProceedWithoutFingerprint = () => {
    Alert.alert(
      "Are You Sure?",
      "You won't be able to use fingerprint verification for voting.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Proceed",
          onPress: async () => {
            setIsLoading(true);
            try {
              await onsubmit();
            } catch (error) {
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View className="flex-1" style={{ gap: 90 }}>
      <View className="items-center" style={{ gap: 30 }}>
        <Ionicons name="finger-print" size={100} color={Colors.primary} />

        <View style={{ gap: 10 }}>
          <Text className="text-center font-boldFont text-3xl text-default">
            {title}
          </Text>
          <Text className="text-center font-regularFont text-lg text-default">
            {subtitle}
          </Text>
        </View>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <View>
          {!hasFingerprint ? (
            <Text className="text-center font-boldFont text-2xl text-red-600">
              Device Incompatible. Fingerprint Required.
            </Text>
          ) : (
            <CustomButton
              title={buttonText || "Verify"}
              className="bg-primary"
              onPress={handleFingerprintSubmit}
              disabled={isRegistering}
              loading={isRegistering}
              loadingColor={Colors.background}
            />
          )}

          {!required && (
            <TouchableOpacity
              className="mt-3 self-center"
              onPress={handleProceedWithoutFingerprint}
            >
              <Text className="font-regularFont text-default/80">
                Proceed without fingerprint
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
