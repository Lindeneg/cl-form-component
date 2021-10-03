import React from "react";
import { Form } from ".";

export default {
  title: "Form",
  component: Form,
};

export function SimpleForm() {
  enum Visibility {
    PUBLIC,
    PRIVATE,
  }
  return (
    <Form<{ description: string; visibility: Visibility | string }>
      entries={{
        description: {
          input: {
            initialValue: "",
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
        visibility: {
          checkbox: {
            initialValue: "",
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

export function AdvancedSignupForm() {
  return (
    <Form<{
      username: string;
      fullName: string;
      password: string;
      confirmation: string;
    }>
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
        variant: "outlined",
        disableOnInvalidForm: true,
      }}
    />
  );
}

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

/*
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
