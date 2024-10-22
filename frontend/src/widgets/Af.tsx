import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./TabNavigation";
import { AuthStack } from "../../AuthStack";
import { authStore } from "../shared/store/api/book-store/auth-store";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../shared/providers/AuthContext";

export const Af = observer(() => {
  const { userToken } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userToken.length > 0 ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
});
