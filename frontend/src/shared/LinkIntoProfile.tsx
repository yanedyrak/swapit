import { View, Text } from "react-native";
import React from "react";
import { Icon } from "./Icon";

const LinkIntoProfile = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View className="flex flex-row justify-between items-center px-5 py-3 bg-zinc-900 border-b-[1px] border-zinc-700">
      <View>
        <Text className="text-sm text-white">{title}</Text>
        <Text className="text-xs text-zinc-500">{description}</Text>
      </View>

      <Icon name="ChevronRight" color="#71717a" />
    </View>
  );
};

export default LinkIntoProfile;
