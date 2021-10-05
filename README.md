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

Check out full documentation [here](https://github.com/Lindeneg/cl-form-component/blob/master/docs/README.md).

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
