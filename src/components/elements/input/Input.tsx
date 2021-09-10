import React from "react";
import MaterialInput, {
  InputProps as MaterialInputProps,
} from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Shared, SharedProps } from "../Shared";

export type InputProps = SharedProps & {
  onInputChange: React.ChangeEventHandler;
  onInputBlur: React.FocusEventHandler;
  type?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  muiInputProps?: Omit<
    MaterialInputProps,
    | "id"
    | "type"
    | "placeholder"
    | "value"
    | "multiline"
    | "rows"
    | "onChange"
    | "onBlur"
    | "endAdornment"
    | "startAdornment"
  >;
};

export function Input({
  id,
  value,
  onInputChange,
  onInputBlur,
  rows,
  muiInputProps = {},
  multiline = false,
  type = "text",
  placeholder = "",
  adornment = {
    start: null,
    end: null,
  },
  ...sharedProps
}: InputProps) {
  return (
    <Shared {...sharedProps}>
      <MaterialInput
        {...muiInputProps}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        rows={rows}
        onChange={onInputChange}
        onBlur={onInputBlur}
        endAdornment={
          adornment?.end ? (
            <InputAdornment position="end">{adornment.end}</InputAdornment>
          ) : undefined
        }
        startAdornment={
          adornment?.start ? (
            <InputAdornment position="start">{adornment.start}</InputAdornment>
          ) : undefined
        }
      />
    </Shared>
  );
}
