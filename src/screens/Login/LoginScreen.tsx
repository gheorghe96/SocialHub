import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Card,
  View,
  Button,
  Colors,
  LoaderScreen,
  FieldContextType,
  Checkbox,
} from "react-native-ui-lib";
import TextInput from "../../components/input/TextInput";
import { signIn } from "../../modules/auth";
import { styles } from "./styles";
import { ScreenProps } from "./types";
import { Alert, ScrollView } from "react-native";

export default function LoginScreen({
  route,
  navigation,
}: ScreenProps): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const emailInputRef = useRef<FieldContextType>();
  const passwordInputRef = useRef<FieldContextType>();

  function onLoginPress() {
    emailInputRef.current?.validate();
    passwordInputRef.current?.validate();

    if (
      emailInputRef.current?.isValid() &&
      passwordInputRef.current?.isValid()
    ) {
      signIn(email, password).catch((error) =>
        Alert.alert("Notification", error)
      );
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card paddingV-30 paddingH-20 marginH-20>
        <View row spread centerH marginB-20>
          <Text text50>Login</Text>
        </View>

        <TextInput
          inputRef={emailInputRef}
          placeholder="Email"
          value={email}
          onValueChange={setEmail}
          validate={["required", "email"]}
          validationMessage={["Email is required", "Email is invalid"]}
          validateOnBlur
        />

        <TextInput
          inputRef={passwordInputRef}
          placeholder="Password"
          value={password}
          onValueChange={setPassword}
          validate={["required"]}
          validationMessage={["Field is required"]}
          secureTextEntry={secureTextEntry}
          validateOnBlur
        />

        <View marginL-10>
          <Checkbox
            value={!secureTextEntry}
            label="Show Password"
            onValueChange={(value: boolean) => setSecureTextEntry(!value)}
          />
        </View>

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
            onPress={() => onLoginPress()}
            label={"Login"}
            size={Button.sizes.large}
            backgroundColor={Colors.blue8}
            enableShadow
          />
        </View>
      </Card>

      {loading && <LoaderScreen overlay color={Colors.grey40} />}
    </ScrollView>
  );
}
