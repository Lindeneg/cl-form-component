import React from "react";
import MaterialInput, {
  InputProps as MaterialInputProps,
} from "@material-ui/core/Input";
import MaterialFilledInput, {
  FilledInputProps as MaterialFilledInputProps,
} from "@material-ui/core/FilledInput";
import MaterialOutlinedInput, {
  OutlinedInputProps as MaterialOutlinedInputProps,
} from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Shared,
  SharedProps,
  ExcludeProps,
  ExcludeSharedKeys,
  InputLabelOpts,
  AdornmentOpts,
} from "../Shared";

type InputHTMLElementConstraint = HTMLInputElement | HTMLTextAreaElement;
type InputElement = "standard" | "filled" | "outlined";

export interface InputProps<T extends InputElement = InputElement>
  extends SharedProps,
    InputLabelOpts {
  onInputChange: React.ChangeEventHandler<InputHTMLElementConstraint>;
  onInputBlur?: React.FocusEventHandler<InputHTMLElementConstraint>;
  element?: T;
  adornment?: AdornmentOpts;
  type?:
    | "text"
    | "number"
    | "password"
    | "color"
    | "date"
    | "datetime-local"
    | "file"
    | "month"
    | "week"
    | "range"
    | "search"
    | "tel"
    | "time"
    | "url"
    | "email";
  multiline?: boolean;
  minRows?: string | number;
  maxRows?: string | number;
  placeholder?: string;
  muiInputProps?: ExcludeProps<
    T extends "filled"
      ? MaterialFilledInputProps
      : T extends "outlined"
      ? MaterialOutlinedInputProps
      : T extends "standard"
      ? MaterialInputProps
      : Record<string, unknown>,
    | "type"
    | "placeholder"
    | "endAdornment"
    | "startAdornment"
    | "multiline"
    | "minRows"
    | "maxRows"
  >;
}

export type InputFormProps = ExcludeProps<
  InputProps,
  "onInputChange" | "onInputBlur" | ExcludeSharedKeys,
  "omit"
>;

export function Input<T extends InputElement>({
  id,
  value,
  onInputChange,
  onInputBlur,
  placeholder,
  minRows,
  maxRows,
  element,
  label = "",
  type = "text",
  fullWidth = false,
  multiline = false,
  muiInputProps = {},
  muiInputLabelOpts = {},
  adornment = {
    start: null,
    end: null,
  },
  ...sharedProps
}: InputProps<T>) {
  const props = {
    ...muiInputProps,
    id,
    type,
    multiline,
    minRows,
    maxRows,
    placeholder,
    value,
    fullWidth,
    onChange: onInputChange,
    onBlur: onInputBlur,
    endAdornment: adornment?.end ? (
      <InputAdornment position="end">{adornment.end}</InputAdornment>
    ) : undefined,
    startAdornment: adornment?.start ? (
      <InputAdornment position="start">{adornment.start}</InputAdornment>
    ) : undefined,
  };
  let jsx: React.ReactElement;
  switch (element) {
    case "outlined":
      jsx = <MaterialOutlinedInput {...props} />;
      break;
    case "filled":
      jsx = <MaterialFilledInput {...props} />;
      break;
    default:
      jsx = <MaterialInput {...props} />;
      break;
  }
  return (
    <Shared
      {...sharedProps}
      labelEl={<InputLabel {...muiInputLabelOpts}>{label}</InputLabel>}
      fullWidth={fullWidth}
    >
      {jsx}
    </Shared>
  );
}
