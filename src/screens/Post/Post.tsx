import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { ScreenProps } from "./types";

export default function PostScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  return (
    <View useSafeArea>
      <Text>Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
