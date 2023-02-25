import React from "react";
import { StyleSheet } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";
import { View, Text } from "react-native-ui-lib";
import { ScreenProps } from "./types";

export default function MainScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const { user } = useAppContext();
  return (
    <View useSafeArea>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
