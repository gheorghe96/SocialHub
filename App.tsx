import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { ContextProvider } from "./src/hooks/useAppContext";

function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <RootNavigator />
      </ContextProvider>
    </NavigationContainer>
  );
}

export default App;
