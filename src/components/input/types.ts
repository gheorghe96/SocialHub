import { Dispatch, SetStateAction } from "react";
import { Validator } from "react-native-ui-lib/src/incubator/TextField/types";

export type Props = {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  placeholder?: string | undefined;
  validate?: Validator | Validator[] | undefined;
  validationMessage?: string[] | undefined;
  maxLength?: number;
  validateOnBlur?: boolean
  containerStyle?: any
};
