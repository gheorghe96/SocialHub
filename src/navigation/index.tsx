import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../MainScreen";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
