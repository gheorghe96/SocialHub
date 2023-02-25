import React, { useState } from "react";
import { Text, Card, View, Button, Colors, Toast } from "react-native-ui-lib";
import TextInput from "../../components/input/TextInput";
import { styles } from "./styles";
import { ScreenProps } from "./types";

export default function LoginScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View flex-1 centerV>
      <Card paddingV-30 paddingH-20 marginH-20>
        <Text text50 marginB-20>
          Login
        </Text>

        <TextInput
          containerStyle={styles.input}
          placeholder="Email"
          value={email}
          onValueChange={setEmail}
          validate={["required", "email"]}
          validationMessage={["Field is required", "Email is invalid"]}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onValueChange={setPassword}
          validate={["required", "email"]}
          validationMessage={["Field is required", "Email is invalid"]}
        />

        <View row center marginT-20>
          <Text>{`Don't have an account?`}</Text>
          <Button
            onPress={() => navigation.navigate("RegisterScreen")}
            marginL-5
            label="Register"
            hyperlink
            linkColor={Colors.blue8}
          />
        </View>

        <View center marginT-20>
          <Button
            label={"Login"}
            size={Button.sizes.large}
            backgroundColor={Colors.blue8}
            enableShadow
          />
        </View>
      </Card>
    </View>
  );
}
