import { View, Text } from "react-native";
import React from "react";

const ChatPreview = () => {
  return (
    <View className="mb-5 flex flex-row justify-between">
      <View className="flex flex-row">
        <View className="h-12 w-14 rounded-xl bg-zinc-600 mt-1"></View>
        <View className="ml-3">
          <Text className="text-white text-base font-bold ">Юрий</Text>
          <Text className="text-white text-sm">Gtx 550 ti</Text>
          <Text className="text-zinc-500 text-sm">Совершенно не потянет </Text>
        </View>
      </View>
      <View>
        <Text className="text-zinc-500 text-sm">10 января 2022</Text>
      </View>
    </View>
  );
};

export default ChatPreview;
