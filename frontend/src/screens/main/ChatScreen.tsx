import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SearchAndBlackList } from "../../entities/search/SearchAndBlackList";
import ChatPreview from "../../entities/ChatPreview";

export const ChatScreen = () => {
  return (
    <View className="flex flex-1 bg-zinc-900">
      <SafeAreaView>
        <View className="mb-2">
          <SearchAndBlackList />
          <View className="flex flex-row px-5 mt-2">
            <TouchableOpacity>
              <View className="px-3 py-2 bg-zinc-800 rounded-3xl">
                <Text className=" text-white text-sm">Все чаты</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="ml-2">
              <View className="px-3 py-2 bg-zinc-800 rounded-3xl">
                <Text className=" text-white text-sm">Отметки</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="p-5">
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
          <ChatPreview />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
