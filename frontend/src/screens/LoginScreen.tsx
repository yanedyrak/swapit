import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from "../shared/Icon";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-1 bg-zinc-900 justify-center items-center">
      <View className="rotate-12">
        <Icon name="BaggageClaim" color="#3b82f6" size={300} />
      </View>
      <View className="w-full mt-20">
        <TouchableOpacity
          className="w-full"
          onPress={() => navigation.navigate("Log")}
        >
          <View className="p-3 mx-10 bg-blue-400 rounded-xl">
            <Text className="text-center text-white">
              Войти через почту или имя
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-full mt-3">
          <View className="p-3 mx-10 bg-blue-900 rounded-xl">
            <Text className="text-center text-blue-300">
              Войти через почту или имя
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
