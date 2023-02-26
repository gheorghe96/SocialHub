import {
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { LoginStackParamList } from "../../navigation/types";

export type ScreenProps = {
  route: RouteProp<LoginStackParamList>;
  navigation: NavigationProp<LoginStackParamList>;
};
