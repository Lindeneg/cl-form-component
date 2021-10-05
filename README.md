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

| prop            | type                                                                                                                                   | required | default     | note                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | ------------------------------------------------- | --- |
| `entries`       | [Entries](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#entries)                                            | `Yes`    | -           | object with inputs and options                    |
| `onFormSubmit`  | [Function](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md#onformsubmit)                                      | `Yes`    | -           | submission result always passed on as an argument |     |
| `header`        | `string \| React.ReactElement`                                                                                                         | `No`     | `undefined` | form header label or element                      |
| `submitBtnOpts` | [ButtonProps](https://v4.mui.com/api/button/) `& { text?: string; disableOnInvalidForm?: boolean; resetFormOnValidSubmit?: boolean; }` | `No`     | `undefined` | submit button props                               |
| `wrapperClass`  | `string`                                                                                                                               | `No`     | `undefined` | className for div form wrapper                    |
| `wrapperStyle`  | `React.CSSProperties`                                                                                                                  | `No`     | `undefined` | styles for div form wrapper                       |
| `formClass`     | `string`                                                                                                                               | `No`     | `undefined` | className for form element                        |
| `formStyle`     | `React.CSSProperties`                                                                                                                  | `No`     | `undefined` | styles for form element                           |

---

### Entries

##### Input

##### Checkbox | Switch

##### Select

##### Radio

---

### onFormSubmit
