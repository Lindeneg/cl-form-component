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

## Components

### Form

| prop          | type                                                                                                                                 | required | default   | note                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- | --------------------------------------- |
| entries       | [Entries](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#entries)                                          | yes  | -         | _object with inputs and options_        |
| onFormSubmit  | [Function](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#onformsubmit)                                    | yes  | -         | _state always passed on as an argument_ |
| header        | string \| React.ReactElement                                                                                                         | no       | undefined | _form header label or element_          |
| submitBtnOpts | [ButtonProps](https://v4.mui.com/api/button/) & { text?: string; disableOnInvalidForm?: boolean; resetFormOnValidSubmit?: boolean; } | no       | undefined | _submit button props_                   |
| wrapperClass  | string                                                                                                                               | no       | undefined | _className for div form wrapper_        |
| wrapperStyle  | React.CSSProperties                                                                                                                  | no       | undefined | _styles for div form wrapper_           |
| formClass     | string                                                                                                                               | no       | undefined | _className for form element_            |
| formStyle     | React.CSSProperties                                                                                                                  | no       | undefined | _styles for form element_               |

---

### Entries

##### Input

##### Checkbox | Switch

##### Select

##### Radio

---

### onFormSubmit
