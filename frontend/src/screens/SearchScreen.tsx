import { SafeAreaView, ScrollView, View } from "react-native";
import { ScrollCategory } from "../widgets/ScrollCategory";
import { ScrollHistories } from "../widgets/ScrollHistories";
import { ScrollTags } from "../widgets/ScrollTags";
import { SearchAndCart } from "../widgets/SearchAndCart";
import { ItemPreview } from "../widgets/ItemPreview";

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
