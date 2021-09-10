import React from "react";
import { useForm } from "cl-use-form-state";
import { Input, InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const EmptyInput = ({ label = "", ...args }: InputProps) => {
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

export function MultipleInputsWithValidation() {
  const { inputs, onChangeHandler, onTouchHandler } = useForm<{
    username: string;
    password: string;
    passwordConfirm: string;
    age: number | null;
  }>((input) => ({
    username: input("", { minLength: 2, maxNumericalSymbols: 0 }),
    password: input("", {
      minLength: 8,
      maxLength: 32,
      minNumericalSymbols: 1,
      minUppercaseCharacters: 1,
      connectFields: ["passwordConfirm"],
    }),
    passwordConfirm: input("", {
      customRule: (value, state) => {
        const { password } = state.inputs;
        return password.isValid && password.value === value;
      },
    }),
    age: input(null, { isValid: true }),
  }));
  const { username, password, passwordConfirm, age } = inputs;
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
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
          type="password"
          helperEl="please enter a password"
          errorEl="8-32 characters, min. one number and one uppercase"
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={password.isValid}
          error={password.isTouched && !password.isValid}
          value={password.value}
          onInputChange={onChangeHandler}
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          adornment={{
            end: <span>show</span>,
          }}
          required
        />
        <Input
          id="passwordConfirm"
          label="Confirm password"
          type="password"
          helperEl="please confirm your password"
          errorEl="passwords does not match.."
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={passwordConfirm.isValid}
          error={passwordConfirm.isTouched && !passwordConfirm.isValid}
          value={passwordConfirm.value}
          onInputChange={onChangeHandler}
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          adornment={{
            end: <span>show</span>,
          }}
          required
        />
      </div>
    </form>
  );
}
