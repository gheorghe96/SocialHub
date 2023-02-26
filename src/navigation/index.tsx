import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  LoginStackParamList,
  MainStackParamList,
  RootStackParamList,
  TabsStackParamsList,
} from "./types";

import MainScreen from "../screens/Main/MainScreen";
import SettingsScreen from "../screens/Settings/SettingsScree";
import { useAppContext } from "../hooks/useAppContext";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import PostScreen from "../screens/Post/Post";

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

const TabsStack = createMaterialBottomTabNavigator<TabsStackParamsList>();
function TabsNavigator() {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen name="MainScreen" component={MainScreen} />
      <TabsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </TabsStack.Navigator>
  );
}

const MainStack = createNativeStackNavigator<MainStackParamList>();
function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="TabsNavigator"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="TabsNavigator" component={TabsNavigator} />
      <MainStack.Screen name="LoginStack" component={AuthNavigator} />
    </MainStack.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  const { user } = useAppContext();

  if (!user) {
    return <AuthNavigator />;
  }

  return (
    <Stack.Navigator
      initialRouteName="MainNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
