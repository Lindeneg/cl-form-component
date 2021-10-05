import React, { useState } from "react";
import {
  useForm,
  FormEntryConstraint,
  Inputs,
  GetInputOptions,
} from "cl-use-form-state";
import { FormEntry, getPosition, getInputOpts, getElementKey } from "./util";
import {
  FormInput,
  FormCheckbox,
  FormRadio,
  FormSelect,
  FormHeader,
  FormButton,
  FormButtonProps,
} from "./Elements";

export type Entries<T extends FormEntryConstraint> = {
  [K in keyof T]: FormEntry<T, K>;
};

export type FormProps<T extends FormEntryConstraint> = {
  entries: Entries<T>;
  header?: string | React.ReactElement;
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  formClass?: string;
  formStyle?: React.CSSProperties;
} & FormButtonProps<T>;

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
            const elementKey = getElementKey(entry);
            const baseProps = {
              id: key,
              entry,
              input,
              hasSubmitted,
              onTouchHandler,
            };
            switch (elementKey) {
              case "input":
                return (
                  <FormInput
                    {...baseProps}
                    key={key}
                    updateInput={updateInput}
                  />
                );
              case "checkbox":
              case "switch":
                return (
                  <FormCheckbox
                    {...baseProps}
                    formElement={elementKey}
                    key={key}
                    updateInput={updateInput}
                  />
                );
              case "radio":
                return (
                  <FormRadio
                    {...baseProps}
                    key={key}
                    onRadioChange={onChangeHandler}
                  />
                );
              case "select":
                return (
                  <FormSelect
                    {...baseProps}
                    key={key}
                    updateInput={updateInput}
                  />
                );
              default:
                return null;
            }
          })}
        </form>
        <FormButton
          isValid={isValid}
          hasSubmitted={hasSubmitted}
          setHasSubmitted={setHasSubmitted}
          getInputValues={getInputValues}
          onResetFormInputs={onResetFormInputs}
          onFormSubmit={onFormSubmit}
          submitBtnOpts={submitBtnOpts}
        />
      </div>
    </>
  );
}
