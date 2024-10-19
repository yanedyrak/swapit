import { View, Text } from "react-native";

import { Icon } from "../shared/Icon";

export const ItemPreview = () => {
  return (
    <View className="w-40 overflow-hidden">
      <View className="h-40 w-40 rounded-xl bg-zinc-600" />
      <View className="flex flex-row justify-between mt-2">
        <View className="flex flex-1">
          <Text className="text-white text-sm">
            Кровать богатая супер дупер супер
          </Text>
          <Text
            numberOfLines={1}
            className="text-zinc-500 text-xs mt-2 whitespace-nowrap text-ellipsis"
          >
            Санкт-Петербург, Обводный район
          </Text>
        </View>
        <View className="flex justify-start  flex-shrink-0">
          <Icon name="Heart" color="white" size={18} />
          <Icon name="Ellipsis" color="gray" size={18} />
        </View>
      </View>
    </View>
  );
};
