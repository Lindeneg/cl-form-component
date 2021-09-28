import React from "react";
import {
  useForm,
  FormEntryConstraint,
  InputValueType,
  Inputs,
  GetInputOptions,
  FormElementConstraint,
} from "cl-use-form-state";
import { onArrayChange } from "./util";
import { Checkbox, CheckboxFormProps } from "../checkbox";
import { Input, InputFormProps } from "../input";
import { Radio, RadioFormProps } from "../radio";
import { Select, SelectProps, SelectTypeConstraint } from "../select";
import { Switch, SwitchProps } from "../switch";

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: {
    initialValue: T[K];
    position?: number;
    validation?: GetInputOptions<T[K], T>;
    checkbox?: CheckboxFormProps;
    input?: InputFormProps;
    radio?: RadioFormProps;
  };
};

export type FormProps<T extends FormEntryConstraint> = {
  entries: Entries<T>;
  onSubmit2: (isValid: boolean, values: T) => void;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  formClass?: string;
  formStyle?: React.CSSProperties;
};

export function Form<T extends FormEntryConstraint>({
  entries,
  onSubmit2,
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
                onInputChange={onChangeHandler}
                onInputBlur={onTouchHandler}
              />
            );
          } else if (typeof entry.checkbox !== "undefined") {
            let data;
            if (Array.isArray(entry.checkbox.data)) {
              data = entry.checkbox.data.map((el) => ({
                ...el,
                id: key,
                checked: Array.isArray(input.value)
                  ? !!input.value.find((e) => e === el.name)
                  : el.name === input.value,
                onChange: () =>
                  updateInput(
                    key,
                    (Array.isArray(input.value)
                      ? onArrayChange(input.value, el.name)
                      : el.name === input.value
                      ? ""
                      : el.name) as T[string]
                  ),
                onBlur: onTouchHandler,
              }));
            } else {
              const { name, ...rest } = entry.checkbox.data;
              data = {
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
            }
            return <Checkbox {...entry.checkbox} key={key} data={data} />;
          } else if (typeof entry.radio !== "undefined") {
          }
          return null;
        })}
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmit2(isValid, getInputValues());
          }}
          role="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
