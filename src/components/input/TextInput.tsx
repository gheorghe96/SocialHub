import React from "react";
import { TextField } from "react-native-ui-lib";
import { styles } from "./styles";
import { Props } from "./types";

export default function TextInput(props: Props): JSX.Element {
  const {
    value,
    onValueChange,
    placeholder,
    validate,
    validationMessage,
    maxLength,
    validateOnBlur,
    containerStyle
  } = props;

  return (
    <TextField
      containerStyle={[styles.container, containerStyle]}
      value={value}
      placeholder={placeholder}
      floatingPlaceholder={true}
      onChangeText={onValueChange}
      enableErrors={Boolean(validate)}
      validate={validate}
      validationMessage={validationMessage}
      showCharCounter={Boolean(maxLength)}
      maxLength={maxLength}
      validateOnBlur={validateOnBlur}
    />
  );
}
