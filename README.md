# cl-form-component

###### Easily create forms in React with validation and TypeScript support.

---

The form is _Bootstrap-esque_ styled and offers two variants by default, `dark` and `light`.
Work in progress to allow customization of all styles used.

There are no dependencies besides [React](https://reactjs.org/) and [cl-use-form-state](https://github.com/Lindeneg/cl-use-form-state), the latter of which is used for state management and input validation.

Four form elements are supported:

-   **FormInput**

    -- _input field_

-   **FormTextField**

    -- _textarea field_

-   **FormImage**

    -- _image upload field with image preview_

-   **FormSelect**

    -- _select/dropdown with options_

All elements offers the same predefined validation rules as well as the ability to create custom ones.

---

#### Simple Example

Suppose you'd like a login form _with_ validation, then you can do it like so:

**TypeScript**

```tsx
import React, { FC } from 'react';

import { Form } from 'cl-form-component';

type Inputs = {
    username: string;
    password: string;
};

// By passing the inputs as a generic type argument to the Form component,
// you'll have autocompletion and typechecking in the onSubmit 'result' variable
// as well as for the 'value' and 'state' arguments in a customRule function.
const SomeComponent: FC = () => (
    <Form<Inputs>
        entries={{
            username: {
                label: 'Username',
                options: {
                    maxLength: 16,
                    maxNumericalSymbols: 0,
                    minLength: 4
                },
                placeholder: 'Enter Username'
            },
            password: {
                label: 'Password',
                options: {
                    maxLength: 32,
                    minLength: 8,
                    minUppercaseCharacters: 1
                },
                placeholder: 'Enter Password',
                type: 'password'
            }
        }}
        headerText="Please Login"
        onSubmit={(result) => console.log('submission result: ', result)}
        submissionText="LOGIN"
    />
);

export default SomeComponent;
```

**JavaScript**

```jsx
import React from 'react';
import { Form } from 'cl-form-component';

const SomeComponent = () => {
    return (
        <Form
            entries={{
                username: {
                    label: 'Username',
                    options: {
                        maxLength: 16,
                        maxNumericalSymbols: 0,
                        minLength: 4
                    },
                    placeholder: 'Enter Username'
                },
                password: {
                    label: 'Password',
                    options: {
                        maxLength: 32,
                        minLength: 8,
                        minUppercaseCharacters: 1
                    },
                    placeholder: 'Enter Password',
                    type: 'password'
                }
            }}
            headerText="Please Login"
            onSubmit={(result) => console.log('submission result: ', result)}
            submissionText="LOGIN"
        />
    );
};

export default SomeComponent;
```

---

#### Stories & Documentation

Check out [this](https://lindeneg.github.io/cl-form-component/?path=/story/form--default-input) link for a few stories or check out the full documentation [here](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md).
