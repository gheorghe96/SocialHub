import {
  CompositeNavigationProp,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { RootStackParamList, TabsStackParamList } from "../../navigation/types";

export type ScreenProps = {
  route: RouteProp<TabsStackParamList>;
  navigation: CompositeNavigationProp<
    NavigationProp<TabsStackParamList, "Home">,
    NavigationProp<RootStackParamList, "PostScreen">
  >;
};
