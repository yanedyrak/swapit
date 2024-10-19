import { View, Text } from "react-native";

export const History = () => {
  return (
    <View className="flex gap-1 items-center w-20 m-4">
      <View className="border-[3px] border-red-500 rounded-full">
        <View className="h-20 w-20 rounded-full bg-slate-400 border-black border-2 "></View>
      </View>
      <Text className="text-white text-center text-xs">Спасите киносъемки</Text>
    </View>
  );
};
