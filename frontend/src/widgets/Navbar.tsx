import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "../shared/Icon";
import { useNavigation } from "@react-navigation/native";

// Constant for navigation items
const NAV_ITEMS = [
  { name: "Backpack", text: "Поиск", route: "Search" },
  { name: "Newspaper", text: "Объявления", route: "Ad" },
  { name: "MessageCircle", text: "Сообщения", route: "Chat" },
  { name: "User", text: "Профиль", route: "Profile" },
];

export const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row justify-around bg-zinc-800 pt-4 pb-10">
      {NAV_ITEMS.map(({ name, text, route }, index) => (
        <TouchableOpacity
          key={name}
          className="flex items-center"
          onPress={() => navigation.navigate(route)}
        >
          {/* Icon with dynamic filling based on active route */}
          <Icon name={name} />
          {/* Text with dynamic color based on active route */}
          <Text className={`text-[10px] text-zinc-500`}>{pathname}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
