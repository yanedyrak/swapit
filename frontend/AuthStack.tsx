import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "./src/screens/auth/AuthScreen";
import { RegisterScreen } from "./src/screens/auth/RegisterScreen";
import { LoginScreen } from "./src/screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
