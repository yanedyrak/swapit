import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Icon } from "../../shared/Icon";
import React, { useState } from "react";
import { useAuth } from "../../shared/hooks/useAuth";

export const RegisterScreen = ({ navigation }) => {
  const [{ username, email, password }, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { register } = useAuth();

  return (
    <View className="bg-zinc-900 flex flex-1 p-5">
      <View className="flex flex-1">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="X" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <Text className="text-3xl font-bold text-white">Регистрация</Text>
          <TextInput
            className="bg-zinc-800 px-5 h-12 rounded-lg mt-5 text-base text-white"
            placeholder="Имя"
            placeholderTextColor={"#52525b"}
            value={username}
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, username: text }))
            }
            autoCapitalize="none"
          />
          <TextInput
            className="bg-zinc-800 px-5 h-12 rounded-lg mt-3 text-base text-white"
            placeholder="Почта"
            placeholderTextColor={"#52525b"}
            value={email}
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, email: text }))
            }
            autoCapitalize="none"
          />
          <TextInput
            className="bg-zinc-800 px-5 h-12 rounded-lg mt-3 text-base text-white"
            placeholder="Пароль"
            placeholderTextColor={"#52525b"}
            value={password}
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, password: text }))
            }
            autoCapitalize="none"
          />
        </View>
      </View>
      <TouchableOpacity
        className="bg-blue-500 px-5 h-12 rounded-lg mb-14 flex justify-center items-center"
        onPress={() => register({ username, email, password })}
      >
        <Text className="text-white text-base">Зарегестрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};
