import { View, Text } from "react-native";
import React from "react";
import { Icon } from "../shared/Icon";

const AdPreview = () => {
  return (
    <View className="mb-5 flex flex-row justify-between">
      <View className="flex flex-row ">
        <View className="w-20 h-16 bg-gray-50 rounded-xl"></View>
        <View className="ml-2">
          <Text className="text-base font-bold text-white">2500₽</Text>
          <Text className="text-xs text-white">
            Tom Clancy's Rainbow Six Siege
          </Text>
        </View>
      </View>
      <Icon name="Pencil" color="white" size={16} />
    </View>
  );
};

export default AdPreview;
