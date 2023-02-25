import React, { useRef, useState } from "react";
import {
  Text,
  Card,
  View,
  Button,
  Colors,
  FieldContextType,
  Checkbox,
} from "react-native-ui-lib";
import TextInput from "../../components/input/TextInput";
import { signUp } from "../../modules/auth";
import { styles } from "./styles";
import { ScreenProps } from "./types";
import { Alert, ScrollView } from "react-native";

export default function RegisterScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const emailInputRef = useRef<FieldContextType>();
  const passwordInputRef = useRef<FieldContextType>();
  const confirmPasswordInputRef = useRef<FieldContextType>();

  function onSignUpPress() {
    emailInputRef.current?.validate();
    passwordInputRef.current?.validate();
    confirmPasswordInputRef.current?.validate();

    if (
      emailInputRef.current?.isValid() &&
      passwordInputRef.current?.isValid() &&
      confirmPasswordInputRef.current?.isValid()
    )
      signUp(email, password).catch((error) => {
        console.log(error);
        Alert.alert("Notification", error);
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card paddingV-30 paddingH-20 marginH-20>
        <Text text50 marginB-20>
          Register
        </Text>

        <TextInput
          inputRef={emailInputRef}
          containerStyle={styles.input}
          placeholder="Email"
          value={email}
          onValueChange={setEmail}
          validate={["required", "email"]}
          validationMessage={["Email is required", "Email is invalid"]}
        />
        <TextInput
          inputRef={passwordInputRef}
          containerStyle={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onValueChange={setPassword}
          validate={["required", (value: string) => value == confirmPassword]}
          validationMessage={["Password is required", "Password does't match"]}
        />
        <TextInput
          inputRef={confirmPasswordInputRef}
          placeholder="Confirm password"
          secureTextEntry
          value={confirmPassword}
          onValueChange={setConfirmPassword}
          validate={["required", (value: string) => value == password]}
          validationMessage={["Confirm is required", "Password does't match"]}
        />

        <View marginL-10>
          <Checkbox
            value={!secureTextEntry}
            label="Show Password"
            onValueChange={(value: boolean) => setSecureTextEntry(!value)}
          />
        </View>

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
            onPress={() => onSignUpPress()}
            label={"Register"}
            size={Button.sizes.large}
            backgroundColor={Colors.blue8}
            enableShadow
          />
        </View>
      </Card>
    </ScrollView>
  );
}
