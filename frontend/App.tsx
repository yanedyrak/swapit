import { TabNavigation } from "./src/widgets/TabNavigation";
import { AuthProvider } from "./src/shared/providers/AuthContext";

import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <TabNavigation />
        {/* <AuthStack /> */}
      </NavigationContainer>
    </AuthProvider>
  );
}

// TODO: add loading screen
