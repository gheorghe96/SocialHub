import { NavigationProp, RouteProp } from "@react-navigation/native";
import { MainStackParamList } from "../../navigation/types";

export type ScreenProps = {
  route: RouteProp<MainStackParamList>;
  navigation: NavigationProp<MainStackParamList>;
};
