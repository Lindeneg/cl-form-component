import React, { useState } from "react";
import {
  useForm,
  FormEntryConstraint,
  Inputs,
  GetInputOptions,
} from "cl-use-form-state";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { Checkbox, CheckboxFormProps } from "../checkbox";
import { Input, InputFormProps } from "../input";
import { Radio, RadioFormProps } from "../radio";
import {
  Select,
  SelectFormProps,
  SelectMetaEntry,
  SelectTypeConstraint,
} from "../select";
import { Switch, SwitchFormProps } from "../switch";
import { Divider } from "@material-ui/core";

export function onArrayChange(arr: unknown[], target: unknown): unknown[] {
  const newArr = [...arr];
  const idx = newArr.findIndex((e) => e === target);
  if (idx > -1) {
    newArr.splice(idx, 1);
  } else {
    newArr.push(target);
  }
  return newArr;
}

function getElementKey(
  entry: FormProps2<any, any>
): keyof FormProps2<any, any> | "none" {
  if (typeof entry.input !== "undefined") {
    return "input";
  } else if (typeof entry.checkbox !== "undefined") {
    return "checkbox";
  } else if (typeof entry.radio !== "undefined") {
    return "radio";
  } else if (typeof entry.select !== "undefined") {
    return "select";
  } else if (typeof entry.switch !== "undefined") {
    return "switch";
  }
  return "none";
}

function getPosition(entry: FormProps2<any, any>) {
  const key = getElementKey(entry);
  if (key !== "none") {
    return entry[key]?.position || 0;
  }
  return 0;
}

function getInputOpts(entry: FormProps2<any, any>): [any, any] {
  const key = getElementKey(entry);
  if (key !== "none") {
    return [entry[key]?.initialValue, entry[key]?.validation];
  }
  return ["", {}];
}

type BaseProps<T extends FormEntryConstraint, K extends keyof T> = {
  initialValue: T[K];
  position?: number;
  validation?: GetInputOptions<T[K], T>;
};

type FormProps2<T extends FormEntryConstraint, K extends keyof T> = {
  checkbox?: CheckboxFormProps & BaseProps<T, K>;
  input?: InputFormProps & BaseProps<T, K>;
  radio?: RadioFormProps & BaseProps<T, K>;
  switch?: SwitchFormProps & BaseProps<T, K>;
  select?: SelectFormProps & BaseProps<T, K>;
};

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: FormProps2<T, K>;
};

export type FormProps<T extends FormEntryConstraint> = {
  entries: Entries<T>;
  onFormSubmit: (isValid: boolean, values: T) => void;
  submitBtnOpts?: Omit<ButtonProps, "onClick" | "disabled"> & {
    text?: string;
    disableOnInvalidForm?: boolean;
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

// TODO: allow form to be reset on submit
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
        .map((key) => ({
          [key]: cl(...getInputOpts(entries[key])),
        }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as Inputs<T>
  );
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
                const { name, ...rest } =
                  typeof el === "string" ? { name: el } : el;
                return {
                  ...rest,
                  name,
                  id: key,
                  value: name,
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
                    ? !!input.value.find((e) => e === name)
                    : name === input.value,
                  onChange: () =>
                    updateInput(
                      key,
                      (Array.isArray(input.value)
                        ? onArrayChange(input.value, name)
                        : name === input.value
                        ? ""
                        : name) as T[string]
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
          const { text, disableOnInvalidForm, ...rest } = submitBtnOpts || {};
          return (
            <Button
              {...rest}
              disabled={!!disableOnInvalidForm && !isValid}
              onClick={(e) => {
                e.preventDefault();
                !hasSubmitted && setHasSubmitted(true);
                onFormSubmit(isValid, getInputValues());
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
