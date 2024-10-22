import { ProfileScreen } from "../screens/main/ProfileScreen";
import { SearchScreen } from "../screens/main/SearchScreen";
import { ChatScreen } from "../screens/main/ChatScreen";
import { AdScreen } from "../screens/main/AdScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../shared/Icon";
import { icons } from "lucide-react-native";

const Tab = createBottomTabNavigator();

type IconName = keyof typeof icons;

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
      name="Поиск"
      component={SearchScreen}
      options={screenOptions({ name: "Search" })}
    />
    <Tab.Screen
      name="Избранное"
      component={AdScreen}
      options={screenOptions({ name: "Heart" })}
    />
    <Tab.Screen
      name="Объявления"
      component={AdScreen}
      options={screenOptions({ name: "Plus" })}
    />
    <Tab.Screen
      name="Сообщения"
      component={ChatScreen}
      options={screenOptions({ name: "MessageCircle" })}
    />
    <Tab.Screen
      name="Профиль"
      component={ProfileScreen}
      options={screenOptions({ name: "User" })}
    />
  </Tab.Navigator>
);
