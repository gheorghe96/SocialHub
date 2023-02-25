import { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
  FieldContextType,
  Validator,
} from "react-native-ui-lib/src/incubator/TextField/types";

export type Props = {
  inputRef?: MutableRefObject<FieldContextType | undefined>
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  placeholder?: string | undefined;
  validate?: Validator | Validator[] | undefined;
  validationMessage?: string[] | undefined;
  maxLength?: number;
  validateOnBlur?: boolean;
  containerStyle?: any;
  secureTextEntry?: boolean;
};
