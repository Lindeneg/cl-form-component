import React from "react";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import InputLabel, { InputLabelProps } from "@material-ui/core/InputLabel";
import FormHelperText, {
  FormHelperTextProps,
} from "@material-ui/core/FormHelperText";
import { CSSProperties } from "@material-ui/styles";

export type SharedProps = {
  id: string;
  label: string;
  value: unknown;
  required?: boolean;
  disabled?: boolean;
  valid?: boolean;
  error?: boolean;
  validEl?: string | React.ReactElement;
  errorEl?: string | React.ReactElement;
  helperEl?: string | React.ReactElement;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  adornment?: {
    start?: React.ReactElement | null;
    end?: React.ReactElement | null;
  };
  muiFormControlOpts?: Omit<
    FormControlProps,
    "disabled" | "error" | "required"
  >;
  muiInputLabelOpts?: Omit<InputLabelProps, "htmlFor">;
  muiFormHelperTextOpts?: FormHelperTextProps;
};

type SharedMetaProps = Omit<SharedProps, "id" | "value" | "adornment"> & {
  children: React.ReactElement;
};

export function Shared({
  label,
  children,
  validEl,
  errorEl,
  helperEl = "",
  required = false,
  disabled = false,
  valid = false,
  error = false,
  wrapperStyle = {},
  wrapperClass = "",
  ...rest
}: SharedMetaProps) {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <FormControl
        {...rest.muiFormControlOpts}
        disabled={disabled}
        error={error}
        required={required}
      >
        <InputLabel
          {...rest.muiInputLabelOpts}
          htmlFor={`cl-form-component-${label}`}
        >
          {label}
        </InputLabel>
        {children}
        <FormHelperText {...rest.muiFormHelperTextOpts}>
          {error && errorEl ? errorEl : valid && validEl ? validEl : helperEl}
        </FormHelperText>
      </FormControl>
    </div>
  );
}
