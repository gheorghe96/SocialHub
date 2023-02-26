import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, Colors } from "react-native-ui-lib";
import { ScreenProps } from "./types";

export default function PostScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  return (
    <View useSafeArea>
      <View left margin-10>
        <Button
          onPress={() => navigation.goBack()}
          label={"Back"}
          size={Button.sizes.medium}
          backgroundColor={Colors.red30}
        />
      </View>
      <Text>Post Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
