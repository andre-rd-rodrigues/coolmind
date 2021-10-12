import React, { useState, useEffect } from "react";
import useFirstStorage from "../hooks/useFirstStorage";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../navigation/rootNavigation";
import AppNavigator from "../navigation/AppNavigator";
import navigationTheme from "../navigation/navigationTheme";
import WelcomeScreen from "../screens/WelcomeScreen";
import ActivityIndicator from "./AppActivityIndicator";

const AppLoad = () => {
  const { walkthrough } = useFirstStorage();

  const [welcome, setWelcome] = useState(undefined);

  useEffect(() => {
    setWelcome(walkthrough);
  }, [walkthrough]);

  if (welcome === undefined) {
    return <ActivityIndicator size="large" />;
  } else if (welcome) {
    return <WelcomeScreen startClicked={() => setWelcome(false)} />;
  } else {
    return (
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    );
  }
};

export default AppLoad;
