import { View } from "react-native";
import { Icon } from "../shared/Icon";

export const Navbar = () => {
  return (
    <View className="flex flex-row justify-around bg-zinc-800 pt-4 pb-10">
      <Icon name="Backpack" />
      <Icon name="Heart" filled />
      <Icon name="Newspaper" />
      <Icon name="MessageCircle" filled />
      <Icon name="User" filled />
    </View>
  );
};
