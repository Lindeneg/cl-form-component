import React, { useState } from "react";
import {
  useForm,
  FormEntryConstraint,
  Inputs,
  GetInputOptions,
} from "cl-use-form-state";
import { Divider } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { FormEntry, getPosition, getInputOpts, onArrayChange } from "./util";
import { Select, SelectMetaEntry, SelectTypeConstraint } from "../select";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { Radio } from "../radio";
import { Switch } from "../switch";

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: FormEntry<T, K>;
};

export type FormProps<T extends FormEntryConstraint> = {
  entries: Entries<T>;
  onFormSubmit: (isValid: boolean, values: T) => void;
  submitBtnOpts?: Omit<ButtonProps, "onClick" | "disabled"> & {
    text?: string;
    disableOnInvalidForm?: boolean;
    resetFormOnValidSubmit?: boolean;
  };
  header?: string | React.ReactElement;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  formClass?: string;
  formStyle?: React.CSSProperties;
};

function FormHeader({ header }: { header?: string | React.ReactElement }) {
  if (header) {
    if (typeof header === "string") {
      return (
        <>
          <h2>{header}</h2>
          <Divider />
        </>
      );
    }
    return header;
  }
  return null;
}

export function Form<T extends FormEntryConstraint>({
  entries,
  header,
  onFormSubmit,
  submitBtnOpts,
  wrapperClass,
  wrapperStyle,
  formClass,
  formStyle,
}: FormProps<T>) {
  const keys = Object.keys(entries).sort(
    (a, b) => getPosition(entries[a]) - getPosition(entries[b])
  );
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const {
    inputs,
    isValid,
    onChangeHandler,
    getInputValues,
    onTouchHandler,
    updateInput,
  } = useForm<T>(
    (cl) =>
      keys
        .map((key) => {
          const options = getInputOpts(entries[key]);
          const args = (options !== null ? options : ["", {}]) as [
            T[string],
            GetInputOptions<T[string], T>
          ];
          return {
            [key]: cl(...args),
          };
        })
        .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as Inputs<T>
  );

  const onResetFormInputs = () => {
    keys.forEach((key) => {
      const options = getInputOpts(entries[key]);
      if (options !== null) {
        updateInput(key, options[0]);
      }
    });
  };

  return (
    <>
      <FormHeader header={header} />
      <div className={wrapperClass} style={wrapperStyle}>
        <form className={formClass} style={formStyle}>
          {keys.map((key) => {
            const entry = entries[key];
            const input = inputs[key];
            if (typeof entry.input !== "undefined") {
              return (
                <Input
                  {...entry.input}
                  key={key}
                  id={key}
                  value={input.value}
                  valid={input.isValid}
                  error={(input.isTouched || hasSubmitted) && !input.isValid}
                  onInputChange={onChangeHandler}
                  onInputBlur={onTouchHandler}
                />
              );
            } else if (typeof entry.checkbox !== "undefined") {
              const { data, ...props } = entry.checkbox;
              const validData = data.map((el) => {
                const { val, text, ...rest } =
                  typeof el === "string" ? { val: el, text: "" } : el;
                return {
                  ...rest,
                  val,
                  text: text || String(val),
                  id: key,
                  checked: Array.isArray(input.value)
                    ? !!input.value.find((e) => e === val)
                    : val === input.value,
                  onChange: () =>
                    updateInput(
                      key,
                      (Array.isArray(input.value)
                        ? onArrayChange(input.value, val)
                        : val === input.value
                        ? ""
                        : val) as T[string]
                    ),
                  onBlur: onTouchHandler,
                };
              });
              return (
                <Checkbox
                  {...props}
                  key={key}
                  data={validData}
                  valid={input.isValid}
                  error={(input.isTouched || hasSubmitted) && !input.isValid}
                />
              );
            } else if (typeof entry.radio !== "undefined") {
              const { data, ...props } = entry.radio;
              const validData = data.map((el) => {
                const { val, text, ...rest } =
                  typeof el === "string" ? { val: el, text: "" } : el;
                return {
                  ...rest,
                  name: text || String(val),
                  id: key,
                  value: val,
                };
              });
              return (
                <Radio
                  {...props}
                  key={key}
                  data={validData}
                  selectedValue={input.value}
                  valid={input.isValid}
                  error={(input.isTouched || hasSubmitted) && !input.isValid}
                  onRadioChange={onChangeHandler}
                  onRadioBlur={onTouchHandler}
                />
              );
            } else if (typeof entry.switch !== "undefined") {
              const { data, ...props } = entry.switch;
              const validData = data.map((el) => {
                const { val, text, ...rest } =
                  typeof el === "string" ? { val: el, text: "" } : el;
                return {
                  ...rest,
                  val,
                  text: text || String(val),
                  id: key,
                  checked: Array.isArray(input.value)
                    ? !!input.value.find((e) => e === val)
                    : val === input.value,
                  onChange: () =>
                    updateInput(
                      key,
                      (Array.isArray(input.value)
                        ? onArrayChange(input.value, val)
                        : val === input.value
                        ? ""
                        : val) as T[string]
                    ),
                  onBlur: onTouchHandler,
                };
              });
              return (
                <Switch
                  {...props}
                  key={key}
                  data={validData}
                  valid={input.isValid}
                  error={(input.isTouched || hasSubmitted) && !input.isValid}
                />
              );
            } else if (typeof entry.select !== "undefined") {
              const { data, type, ...props } = entry.select;
              const validData = data.map((el) => {
                const { val, ...rest } =
                  typeof el === "object"
                    ? (el as SelectMetaEntry<SelectTypeConstraint, any>)
                    : { val: el };
                return { ...rest, val };
              });
              return (
                <Select
                  {...props}
                  onSelect={({ target }) =>
                    updateInput(
                      key,
                      (!Array.isArray(target.value) &&
                      target.value === input.value
                        ? ""
                        : target.value) as T[string]
                    )
                  }
                  onSelectBlur={onTouchHandler}
                  id={key}
                  key={key}
                  valid={input.isValid}
                  error={(input.isTouched || hasSubmitted) && !input.isValid}
                  type={type || "menu"}
                  value={input.value}
                  multiple={Array.isArray(input.value)}
                  data={validData}
                />
              );
            } else {
              return null;
            }
          })}
        </form>
        {(() => {
          const {
            text,
            disableOnInvalidForm,
            resetFormOnValidSubmit,
            ...rest
          } = submitBtnOpts || {};
          return (
            <Button
              {...rest}
              disabled={!!disableOnInvalidForm && !isValid}
              onClick={(e) => {
                e.preventDefault();
                onFormSubmit(isValid, getInputValues());
                !hasSubmitted && setHasSubmitted(true);
                isValid && !!resetFormOnValidSubmit && onResetFormInputs();
              }}
              role="button"
            >
              {text || "Submit"}
            </Button>
          );
        })()}
      </div>
    </>
  );
}
