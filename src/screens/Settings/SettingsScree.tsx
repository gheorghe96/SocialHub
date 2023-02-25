import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScreenProps } from "./types";

export default function SettingsScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  return <Text>"Settings Screen"</Text>;
}

const styles = StyleSheet.create({});
