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
import {
  Select,
  SelectFormProps,
  SelectMetaEntry,
  SelectTypeConstraint,
} from "../select";
import { Switch, SwitchFormProps } from "../switch";

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
  submit: {
    on?: (isValid: boolean, values: T) => void;
    btn?: {};
  };
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  formClass?: string;
  formStyle?: React.CSSProperties;
};

export function Form<T extends FormEntryConstraint>({
  entries,
  submit,
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
            return <Checkbox {...props} key={key} data={validData} />;
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
            return <Switch {...props} key={key} data={validData} />;
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
        <button
          onClick={(e) => {
            e.preventDefault();
            submit.on && submit.on(isValid, getInputValues());
          }}
          role="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
