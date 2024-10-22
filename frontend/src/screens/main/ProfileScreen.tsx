import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Icon } from "../../shared/Icon";
import LinkIntoProfile from "../../entities/LinkIntoProfile";
import { authStore } from "../../shared/store/api/book-store/auth-store";
import { useAuth } from "../../shared/hooks/useAuth";

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
        <View className="p-5 bg-zinc-900 mb-2 border-b-[1px] border-zinc-700">
          <View className="flex justify-center items-center h-20 w-20 bg-slate-400 rounded-full">
            <Text className="text-4xl text-white">И</Text>
          </View>
          <View>
            <Text className="text-xl text-white font-bold mt-2">Илья</Text>
            <Text className="text-sm text-white mt-[1px]">
              На swapIt с 2019 года
            </Text>
            <Text className="text-sm text-white mt-[1px]">Частное лицо</Text>
            <Text className="text-sm text-white mt-[2px]">
              Номер профиля 163 039 02
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-base text-white font-bold">0,0</Text>
              <View className="flex flex-row ml-2">
                <Icon name="Star" size={16} filled />
                <Icon name="Star" size={16} filled />
                <Icon name="Star" size={16} filled />
                <Icon name="Star" size={16} filled />
                <Icon name="Star" size={16} filled />
              </View>
            </View>
            <Text className="text-sm text-blue-500 mt-3">
              Как получить рейтинг
            </Text>
          </View>
        </View>
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
