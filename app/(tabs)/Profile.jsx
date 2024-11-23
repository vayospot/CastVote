import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const MENU_ITEMS = [
  // individual routes to be added
  { icon: "settings-sharp", title: "Settings", route: "" },
  {
    icon: "lock-closed",
    title: "Change password",
    route: "",
  },
  {
    icon: "finger-print",
    title: "Verify Fingerprint",
    route: "",
  },
  {
    icon: "shield-checkmark",
    title: "Privacy Policy",
    route: "",
  },
  {
    icon: "document-text",
    title: "Terms & Conditions",
    route: "",
  },
  { icon: "help-circle", title: "Help", route: "" },
  { icon: "power", title: "Logout", route: "" },
];

export default function Profile() {
  return (
    <View className="flex-1" style={{ gap: 20 }}>
      <Text className="font-boldFont text-2xl text-default">Profile</Text>

      <Link href={"/(screens)/EditProfile"} asChild>
        <TouchableOpacity
          className="flex-row rounded-xl bg-white px-4 py-7"
          style={{ gap: 20 }}
          activeOpacity={0.5}
        >
          <Ionicons name="person" size={24} color={Colors.text} />
          <View className="flex-1" style={{ gap: 5 }}>
            <Text className="font-boldFont text-lg text-default">
              Personal details
            </Text>
            <Text className="text-sm text-subtle">
              Update your personal details to keep your account secure.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={Colors.text} />
        </TouchableOpacity>
      </Link>

      <View className="rounded-xl bg-white px-4 py-7" style={{ gap: 30 }}>
        {MENU_ITEMS.map((item, index) => (
          <Link key={index} href={item.route} asChild>
            <TouchableOpacity
              className="flex-row items-center"
              activeOpacity={0.5}
              style={{ gap: 20 }}
            >
              <Ionicons name={item.icon} size={24} color={Colors.text} />
              <Text className="flex-1 font-boldFont text-lg text-default">
                {item.title}
              </Text>
              <Ionicons name="chevron-forward" size={24} color={Colors.text} />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}
