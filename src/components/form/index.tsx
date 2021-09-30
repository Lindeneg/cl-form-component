import React from "react";
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

export function onArrayChange(arr: string[], target: string): string[] {
  const newArr = [...arr];
  const idx = newArr.findIndex((e) => e === target);
  if (idx > -1) {
    newArr.splice(idx, 1);
  } else {
    newArr.push(target);
  }
  return newArr;
}

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: {
    initialValue: T[K];
    position?: number;
    validation?: GetInputOptions<T[K], T>;
    checkbox?: CheckboxFormProps;
    input?: InputFormProps;
    radio?: RadioFormProps;
    switch?: SwitchFormProps;
    select?: SelectFormProps;
  };
};

export type FormProps<T extends FormEntryConstraint> = {
  entries: Entries<T>;
  onFormSubmit: (isValid: boolean, values: T) => void;
  submitBtnOpts?: Omit<ButtonProps, "onClick"> & { text?: string };
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
          <h1>Form Label</h1>
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
    (a, b) => (entries[b].position || 0) - (entries[a].position || 0)
  );
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
          [key]: cl(entries[key].initialValue, entries[key].validation),
        }))
        .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as Inputs<T>
  );
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <FormHeader header={header} />
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
                error={input.isTouched && !input.isValid}
                onInputChange={onChangeHandler}
                onInputBlur={onTouchHandler}
              />
            );
          } else if (typeof entry.checkbox !== "undefined") {
            const { data, ...props } = entry.checkbox;
            const validData = data.map((el) => {
              const { name, ...rest } =
                typeof el === "string" ? { name: el } : el;
              return {
                ...rest,
                name,
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
              <Checkbox
                {...props}
                key={key}
                data={validData}
                valid={input.isValid}
                error={input.isTouched && !input.isValid}
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
                error={input.isTouched && !input.isValid}
                onRadioChange={onChangeHandler}
                onRadioBlur={onTouchHandler}
              />
            );
          } else if (typeof entry.switch !== "undefined") {
            const { data, ...props } = entry.switch;
            const validData = data.map((el) => {
              const { name, ...rest } =
                typeof el === "string" ? { name: el } : el;
              return {
                ...rest,
                name,
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
                error={input.isTouched && !input.isValid}
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
                error={input.isTouched && !input.isValid}
                type={type || "menu"}
                value={input.value}
                multiple={Array.isArray(entry.initialValue)}
                data={validData}
              />
            );
          } else {
            return null;
          }
        })}
      </form>
      <Button
        {...submitBtnOpts}
        onClick={(e) => {
          e.preventDefault();
          onFormSubmit(isValid, getInputValues());
        }}
        role="button"
      >
        {submitBtnOpts?.text || "Submit"}
      </Button>
    </div>
  );
}
