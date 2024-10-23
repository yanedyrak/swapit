import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { ScrollCategory } from "../../entities/scroll/ScrollCategory";
import { ScrollHistories } from "../../entities/scroll/ScrollHistories";
import { ScrollTags } from "../../entities/scroll/ScrollTags";
import { SearchAndCart } from "../../entities/search/SearchAndCart";
import { ItemPreview } from "../../entities/item/ItemPreview";

export const SearchScreen = () => {
  return (
    <SafeAreaView className="flex flex-grow bg-zinc-900">
      <SearchAndCart />
      <ScrollView className="px-4 flex-1">
        <ScrollTags />
        <ScrollCategory />
        <ScrollHistories />
        <View className=" mt-5 flex flex-row justify-between">
          <ItemPreview />

          <ItemPreview />
        </View>
        <View className=" mt-5 flex flex-row justify-between">
          <ItemPreview />

          <ItemPreview />
        </View>
        <View className=" mt-5 flex flex-row justify-between">
          <ItemPreview />

          <ItemPreview />
        </View>
        <View className=" mt-5 flex flex-row justify-between">
          <ItemPreview />

          <ItemPreview />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
