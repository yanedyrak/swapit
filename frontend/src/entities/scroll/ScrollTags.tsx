import { ScrollView, View, Text } from "react-native";
import { Icon } from "../../shared/Icon";

export const ScrollTags = () => {
  return (
    <ScrollView
      className="p-3"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex flex-row items-center justify-center">
        <Icon name="House" color="white" size={18} />
        <Text className="text-white text-sm ml-1">Недвижимость</Text>
      </View>
      <View className="ml-6 flex flex-row items-center justify-center">
        <Icon name="House" color="white" size={18} />
        <Text className="text-white text-sm ml-1">Недвижимость</Text>
      </View>
      <View className="ml-6 flex flex-row items-center justify-center">
        <Icon name="House" color="white" size={18} />
        <Text className="text-white text-sm ml-1">Недвижимость</Text>
      </View>
      <View className="ml-6 flex flex-row items-center justify-center">
        <Icon name="House" color="white" size={18} />
        <Text className="text-white text-sm ml-1">Недвижимость</Text>
      </View>
      <View className="mx-6 flex flex-row items-center justify-center">
        <Icon name="House" color="white" size={18} />
        <Text className="text-white text-sm ml-1">Недвижимость</Text>
      </View>
    </ScrollView>
  );
};
