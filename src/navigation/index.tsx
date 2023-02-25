import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginStackParamList, RootStackParamList } from "./types";

import MainScreen from "../screens/Main/MainScreen";
import SettingsScreen from "../screens/Settings/SettingsScree";
import { useAppContext } from "../hooks/useAppContext";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
function AuthNavigator() {
  return (
    <LoginStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </LoginStack.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  const { user } = useAppContext();

  console.log("user", user);

  if (!user) {
    return <AuthNavigator />;
  }

  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="AuthStack" component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
