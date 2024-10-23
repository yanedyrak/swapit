import { View, Text } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

export const ProfileHead = () => {
  return (
    <View className="p-5 bg-zinc-900 mb-2 border-b-[1px] border-zinc-700">
      <View className="flex justify-center items-center h-20 w-20 bg-blue-400 rounded-full">
        <Text className="text-4xl text-white">😶‍🌫️</Text>
      </View>
      <View>
        <Text className="text-xl text-white font-bold mt-2">😶‍🌫️</Text>
        <Text className="text-sm text-white mt-[1px]">
          На swapIt с 2019 года
        </Text>
        <Text className="text-sm text-white mt-[1px]">Частное лицо</Text>
        <Text className="text-sm text-white mt-[2px]">
          Номер профиля 163 039 02
        </Text>
        <View className="flex flex-row items-center">
          <Text className="text-base text-white font-bold">0,0</Text>
          <View className="ml-2">
            <StarRatingDisplay rating={2.6} starSize={20} color="orange" />
          </View>
        </View>
        <Text className="text-sm text-blue-500 mt-3">Как получить рейтинг</Text>
      </View>
    </View>
  );
};
