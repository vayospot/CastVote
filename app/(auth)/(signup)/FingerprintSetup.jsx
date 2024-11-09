import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import Toast from "react-native-toast-message";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";

export default function FingerprintSetup() {
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

  const handleFingerprintSetup = async () => {
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
          text1: "Fingerprint setup successful.",
        });
        setTimeout(() => {
          router.replace("/(tabs)");
          setIsRegistering(false);
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: "An error occurred. Try again.",
        });
      }
    } catch (error) {
      setIsRegistering(false);
      console.log(error);
    }
  };

  const handleProceedWithoutFingerprint = () => {
    Alert.alert(
      "Are You Sure?",
      "You won't be able to use fingerprint verification for voting.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Proceed", onPress: () => router.replace("/(auth)/(tabs)") },
      ],
      { cancelable: true },
    );
  };

  return (
    <View className="flex-1 bg-default px-6 pt-5" style={{ gap: 90 }}>
      <View className="items-center" style={{ gap: 30 }}>
        <Ionicons name="finger-print" size={100} color={Colors.primary} />

        <View style={{ gap: 10 }}>
          <Text className="text-center font-boldFont text-3xl text-default">
            Set Up Fingerprint
          </Text>
          <Text className="text-center font-regularFont text-lg text-default">
            Your fingerprint links directly to your voter ID for secure and
            authenticated voting.
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
              title="Proceed"
              className="bg-primary"
              onPress={handleFingerprintSetup}
              disabled={isRegistering}
              loading={isRegistering}
              loadingColor={Colors.background}
            />
          )}

          <TouchableOpacity
            className="mt-3 self-center"
            onPress={handleProceedWithoutFingerprint}
          >
            <Text className="font-regularFont text-default/80">
              Proceed without fingerprint
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
