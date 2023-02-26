import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import {
  AuthStackParamList,
  RootStackParamList,
  TabsStackParamList,
} from "./types";
import MainScreen from "../screens/Main/MainScreen";
import SettingsScreen from "../screens/Settings/SettingsScree";
import { useAppContext } from "../hooks/useAppContext";
import PostScreen from "../screens/Post/PostScreen";
import { getTabBarIcon } from "./utils";
import { Colors, View } from "react-native-ui-lib";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

const TabsStack = createMaterialBottomTabNavigator<TabsStackParamList>();
function TabsNavigator() {
  return (
    <TabsStack.Navigator
      barStyle={{ backgroundColor: Colors.white, height: 90 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = getTabBarIcon(route.name, focused);
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarLabel: "",
      })}
    >
      <TabsStack.Screen name="Home" component={MainScreen} />
      <TabsStack.Screen name="Settings" component={SettingsScreen} />
    </TabsStack.Navigator>
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
      initialRouteName="App"
      screenOptions={{ headerShown: false, presentation: "fullScreenModal" }}
    >
      <Stack.Screen name="App" component={TabsNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
