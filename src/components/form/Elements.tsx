import React from "react";
import { FormEntryConstraint, FormEntryState } from "cl-use-form-state";
import { FormEntry, onArrayChange } from "./util";
import { Input } from "../input";
import { Radio, RadioFormProps, RadioProps } from "../radio";
import { Checkbox, CheckboxFormProps } from "../checkbox";
import { Switch, SwitchFormProps } from "../switch";
import {
  Select,
  SelectFormProps,
  SelectMetaEntry,
  SelectTypeConstraint,
} from "../select";

type SharedProps<T extends FormEntryConstraint> = {
  id: string;
  entry: FormEntry<T, string>;
  input: FormEntryState<unknown, T>;
  hasSubmitted: boolean;
  updateInput: (id: string, value: T[string]) => void;
  onTouchHandler: React.FocusEventHandler;
};

export function FormInput<T extends FormEntryConstraint>({
  id,
  entry,
  input,
  hasSubmitted,
  updateInput,
  onTouchHandler,
}: SharedProps<T>) {
  const getValue = () => {
    if (entry.input?.type === "date" && input.value instanceof Date) {
      const month = input.value.getMonth() + 1;
      const day = input.value.getDate();
      return `${input.value.getFullYear()}-${
        month < 10 ? `0${month}` : month
      }-${day < 10 ? `0${day}` : day}`;
    } else if (entry.input?.type === "number" && Number.isNaN(input.value)) {
      return "";
    }
    return input.value;
  };

  const onChange = (target: HTMLInputElement) => {
    let value;
    if (entry.input?.type === "number") {
      value = Number.isNaN(target.value) ? "" : target.valueAsNumber;
    } else if (entry.input?.type === "date" && input.value instanceof Date) {
      value = target.valueAsDate || new Date(target.value);
    } else {
      value = target.value;
    }
    updateInput(id, value as T[string]);
  };

  return (
    <Input
      {...entry.input}
      id={id}
      value={getValue()}
      valid={input.isValid}
      error={(input.isTouched || hasSubmitted) && !input.isValid}
      onInputChange={({ target }) => onChange(target as HTMLInputElement)}
      onInputBlur={onTouchHandler}
    />
  );
}

export function FormCheckbox<T extends FormEntryConstraint>({
  id,
  formElement,
  entry,
  input,
  hasSubmitted,
  updateInput,
  onTouchHandler,
}: SharedProps<T> & { formElement: "checkbox" | "switch" }) {
  const { data, fallbackValue, ...props } = entry[formElement] as
    | CheckboxFormProps
    | SwitchFormProps;
  const metaVal = typeof fallbackValue !== "undefined" ? fallbackValue : "";
  const validData = data.map((el) => {
    const { val, text, ...rest } =
      typeof el === "string" ? { val: el, text: "" } : el;
    return {
      ...rest,
      id,
      val,
      text: text || String(val),
      checked: Array.isArray(input.value)
        ? !!input.value.find((e) => e === val)
        : val === input.value,
      onChange: () =>
        updateInput(
          id,
          (Array.isArray(input.value)
            ? onArrayChange(input.value, val)
            : val === input.value
            ? metaVal
            : val) as T[string]
        ),
      onBlur: onTouchHandler,
    };
  });
  const allProps = {
    ...props,
    data: validData,
    valid: input.isValid,
    error: (input.isTouched || hasSubmitted) && !input.isValid,
  };
  return formElement === "checkbox" ? (
    <Checkbox {...allProps} />
  ) : (
    <Switch {...allProps} />
  );
}

export function FormRadio<T extends FormEntryConstraint>({
  id,
  entry,
  input,
  hasSubmitted,
  onRadioChange,
  onTouchHandler,
}: Omit<SharedProps<T>, "updateInput"> & Pick<RadioProps, "onRadioChange">) {
  const { data, ...props } = entry.radio as RadioFormProps;
  const validData = data.map((el) => {
    const { val, text, ...rest } =
      typeof el === "string" ? { val: el, text: "" } : el;
    return {
      ...rest,
      id,
      name: text || String(val),
      value: val,
    };
  });
  return (
    <Radio
      {...props}
      data={validData}
      selectedValue={input.value}
      valid={input.isValid}
      error={(input.isTouched || hasSubmitted) && !input.isValid}
      onRadioChange={onRadioChange}
      onRadioBlur={onTouchHandler}
    />
  );
}

export function FormSelect<T extends FormEntryConstraint>({
  id,
  entry,
  input,
  hasSubmitted,
  updateInput,
  onTouchHandler,
}: SharedProps<T>) {
  const { data, type, ...props } = entry.select as SelectFormProps;
  const validData = data.map((el) => {
    const { val, text, ...rest } =
      typeof el === "object"
        ? (el as SelectMetaEntry<SelectTypeConstraint, any>)
        : { val: el, text: "" };
    return { ...rest, val, text };
  });

  return (
    <Select
      {...props}
      onSelect={({ target }) =>
        updateInput(
          id,
          (!Array.isArray(target.value) && target.value === input.value
            ? ""
            : target.value) as T[string]
        )
      }
      onSelectBlur={onTouchHandler}
      id={id}
      valid={input.isValid}
      error={(input.isTouched || hasSubmitted) && !input.isValid}
      type={type || "menu"}
      value={input.value}
      multiple={Array.isArray(input.value)}
      data={validData}
    />
  );
}
