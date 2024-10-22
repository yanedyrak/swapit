import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AdPreview from "../../entities/AdPreview";

export const AdScreen = () => {
  return (
    <View className="flex flex-1 bg-zinc-900">
      <SafeAreaView>
        <Text className="text-center text-lg font-bold text-white">
          Мои объявления
        </Text>
        <View className="m-5 mt-2 h-28 bg-blue-500 rounded-xl flex justify-center">
          <View className="pl-5">
            <Text className="text-white font-bold text-2xl">3500₽</Text>
            <Text className=" text-white text-base">принесли обмены</Text>
          </View>
        </View>
        <View className="flex flex-row m-5 border-b-[1px] border-zinc-500">
          <View className="max-w-min px-2 border-b-2 border-white">
            <Text className="text-base text-white font-bold">Архив</Text>
            <Text className="text-sm font-bold text-zinc-500 absolute -top-1 -right-1">
              2
            </Text>
          </View>
        </View>
        <View className="p-5">
          <AdPreview />
          <AdPreview />
          <AdPreview />
        </View>
      </SafeAreaView>
    </View>
  );
};
