import { TouchableOpacity, View, Text, Image } from "react-native";

import { LoginPageSVG } from "../../shared/svg/LoginPageSVG";

export const AuthScreen = ({ navigation }) => {
  return (
    <View className="flex flex-1 bg-zinc-900 justify-around items-center">
      <Text className="text-4xl font-bold mt-10 text-white">
        Swap<Text className="text-4xl text-blue-500">It</Text>
      </Text>
      <LoginPageSVG />
      <View className="w-full">
        <TouchableOpacity
          className="w-full"
          onPress={() => navigation.navigate("Login")}
        >
          <View className="p-3 mx-10 bg-blue-400 rounded-xl">
            <Text className="text-center text-white">
              Войти через почту или имя
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full mt-3"
          onPress={() => navigation.navigate("Register")}
        >
          <View className="p-3 mx-10 bg-blue-900 rounded-xl">
            <Text className="text-center text-blue-300">
              Зарегестрироваться
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
