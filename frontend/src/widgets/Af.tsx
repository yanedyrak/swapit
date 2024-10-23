import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./TabNavigation";
import { AuthStack } from "../../AuthStack";

import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../shared/providers/AuthContext";
import { useAuth } from "../shared/hooks/useAuth";

export const Af = observer(() => {
  const { userToken } = useAuth();
  return (
    <NavigationContainer>
      {userToken.length > 0 ? <TabNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
});
