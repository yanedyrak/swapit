import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Icon } from "../../shared/Icon";
import LinkIntoProfile from "../../shared/LinkIntoProfile";

import { useAuth } from "../../shared/hooks/useAuth";

import { ProfileHead } from "../../widgets/profile/ProfileHead";

export const ProfileScreen = () => {
  const { logout } = useAuth();
  return (
    <View className="flex flex-1 bg-black">
      <SafeAreaView className=" bg-zinc-900">
        <View className="flex flex-row justify-between px-5 pb-3 bg-zinc-900">
          <View className="flex flex-row">
            <View className="mr-5">
              <Icon name="Share" color="white" size={22} />
            </View>
            <Icon name="Bolt" color="#18181b" size={22} />
          </View>
          <Text className="text-base text-white font-bold">Профиль</Text>
          <View className="flex flex-row items-center">
            <View className="mr-5">
              <Icon name="Bell" filled color="white" size={22} />
            </View>
            <Icon name="Bolt" color="white" size={22} />
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        <ProfileHead />
        <View className="flex flex-row justify-between items-center px-5 py-3 bg-zinc-900 border-b-[1px] border-zinc-700">
          <View className="flex flex-row items-center">
            <Icon name="Scroll" color="#71717a" size={20} />
            <View className="ml-2">
              <Text className="text-sm text-white">Заказы </Text>
              <Text className="text-xs text-zinc-500">1 завершенный</Text>
            </View>
          </View>
          <Icon name="ChevronRight" color="#71717a" />
        </View>
        <View className="my-2">
          <LinkIntoProfile title="Тариф" description="Решения для бизнеса" />
          <LinkIntoProfile
            title="Пакеты контактов"
            description="Для тех, кто перепродает авто"
          />
        </View>
        <View className="mb-2">
          <LinkIntoProfile
            title="Спецпредложения"
            description="Нет активных или запланированных"
          />
        </View>
        <View className="mb-2">
          <LinkIntoProfile
            title="Социальные сети"
            description="Нет привязанных аккаунтов"
          />
        </View>
        <View className="mb-2">
          <LinkIntoProfile
            title="SwapIt доставка"
            description="В пункт выдачи и курьером"
          />
        </View>
        <View className="mb-2">
          <LinkIntoProfile
            title="Поиск работы"
            description="У вас пока нет резюме"
          />
        </View>
        <TouchableOpacity className="flex flex-row justify-center items-center px-5 py-4 bg-zinc-900 border-b-[1px] border-zinc-700 mb-2">
          <Text className="text-blue-500">Изменить пароль</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-center items-center px-5 py-4 bg-zinc-900 border-b-[1px] border-zinc-700 mb-7"
          onPress={() => logout()}
        >
          <Text className="text-blue-500">Выйти</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
