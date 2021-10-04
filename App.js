import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import useFirstStorage from "./app/hooks/useFirstStorage";
import StorageContext from "./app/storage/context";
import OfflineNotice from "./app/components/OfflineNotice";
import "react-native-get-random-values";
//see storage showAsyncStorageContentInDev()

export default function App() {
  const { storageDB, setStorageDB } = useFirstStorage();

  return (
    <StorageContext.Provider value={{ storageDB, setStorageDB }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </StorageContext.Provider>
  );
}
