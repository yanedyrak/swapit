import React from "react";
import { TextInput, View } from "react-native";
import { Icon } from "../shared/Icon";

export const SearchAndCart = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View className="px-5 pb-2 flex flex-row items-center">
      {/* Search Input Container */}
      <View className="flex flex-row items-center justify-center px-4 rounded-3xl bg-zinc-800 flex-1 mr-5">
        <Icon
          name="Search"
          color={search.length > 0 ? "white" : undefined}
          size={20}
        />
        <TextInput
          placeholder="Поиск в Рязани"
          className="ml-3 text-white flex-1 text-base h-12"
          placeholderTextColor="#52525b"
          value={search}
          onChangeText={setSearch}
        />
        <Icon name="Settings2" color="white" size={20} />
      </View>

      {/* Shopping Cart Icon */}
      <Icon name="ShoppingCart" color="white" className="shrink-0" />
    </View>
  );
};
