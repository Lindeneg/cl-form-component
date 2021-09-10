import React from "react";
import { useForm, countNumbers, countUpperCase } from "cl-use-form-state";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Input, InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const EmptySingleLineInput = ({ label = "", ...args }: InputProps) => {
  return <Input {...args} id="story-single-input-el" label={label} />;
};

export function SingleInputWithValidation() {
  const { inputs, onChangeHandler, onTouchHandler } = useForm<{
    fullName: string;
  }>((input) => ({
    fullName: input("", { minLength: 2, maxNumericalSymbols: 0 }),
  }));
  return (
    <Input
      id="fullName"
      label="Full name"
      helperEl="please enter your full name"
      errorEl="between 2-52 characters with no numbers"
      validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
      valid={inputs.fullName.isValid}
      error={inputs.fullName.isTouched && !inputs.fullName.isValid}
      value={inputs.fullName.value}
      onInputChange={onChangeHandler}
      onInputBlur={onTouchHandler}
      required
    />
  );
}

export function MultipleInputsWithValidationAndAdornment() {
  const { inputs, updateInput, onChangeHandler, onTouchHandler } = useForm<{
    username: string;
    password: { entry: string; visible: boolean };
    passwordConfirm: { entry: string; visible: boolean };
    age: number | null;
  }>((input) => ({
    username: input("", { minLength: 2, maxNumericalSymbols: 0 }),
    password: input(
      { entry: "", visible: false },
      {
        customRule: ({ entry }) => {
          return (
            entry.length >= 8 &&
            entry.length <= 32 &&
            countNumbers(entry) >= 1 &&
            countUpperCase(entry) >= 1
          );
        },
        connectFields: ["passwordConfirm"],
      }
    ),
    passwordConfirm: input(
      { entry: "", visible: false },
      {
        customRule: ({ entry }, { inputs }) => {
          return (
            inputs.password.isValid && inputs.password.value.entry === entry
          );
        },
      }
    ),
    age: input(null, { isValid: true }),
  }));
  const { username, password, passwordConfirm, age } = inputs;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "inline-flex", justifyContent: "space-evenly" }}>
        <Input
          id="username"
          label="Username"
          helperEl="please enter a username"
          errorEl="2-52 characters | no numbers"
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={username.isValid}
          error={username.isTouched && !username.isValid}
          value={username.value}
          onInputChange={onChangeHandler}
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          required
        />
        <Input
          id="age"
          label="Age"
          type="number"
          helperEl="optionally enter your age"
          value={age.value || ""}
          onInputChange={onChangeHandler}
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
        />
      </div>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
        }}
      >
        <Input
          id="password"
          label="Password"
          type={password.value.visible ? "text" : "password"}
          helperEl="please enter a password"
          errorEl="8-32 characters, min. one number and one uppercase"
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={password.isValid}
          error={password.isTouched && !password.isValid}
          value={password.value.entry}
          onInputChange={(e) =>
            updateInput("password", {
              ...password.value,
              entry: e.target.value,
            })
          }
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          adornment={{
            start: password.value.visible ? (
              <VisibilityOffIcon
                onClick={() =>
                  updateInput("password", { ...password.value, visible: false })
                }
                style={{ cursor: "pointer" }}
              />
            ) : (
              <VisibilityIcon
                onClick={() =>
                  updateInput("password", { ...password.value, visible: true })
                }
                style={{ cursor: "pointer" }}
              />
            ),
          }}
          required
        />
        <Input
          id="passwordConfirm"
          label="Confirm password"
          type={passwordConfirm.value.visible ? "text" : "password"}
          helperEl="please confirm your password"
          errorEl="passwords does not match.."
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={passwordConfirm.isValid}
          error={passwordConfirm.isTouched && !passwordConfirm.isValid}
          value={passwordConfirm.value.entry}
          onInputChange={(e) =>
            updateInput("passwordConfirm", {
              ...passwordConfirm.value,
              entry: e.target.value,
            })
          }
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          adornment={{
            start: passwordConfirm.value.visible ? (
              <VisibilityOffIcon
                onClick={() =>
                  updateInput("passwordConfirm", {
                    ...passwordConfirm.value,
                    visible: false,
                  })
                }
                style={{ cursor: "pointer" }}
              />
            ) : (
              <VisibilityIcon
                onClick={() =>
                  updateInput("passwordConfirm", {
                    ...passwordConfirm.value,
                    visible: true,
                  })
                }
                style={{ cursor: "pointer" }}
              />
            ),
          }}
          required
        />
      </div>
    </div>
  );
}
