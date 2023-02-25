import React from "react";
import { TextField } from "react-native-ui-lib";
import { styles } from "./styles";
import { Props } from "./types";

export default function TextInput(props: Props): JSX.Element {
  const {
    inputRef,
    value,
    onValueChange,
    placeholder,
    validate,
    validationMessage,
    maxLength,
    validateOnBlur,
    containerStyle,
    secureTextEntry,
  } = props;

  return (
    <TextField
      ref={inputRef}
      containerStyle={[styles.container]}
      fieldStyle={styles.fieldStyle}
      value={value}
      placeholder={placeholder}
      floatingPlaceholder={false}
      onChangeText={onValueChange}
      enableErrors={Boolean(validate)}
      validate={validate}
      validationMessage={validationMessage}
      showCharCounter={Boolean(maxLength)}
      maxLength={maxLength}
      validateOnBlur={validateOnBlur}
      secureTextEntry={secureTextEntry}
    />
  );
}
