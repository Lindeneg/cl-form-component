import React from "react";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import InputLabel, { InputLabelProps } from "@material-ui/core/InputLabel";
import FormHelperText, {
  FormHelperTextProps,
} from "@material-ui/core/FormHelperText";

export type SharedProps = {
  id: string;
  label: string;
  value: unknown;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  wrapperClass?: string;
  adornment?: {
    start?: React.ReactNode | null;
    end?: React.ReactNode | null;
  };
  formControlOpts?: Omit<FormControlProps, "disabled" | "error" | "required">;
  inputLabelOpts?: Omit<InputLabelProps, "htmlFor">;
  formHelperTextOpts?: FormHelperTextProps;
};

type SharedMetaProps = Omit<SharedProps, "id" | "value" | "adornment"> & {
  children: React.ReactNode;
};

export function Shared({
  label,
  children,
  required = false,
  disabled = false,
  error = false,
  errorText = "",
  helperText = "",
  wrapperClass = "",
  ...rest
}: SharedMetaProps) {
  return (
    <div className={wrapperClass}>
      <FormControl
        {...rest.formControlOpts}
        disabled={disabled}
        error={error}
        required={required}
      >
        <InputLabel
          {...rest.inputLabelOpts}
          htmlFor={`component-${label.toLowerCase()}`}
        >
          {label}
        </InputLabel>
        {children}
        <FormHelperText {...rest.formHelperTextOpts}>
          {error && errorText ? errorText : helperText}
        </FormHelperText>
      </FormControl>
    </div>
  );
}
