import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "../../shared/Icon";
import { authStore } from "../../shared/store/api/book-store/auth-store";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { baseInstance } from "../../shared/api/base";
import axios from "axios";
import { login } from "../../shared/api/auth/api";
import { AuthContext } from "../../shared/providers/AuthContext";
import { useAuth } from "../../shared/hooks/useAuth";

export const LoginScreen = observer(({ navigation }) => {
  const { login } = useAuth();
  const [{ email, password }, setData] = React.useState({
    email: "",
    password: "",
  });

  return (
    <View className="bg-zinc-900 flex flex-1 p-5">
      <View className="flex flex-1">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="X" color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-base text-blue-500">Забыли пароль?</Text>
        </View>
        <View className="mt-5">
          <Text className="text-3xl font-bold text-white">Вход</Text>
          <TextInput
            className="bg-zinc-800 px-5 h-12 rounded-lg mt-5 text-base text-white"
            placeholder="Почта"
            placeholderTextColor={"#52525b"}
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, email: text }))
            }
            value={email}
            autoCapitalize="none"
          />

          <TextInput
            className="bg-zinc-800 px-5 h-12 rounded-lg mt-3 text-base text-white"
            placeholder="Пароль"
            placeholderTextColor={"#52525b"}
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, password: text }))
            }
            value={password}
            autoCapitalize="none"
          />
        </View>
      </View>

      <TouchableOpacity
        className="bg-blue-500 px-5 h-12 rounded-lg mb-14 flex justify-center items-center"
        onPress={() => login({ email, password })}
      >
        <Text className="text-white text-base">Войти </Text>
      </TouchableOpacity>
    </View>
  );
});
