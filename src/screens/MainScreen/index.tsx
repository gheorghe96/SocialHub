import React from "react";
import { StyleSheet, Text } from "react-native";
import { useAppContext } from "../../hooks/useAppContext";
import { ScreenProps } from "./types";

export default function MainScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const { user } = useAppContext();
  return <Text>Main Screen</Text>;
}

const styles = StyleSheet.create({});
