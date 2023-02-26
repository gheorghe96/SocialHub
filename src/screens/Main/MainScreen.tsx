import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { ScreenProps } from "./types";

export default function MainScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {

  useEffect(() => {
    // navigation.navigate("PostScreen")
  }, [])
  
  return (
    <View useSafeArea>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
