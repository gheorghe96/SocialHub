import React, { useState } from "react";
import { Text, Card, View, Button, Colors } from "react-native-ui-lib";
import TextInput from "../../components/input/TextInput";
import { styles } from "./styles";
import { ScreenProps } from "./types";

export default function RegisterScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <View flex-1 centerV>
      <Card paddingV-30 paddingH-20 marginH-20>
        <Text text50 marginB-20>
          Register
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
          containerStyle={styles.input}
          placeholder="Password"
          value={password}
          onValueChange={setPassword}
          validate={["required", "email"]}
          validationMessage={["Field is required", "Email is invalid"]}
        />
        <TextInput
          containerStyle={styles.input}
          placeholder="Confirm password"
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          validate={["required", "email"]}
          validationMessage={["Field is required", "Email is invalid"]}
        />
        <View row center marginT-20>
          <Text>{`Already have an account?`}</Text>
          <Button
            onPress={() => navigation.goBack()}
            marginL-5
            label="Login"
            hyperlink
            linkColor={Colors.blue8}
          />
        </View>
        <View center marginT-20>
          <Button
            label={"Register"}
            size={Button.sizes.large}
            backgroundColor={Colors.blue8}
            enableShadow
          />
        </View>
      </Card>
    </View>
  );
}
