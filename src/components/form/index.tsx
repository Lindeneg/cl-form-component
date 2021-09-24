import {
  useForm,
  FormEntryConstraint as ClFormEntryConstraint,
  InputValueType,
  Inputs,
  GetInputOptions,
} from "cl-use-form-state";
import { Checkbox, CheckboxProps } from "../checkbox";
import { Input, InputProps } from "../input";
import { Radio, RadioProps } from "../radio";
import { Select, SelectProps, SelectTypeConstraint } from "../select";
import { Switch, SwitchProps } from "../switch";

export type FormElementConstraint =
  | "checkbox"
  | "input"
  | "radio"
  | "select"
  | "switch";

export type FormEntryConstraint = {
  [key: string]: { type: InputValueType; element: FormElementConstraint };
};

export type FormElementProps<T extends FormElementConstraint> = Omit<
  T extends "checkbox"
    ? CheckboxProps
    : T extends "input"
    ? InputProps
    : T extends "radio"
    ? RadioProps
    : T extends "select"
    ? SelectProps<SelectTypeConstraint>
    : T extends "switch"
    ? SwitchProps
    : Record<string, unknown>,
  "value"
>;

export type FormElement<
  T extends ClFormEntryConstraint,
  K extends InputValueType,
  P extends FormElementConstraint
> = {
  value: K;
  options?: GetInputOptions<K, T>;
} & FormElementProps<P>;

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: FormElement<
    { T: T[K]["type"] },
    T[K]["type"],
    T[K]["element"]
  >;
};

export type FormProps<T extends FormEntryConstraint> = {
  data: Entries<T>;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  formClass?: string;
  formStyle?: React.CSSProperties;
};

export function Form<T extends FormEntryConstraint>({
  wrapperClass,
  wrapperStyle,
  formClass,
  formStyle,
}: FormProps<T>) {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <form className={formClass} style={formStyle}></form>
    </div>
  );
}
