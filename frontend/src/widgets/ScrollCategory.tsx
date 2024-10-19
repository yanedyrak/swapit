import { ScrollView, View } from "react-native";

export const ScrollCategory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-wrap gap-2"
    >
      <View className="h-24 w-40 rounded-xl bg-zinc-600"></View>
      <View className="h-26 w-40 rounded-xl bg-zinc-600"></View>
      <View className="h-26 w-40 rounded-xl bg-zinc-600"></View>
      <View className="h-26 w-40 rounded-xl bg-zinc-600"></View>
    </ScrollView>
  );
};
