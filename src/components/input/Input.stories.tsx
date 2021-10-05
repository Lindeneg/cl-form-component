import React from "react";
import { useForm, countNumbers, countUpperCase } from "cl-use-form-state";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    id: { control: "none" },
    value: { control: "none" },
    onInputChange: { control: "none" },
    onInputBlur: { control: "none" },
    adornment: { control: "none" },
    validEl: { control: "none" },
    errorEl: { control: "none" },
    helperEl: { control: "none" },
  },
};

export function InputExample({
  id = "story-single-input-el",
  ...args
}: InputProps) {
  return <Input {...args} id={id} />;
}

export function InputMultilineOutlined({
  id = "story-multi-input-el",
  helperEl = "Please enter something..",
  element = "outlined",
  fullWidth = true,
  multiline = true,
  ...args
}: InputProps) {
  return (
    <Input
      {...args}
      element={element}
      id={id}
      helperEl={helperEl}
      multiline={multiline}
      fullWidth={fullWidth}
    />
  );
}

export function InputsWithValidationAndAdornment() {
  // using library: 'cl-use-form-state'
  const { inputs, updateInput, onChangeHandler, onTouchHandler } = useForm<{
    username: string;
    password: { entry: string; visible: boolean };
    passwordConfirm: { entry: string; visible: boolean };
    age: number | null;
  }>((cl) => ({
    username: cl("", { minLength: 2, maxNumericalSymbols: 0 }),
    password: cl(
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
    passwordConfirm: cl(
      { entry: "", visible: false },
      {
        customRule: ({ entry }, { inputs }) => {
          return (
            inputs.password.isValid && inputs.password.value.entry === entry
          );
        },
      }
    ),
    age: cl(null, { isValid: true }),
  }));
  const { username, password, passwordConfirm, age } = inputs;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "inline-flex", justifyContent: "space-evenly" }}>
        <Input
          id="username"
          label="Username"
          helperEl="choose a personal username"
          errorEl="2-52 characters with no numbers"
          validEl={<span style={{ color: "#0ca60c" }}>Looks good!</span>}
          valid={username.isValid}
          error={username.isTouched && !username.isValid}
          value={username.value}
          onInputChange={onChangeHandler}
          onInputBlur={onTouchHandler}
          wrapperStyle={{ width: "15rem" }}
          adornment={{
            start: <AccountCircleIcon />,
          }}
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
          adornment={{
            start: <TimelapseIcon />,
          }}
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
          helperEl="choose a secure password"
          errorEl="8-32 characters, with at least one number and uppercase character"
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
