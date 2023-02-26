import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { TabsStackParamsList } from "../../navigation/types";

export type ScreenProps = {
  route: RouteProp<TabsStackParamsList>;
  navigation: NavigationProp<TabsStackParamsList>;
};
