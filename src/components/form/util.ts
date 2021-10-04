import { FormEntryConstraint, GetInputOptions } from "cl-use-form-state";
import { CheckboxFormProps } from "../checkbox";
import { InputFormProps } from "../input";
import { RadioFormProps } from "../radio";
import { SelectFormProps } from "../select";
import { SwitchFormProps } from "../switch";

type BaseProps<T extends FormEntryConstraint, K extends keyof T> = {
  initialValue: T[K];
  position?: number;
  validation?: GetInputOptions<T[K], T>;
};

export type FormEntry<T extends FormEntryConstraint, K extends keyof T> = {
  checkbox?: CheckboxFormProps & BaseProps<T, K>;
  input?: InputFormProps & BaseProps<T, K>;
  radio?: RadioFormProps & BaseProps<T, K>;
  switch?: SwitchFormProps & BaseProps<T, K>;
  select?: SelectFormProps & BaseProps<T, K>;
};

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

export function getElementKey<T extends FormEntryConstraint, K extends keyof T>(
  entry: FormEntry<T, K>
): keyof FormEntry<T, K> | "none" {
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

export function getPosition<T extends FormEntryConstraint>(
  entry: FormEntry<T, string>
): number {
  const key = getElementKey(entry);
  if (key !== "none") {
    const target = entry[key] as BaseProps<T, string>;
    if (typeof target.position !== "undefined") {
      return target.position;
    }
  }
  return 0;
}

export function getInputOpts<T extends FormEntryConstraint, K extends keyof T>(
  entry: FormEntry<T, K>
): [T[K], GetInputOptions<T[K], T>] | null {
  const key = getElementKey(entry);
  if (key !== "none") {
    const target = entry[key] as BaseProps<T, K> & { required?: boolean };
    const required = target.required || false;
    return [
      target.initialValue,
      {
        isRequired: required,
        isValid: !required,
        ...target.validation,
      },
    ];
  }
  return null;
}
