import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Form } from ".";

export default {
  title: "Form",
  component: Form,
  argTypes: {
    entries: { control: "none" },
    onFormSubmit: { control: "none" },
    submitBtnOpts: { control: "none" },
    header: { control: "none" },
  },
};

export function SimpleForm({ ...args }: { onFormSubmit: () => {} }) {
  enum Visibility {
    PUBLIC,
    PRIVATE,
  }
  return (
    <Form<{ description: string; visibility: Visibility | string }>
      entries={{
        visibility: {
          checkbox: {
            initialValue: "",
            position: 1,
            // you can also just pass an array of strings instead such as
            // ["Private", "Public"]. Here we use objects with a value
            // (an enum entry) and a text label to be shown to the user
            data: [
              { val: Visibility.PRIVATE, text: "Private" },
              { val: Visibility.PUBLIC, text: "Public" },
            ],
            label: "Visibility",
            helperEl: "Please specify visibility settings",
            errorEl: "A visibility option must be selected",
            validation: {
              customRule: (v) => v !== "",
            },
            muiFormGroupOpts: { style: { flexDirection: "row" } },
          },
        },
        description: {
          input: {
            initialValue: "",
            position: 0,
            label: "Description",
            helperEl: "Please enter some text",
            errorEl: "Please enter between 8-128 characters",
            minRows: 2,
            required: true,
            fullWidth: true,
            multiline: true,
            validation: {
              minLength: 8,
              maxLength: 128,
            },
          },
        },
      }}
      onFormSubmit={args.onFormSubmit}
      submitBtnOpts={{
        style: { width: "100%", margin: "1rem 0" },
        variant: "outlined",
      }}
    />
  );
}

export function AdvancedSignupForm({ ...args }: { onFormSubmit: () => {} }) {
  const [show, setShow] = useState<{ password: boolean; confirm: boolean }>({
    password: false,
    confirm: false,
  });
  const matches = useMediaQuery("(min-width:800px)");
  return (
    <Form<{
      username: string;
      fullName: string;
      password: string;
      confirmation: string;
    }>
      wrapperStyle={{ width: "100%", display: "flex", flexDirection: "column" }}
      formStyle={{
        display: matches ? "grid" : "block",
        gap: "10px",
        justifyItems: "center",
        marginTop: "2rem",
      }}
      header="Signup To Something!"
      entries={{
        fullName: {
          input: {
            initialValue: "",
            label: "Full Name",
            helperEl: "Optionally provide your name",
            errorEl: "Length 0-32 with no numbers",
            validation: {
              // the initial state is valid, as this field is optional
              isValid: true,
              minLength: 0,
              maxLength: 32,
              maxNumericalSymbols: 0,
            },
            adornment: {
              start: <FaceIcon />,
            },
            wrapperStyle: { gridColumn: "1 / 3", gridRow: 1 },
            fullWidth: !matches,
          },
        },
        username: {
          input: {
            initialValue: "",
            label: "Username",
            helperEl: "Please provide a username",
            errorEl: "Length 8-32",
            validEl: <span style={{ color: "#0ca60c" }}>Looks good!</span>,
            validation: {
              minLength: 8,
              maxLength: 32,
            },
            adornment: {
              start: <AccountCircleIcon />,
            },
            wrapperStyle: { gridColumn: "2 / 4", gridRow: "1 / 3" },
            required: true,
            fullWidth: !matches,
          },
        },
        password: {
          input: {
            initialValue: "",
            label: "Password",
            type: show.password ? "text" : "password",
            helperEl: "Please provide a secure password",
            errorEl: "Length 8-32 with numbers & uppercase",
            validEl: <span style={{ color: "#0ca60c" }}>Looks good!</span>,
            wrapperStyle: { gridColumn: "1 / 3", gridRow: 2 },
            validation: {
              minLength: 8,
              maxLength: 32,
              minNumericalSymbols: 1,
              minUppercaseCharacters: 1,
              connectFields: ["confirmation"],
            },
            adornment: {
              start: show.password ? (
                <VisibilityIcon
                  onClick={() => setShow({ ...show, password: false })}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => setShow({ ...show, password: true })}
                  style={{ cursor: "pointer" }}
                />
              ),
            },
            required: true,
            fullWidth: !matches,
          },
        },
        confirmation: {
          input: {
            initialValue: "",
            label: "Confirmation",
            type: show.confirm ? "text" : "password",
            helperEl: "Please confirm a secure password",
            errorEl: "Secure passwords does not match",
            validEl: <span style={{ color: "#0ca60c" }}>Looks good!</span>,
            wrapperStyle: { gridColumn: "2 / 4", gridRow: "2 / 3" },
            validation: {
              customRule: (v, s) =>
                s.inputs.password.isValid && s.inputs.password.value === v,
            },
            adornment: {
              start: show.confirm ? (
                <VisibilityIcon
                  onClick={() => setShow({ ...show, confirm: false })}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => setShow({ ...show, confirm: true })}
                  style={{ cursor: "pointer" }}
                />
              ),
            },
            required: true,
            fullWidth: !matches,
          },
        },
      }}
      onFormSubmit={args.onFormSubmit}
      submitBtnOpts={{
        text: "SIGN UP",
        variant: "outlined",
        style: { margin: "3rem 0 1rem" },
      }}
    />
  );
}

/*

export function SimpleSignupForm() {
  return (
    <Form<{
      username: string;
      fullName: string;
      password: string;
      confirmation: string;
    }>
      formStyle={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      header="Signup"
      entries={{
        username: {
          input: {
            initialValue: "",
            label: "Username",
          },
        },
        fullName: {
          input: {
            initialValue: "",
          },
        },
        password: {
          input: {
            initialValue: "",
          },
        },
        confirmation: {
          input: {
            initialValue: "",
          },
        },
      }}
      onFormSubmit={(isValid, inputs) => {
        console.log("isValid: ", isValid);
        console.log("inputs: ", inputs);
      }}
      submitBtnOpts={{
        style: { width: "100%", marginTop: "1rem" },
        variant: "outlined",
      }}
    />
  );
}

export function SimpleForm({ ...args }: FormProps<Inputs>) {
  return (
    <Form<Inputs>
      {...args}
      header="Form Header"
      wrapperStyle={{ display: "flex", flexDirection: "column" }}
      onFormSubmit={(e, i) => console.log(e, i)}
      entries={{
        username: {
          input: {
            initialValue: "",
            validation: {
              minLength: 1,
            },
            wrapperStyle: { marginTop: "1rem", marginBottom: "2rem" },
            fullWidth: true,
            label: "Input Form",
            helperEl: "Write something",
          },
        },
        car: {
          checkbox: {
            initialValue: "",
            data: [
              "Ferrari",
              { name: "Porsche", muiCheckboxOpts: { disabled: true } },
            ],
            wrapperStyle: { display: "inline-flex", justifyContent: "center" },
            label: "Checkbox Form",
            helperEl: "Pick a car",
          },
        },
        mood: {
          initialValue: "Content",
          radio: {
            data: [{ name: "Happy" }, "Content"],
            label: "Radio Form",
            helperEl: "Pick a mood",
          },
        },
        private: {
          initialValue: "",
          switch: {
            data: ["Private", "Public"],
            label: "Switch Form",
            helperEl: "Switch a value",
          },
        },
        age: {
          initialValue: [],
          select: {
            type: "chip",
            data: [20, 21, 22, { val: "2" }],
          },
        },
      }}
    />
  );
}
*/
