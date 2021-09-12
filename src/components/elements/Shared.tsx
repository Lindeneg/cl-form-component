import React from "react";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import FormHelperText, {
  FormHelperTextProps,
} from "@material-ui/core/FormHelperText";
import { CSSProperties } from "@material-ui/styles";

type ExcludeKeys = "id" | "value" | "onChange" | "onBlur" | "fullWidth";

export type Adornment = {
  start?: React.ReactElement | null;
  end?: React.ReactElement | null;
};

export type ExcludeProps<
  K extends Record<string, any>,
  T extends keyof K,
  M extends "omit" | "partial" = "partial"
> = M extends "partial"
  ? Partial<Omit<K, ExcludeKeys | T>>
  : Omit<K, ExcludeKeys | T>;

export type SharedProps = {
  id: string;
  value: unknown;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  valid?: boolean;
  error?: boolean;
  validEl?: string | React.ReactElement;
  errorEl?: string | React.ReactElement;
  helperEl?: string | React.ReactElement;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  muiFormControlOpts?: Omit<
    FormControlProps,
    "disabled" | "error" | "required" | "fullWidth"
  >;
  muiFormHelperTextOpts?: FormHelperTextProps;
};

type SharedMetaProps = Omit<SharedProps, "id" | "value" | "label"> & {
  labelEl: React.ReactElement;
  children: React.ReactElement;
};

export function Shared({
  children,
  validEl,
  errorEl,
  labelEl,
  fullWidth,
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
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        required={required}
      >
        {labelEl}
        {children}
        <FormHelperText {...rest.muiFormHelperTextOpts}>
          {error && errorEl ? errorEl : valid && validEl ? validEl : helperEl}
        </FormHelperText>
      </FormControl>
    </div>
  );
}
