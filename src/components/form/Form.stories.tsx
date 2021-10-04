import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { useMediaQuery } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Form, FormProps } from ".";

export default {
  title: "Form",
  component: Form,
  argTypes: {
    entries: { control: "none" },
    onFormSubmit: { control: "none" },
    header: { control: "none" },
  },
};

export function DefaultForm({ ...args }: FormProps<{ something: string }>) {
  return (
    <Form
      {...args}
      entries={{ something: { input: { initialValue: "" } } }}
      onFormSubmit={(isValid, inputs) =>
        action("onFormSubmit")({ isValid, inputs })
      }
    />
  );
}

export function SimpleInputForm() {
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
            // position can optionally be specified
            // entries are sorted ascendingly
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
            required: true,
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
      onFormSubmit={(isValid, inputs) => {
        action("onFormSubmit")({ isValid, inputs });
      }}
      submitBtnOpts={{
        style: { width: "100%", margin: "1rem 0" },
        variant: "outlined",
      }}
    />
  );
}

export function SignUpForm() {
  // state used for (un)masking password fields
  const [show, setShow] = useState<{ password: boolean; confirm: boolean }>({
    password: false,
    confirm: false,
  });
  // https://v4.mui.com/components/use-media-query/#usemediaquery
  const matches = useMediaQuery("(min-width:800px)");
  return (
    <Form<{
      username: string;
      fullName: string;
      password: string;
      confirmation: string;
    }>
      entries={{
        fullName: {
          input: {
            initialValue: "",
            label: "Full Name",
            helperEl: "Optionally provide your name",
            errorEl: "Length 0-32 with no numbers",
            adornment: {
              start: <FaceIcon />,
            },
            wrapperStyle: { gridArea: "1 / 1 / auto / 3" },
            fullWidth: !matches,
          },
        },
        username: {
          input: {
            initialValue: "",
            label: "Username",
            helperEl: "Please provide a username",
            errorEl: "Length 5-32",
            validEl: <span style={{ color: "#0ca60c" }}>Looks good!</span>,
            validation: {
              minLength: 5,
              maxLength: 32,
            },
            adornment: {
              start: <AccountCircleIcon />,
            },
            wrapperStyle: { gridArea: "1 / 2 / 3 / 4" },
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
            wrapperStyle: { gridArea: "2 / 1 / auto / 3" },
            validation: {
              minLength: 8,
              maxLength: 32,
              minNumericalSymbols: 1,
              minUppercaseCharacters: 1,
              // run validation for 'confirmation'
              // each time 'password' changes
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
            wrapperStyle: { gridArea: "2 / 2 / 3 / 4" },
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
      wrapperStyle={{ width: "100%", display: "flex", flexDirection: "column" }}
      formStyle={{
        display: matches ? "grid" : "block",
        gap: "10px",
        justifyItems: "center",
        marginTop: "2rem",
      }}
      header="Signup To Something!"
      onFormSubmit={(isValid, inputs) => {
        action("onFormSubmit")({ isValid, inputs });
      }}
      submitBtnOpts={{
        text: "SIGN UP",
        variant: "outlined",
        style: { margin: "3rem 0 1rem" },
      }}
    />
  );
}

export function LoginForm() {
  return (
    <Form<{
      user: string;
      pass: string;
      stayLoggedIn: string;
    }>
      wrapperStyle={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
        alignItems: "center",
      }}
      entries={{
        user: {
          input: {
            initialValue: "",
            position: 1,
            label: "Username",
            required: true,
          },
        },
        pass: {
          input: {
            initialValue: "",
            type: "password",
            position: 3,
            label: "Password",
            required: true,
          },
        },
        stayLoggedIn: {
          checkbox: {
            initialValue: "",
            position: 3,
            data: [{ val: "in", text: "Stay Logged In" }],
          },
        },
      }}
      header="Please Login"
      onFormSubmit={(isValid, inputs) => {
        action("onFormSubmit")({ isValid, inputs });
      }}
      submitBtnOpts={{
        style: { margin: "1rem 0 1rem" },
        text: "LOGIN",
        color: "primary",
        disableOnInvalidForm: true,
      }}
    />
  );
}

enum PaymentCycle {
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
}

enum Department {
  TECH,
  MARKETING,
  DESIGN,
  HR,
  SUPPORT,
  MANAGEMENT,
}

enum Activity {
  INACTIVE = "",
  ACTIVE = "ACTIVE",
}

type CreateEmployeeFormInputs = {
  firstname: string;
  surname: string;
  age: number;
  salary?: number;
  paymentCycle?: PaymentCycle;
  email: string;
  active: Activity;
  hireDate: string;
  departments: Department[];
};

export function CreateEmployeeForm() {
  const sharedProps = { fullWidth: true, wrapperStyle: { width: "250px" } };
  return (
    <Form<CreateEmployeeFormInputs>
      wrapperStyle={{
        width: "100%",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
      }}
      formStyle={{
        maxWidth: "850px",
        marginTop: "2rem",
        display: "inline-flex",
        flexFlow: "row wrap",
        gap: "1rem 2rem",
        placeContent: "center",
        alignItems: "center",
      }}
      header="Create Employee"
      entries={{
        firstname: {
          input: {
            ...sharedProps,
            initialValue: "",
            label: "Firstname",
            required: true,
          },
        },
        surname: {
          input: {
            ...sharedProps,
            initialValue: "",
            label: "Surname",
            required: true,
          },
        },
        age: {
          input: {
            ...sharedProps,
            initialValue: NaN,
            type: "number",
            label: "Age",
          },
        },
        email: {
          input: {
            ...sharedProps,
            initialValue: "",
            type: "email",
            label: "Email",
            required: true,
          },
        },
        hireDate: {
          input: {
            ...sharedProps,
            initialValue: "",
            type: "date",
            label: "Hire Date",
            required: true,
            muiInputLabelOpts: {
              shrink: true,
            },
          },
        },
        salary: {
          input: {
            ...sharedProps,
            initialValue: NaN,
            type: "number",
            label: "Salary",
            required: true,
          },
        },
        departments: {
          select: {
            ...sharedProps,
            // using an array allows multiple entries to be selected
            initialValue: [],
            label: "Departments",
            required: true,
            type: "chip",
            data: [
              { val: Department.TECH, text: "Tech" },
              { val: Department.MARKETING, text: "Marketing" },
              { val: Department.DESIGN, text: "Design" },
              { val: Department.HR, text: "HR" },
              { val: Department.SUPPORT, text: "Support" },
              { val: Department.MANAGEMENT, text: "Management" },
            ],
          },
        },
        paymentCycle: {
          radio: {
            ...sharedProps,
            initialValue: PaymentCycle.MONTHLY,
            label: "Payment Cycle",
            data: [
              { val: PaymentCycle.BIWEEKLY, text: "Biweekly" },
              { val: PaymentCycle.MONTHLY, text: "Monthly" },
            ],
            validation: {
              isValid: true,
            },
            required: true,
            muiRadioGroupOpts: { style: { flexDirection: "row" } },
          },
        },
        active: {
          switch: {
            ...sharedProps,
            initialValue: Activity.INACTIVE,
            data: [{ val: Activity.ACTIVE, text: "Active" }],
          },
        },
      }}
      onFormSubmit={(isValid, inputs) => {
        action("onFormSubmit")({ isValid, inputs });
      }}
      submitBtnOpts={{
        style: { width: "100%", margin: "2rem 0 1rem" },
        text: "CREATE",
      }}
    />
  );
}
