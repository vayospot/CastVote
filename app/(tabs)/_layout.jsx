import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import BackButton from "@/components/BackButton";

function TabBarIcon({ name, size }) {
  return <Ionicons name={name} size={size} color={Colors.text} />;
}

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: Colors.background,
        paddingHorizontal: 24,
      }}
      screenOptions={{
        title: "",
        headerStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
        headerLeft: () => <BackButton />,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.background,
          // elevation: 0,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Stats"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabBarIcon
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TabBarIcon
              name={focused ? "id-card" : "id-card-outline"}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
