import { TabNavigation } from "./src/widgets/TabNavigation";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { authStore } from "./src/shared/store/api/book-store/auth-store";
import { Af } from "./src/widgets/Af";
import { AuthProvider } from "./src/shared/providers/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Af />
    </AuthProvider>
  );
}
