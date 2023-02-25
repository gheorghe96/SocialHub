import {
    NavigationProp,
    ParamListBase,
    RouteProp,
  } from "@react-navigation/native";
  import { RootStackParamList } from "../../navigation/types";
  
  export type ScreenProps = {
    route: RouteProp<RootStackParamList, "LoginScreen">;
    navigation: NavigationProp<ParamListBase>;
  };