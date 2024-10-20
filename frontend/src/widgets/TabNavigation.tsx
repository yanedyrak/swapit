import { ProfileScreen } from "../screens/ProfileScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { AdScreen } from "../screens/AdScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../shared/Icon";
import { icons } from "lucide-react-native";

const Tab = createBottomTabNavigator();

// Type for icon names based on the available icons in lucide-react-native
type IconName = keyof typeof icons;

// Constants for tab screen options
const screenOptions = ({ name }: { name: IconName }) => ({
  tabBarIcon: ({
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) => <Icon name={name} color={color} size={size} filled={focused} />,
});

export const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#27272a",
        borderTopWidth: 0,
      },
    }}
  >
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={screenOptions({ name: "User" })}
    />
    <Tab.Screen
      name="Home"
      component={AdScreen}
      options={screenOptions({ name: "House" })}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={screenOptions({ name: "Search" })}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={screenOptions({ name: "MessageCircle" })}
    />
  </Tab.Navigator>
);
