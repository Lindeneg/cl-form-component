# cl-form-component

###### Easily create forms in React with validation and TypeScript support using material-ui 4.

---

This library is built on top of [cl-use-form-state](https://github.com/Lindeneg/cl-use-form-state) and uses [material-ui 4](https://v4.mui.com/) as its component suite. All components can be fully customized within the boundaries of material-ui.

## Peer Dependencies

- [react](https://npmjs.com/package/react) >=17.0.2
- [react-dom](https://www.npmjs.com/package/react-dom) >=17.0.2
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) >=4.12.3

---

## Install

`yarn add cl-form-component`

---

## Usage

Check out [this](https://lindeneg.github.io/cl-form-component) link for [StoryBook](https://storybook.js.org/) examples.

---

```tsx
import { Form } from "cl-form-component";

type FormInputs = {
  something: string;
};

<Form<FormInputs>
  entries={{
    something: {
      input: {
        initialValue: "",
      },
    },
  }}
  onFormSubmit={(isValid, inputs) => console.log(isValid, inputs)}
/>;
```

### Form

| prop          | type                                                                                                                                       | required | default   | note                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- | --------------------------------------- |
| entries       | [Entries](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#entries)                                                | yes      | -         | _object with inputs and options_        |
| onFormSubmit  | [Function](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#onformsubmit)                                          | yes      | -         | _state always passed on as an argument_ |
| header        | string \| React.ReactElement                                                                                                               | no       | undefined | _form header label or element_          |
| submitBtnOpts | [ButtonProps](https://v4.mui.com/api/button/#props) & { text?: string; disableOnInvalidForm?: boolean; resetFormOnValidSubmit?: boolean; } | no       | undefined | _submit button props_                   |
| wrapperClass  | string                                                                                                                                     | no       | undefined | _className for div form wrapper_        |
| wrapperStyle  | React.CSSProperties                                                                                                                        | no       | undefined | _styles for div form wrapper_           |
| formClass     | string                                                                                                                                     | no       | undefined | _className for form element_            |
| formStyle     | React.CSSProperties                                                                                                                        | no       | undefined | _styles for form element_               |

---

### Entries

`Form` always takes an `entries` prop that defines all given inputs. Five different components are supported: `'input' | 'checkbox' | 'switch' | 'select' | 'radio'`.

```ts
{
  someInput: {
    // here we can specify one of the different components, lets say 'checkbox':
    checkbox: {
      ...checkboxEntry,
    },
    // or input
    input: {
      ...inputEntry,
    },
  },
};
```

In the below `props` tables, the type `T` denotes the input types provided, an object like so: `{[key: string]: unknown}`. `K` is a map with `keyof T`.

#### Input Entry

Takes [Shared Props]() and the following props:

| prop              | type                                                                                                                                                                   | required | default     | note                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | ------------------------------------ |
| element           | `standard` \| `filled` \| `outlined`                                                                                                                                   | no       | `standard`  | _input element variant_              |
| type              | `text` \| `number` \| `password` \| `color` \| `date` \| `datetime-local` \| `file` \| `month` \| `week` \| `range` \| `search` \| `tel` \| `time` \| `url` \| `email` | no       | `text`      | _input element type_                 |
| placeholder       | string                                                                                                                                                                 | no       | `undefined` | _input element placeholder_          |
| minRows           | `string` \| `number`                                                                                                                                                   | no       | `undefined` | _minimum rows for element_           |
| maxRows           | `string` \| `number`                                                                                                                                                   | no       | `undefined` | _maximum rows for element_           |
| multiline         | `boolean`                                                                                                                                                              | no       | `false`     | _uses textarea element_              |
| adornment         | `{start?: React.ReactElement; end?: React.ReactElement}`                                                                                                               | no       | `undefined` | _component adornment(s) for element_ |
| muiInputProps     | [InputProps](https://v4.mui.com/api/input/#props)                                                                                                                      | no       | `undefined` | _props for material-ui_              |
| muiInputLabelOpts | [InputLabelProps](https://v4.mui.com/api/input-label/#props)                                                                                                           | no       | `undefined` | _props for material-ui_              |

#### (Checkbox | Switch) Entry

Takes [Shared Props]() and the following props:

| prop          | type                    | required | default | note                                     |
| ------------- | ----------------------- | -------- | ------- | ---------------------------------------- |
| data          | `Array<Data \| string>` | yes      | -       | _checkbox or switch data_                |
| fallbackValue | `unknown`               | no       | `""`    | _value used when no entries are checked_ |

##### Data

| prop                    | type                                                                 | required | default     | note                       |
| ----------------------- | -------------------------------------------------------------------- | -------- | ----------- | -------------------------- |
| val                     | `unknown`                                                            | no       | `undefined` | _value used_               |
| text                    | `string`                                                             | no       | `undefined` | _text label shown_         |
| controlComponent        | `React.ReactElement`                                                 | no       | -           | _custom control component_ |
| muiFormControlLabelOpts | [FormControlLabel](https://v4.mui.com/api/form-control-label/#props) | no       | `{}`        | _props for material-ui_    |
| muiCheckboxOpts         | [CheckboxProps](https://v4.mui.com/api/checkbox/#props)              | no       | `{}`        | _props for material-ui_    |
| muiSwitchOpts           | [SwitchProps](https://v4.mui.com/api/switch/#props)                  | no       | `{}`        | _props for material-ui_    |

#### Select Entry

#### Radio Entry

#### Shared Props

| prop                  | type                                                                  | required | default     | note                                   |
| --------------------- | --------------------------------------------------------------------- | -------- | ----------- | -------------------------------------- |
| initialValue          | T[string]                                                             | yes      | -           | _initial value of element_             |
| position              | number                                                                | no       | `0`         | _position of element in rendered form_ |
| validation            | [Validation](https://github.com/lindeneg/cl-use-form-state#cl)        | no       | `{}`        | _validation options_                   |
| label                 | string                                                                | no       | `""`        | _element text label_                   |
| required              | boolean                                                               | no       | `false`     | _visually shows element as required_   |
| fullWidth             | boolean                                                               | no       | `false`     | _element expands full container width_ |
| disabled              | boolean                                                               | no       | `false`     | _disables element_                     |
| validEl               | string \| React.ReactElement                                          | no       | `undefined` | _element to be shown on valid state_   |
| errorEl               | string \| React.ReactElement                                          | no       | `undefined` | _element to be shown on invalid state_ |
| helperEl              | string \| React.ReactElement                                          | no       | `undefined` | _element to be shown on neutral state_ |
| wrapperStyle          | React.CSSProperties                                                   | no       | `undefined` | _styles for element wrapper div_       |
| muiFormControlOpts    | [FormControlProps](https://v4.mui.com/api/form-control/#props)        | no       | `undefined` | _props for material-ui_                |
| muiFormHelperTextOpts | [FormHelperTextProps](https://v4.mui.com/api/form-helper-text/#props) | no       | `undefined` | _props for material-ui_                |

---

### onFormSubmit
