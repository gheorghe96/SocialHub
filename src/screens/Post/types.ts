import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

export type ScreenProps = {
  route: RouteProp<RootStackParamList>;
  navigation: NavigationProp<RootStackParamList>;
};
