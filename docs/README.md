### Form

Props for the `<Form />` component exposed by this library.

| prop             | type                                                                    | required  | default     | note                                               |
| ---------------- | ----------------------------------------------------------------------- | --------- | ----------- | -------------------------------------------------- |
| `entries`        | [Entries](https://github.com/lindeneg/cl-form-component/docs#Entries)   | `Yes`     | -           | object with inputs and options                     |
| `onSubmit`       | [Function](https://github.com/lindeneg/cl-form-component/docs#onSubmit) | `Yes`     | -           | submission result always passed on as an argument  |
| `onCancel`       | `Function`                                                              | `No`      | `undefined` | -                                                  |
| `width`          | `string`                                                                | `No`      | `undefined` | width of the form, such as '100px'                 |
| `headerText`     | `string`                                                                | `No`      | `undefined` | text used by the form header                       |
| `cancelText`     | `string`                                                                | `No`      | `'CANCEL'`  | text used by the form cancel button                |
| `submissionText` | `string`                                                                | `No`      | `'SUBMIT'`  | text used by the form submit button                |
| `variant`        | `'dark'                                                                 | 'light' ` | `No`        | `'light'`                                          |
| `resetOnSubmit`  | `boolean`                                                               | `No`      | `false`     | if true, all input values are reset on form submit |

---

### Entries

`Entries` is an object where inputs and associated options can be defined. A bare-minimum `Entries` object without any options could be like so:

`{username: {}}`

However, that isn't much fun. Lets look at some options!

There are four input elements supported `'input' | 'text-field' | 'selection' | 'image'` and while they each offer their own options, they all have the following in common:

| name              | type                                                                              | required     | default     | note                                                                                                        |
| ----------------- | --------------------------------------------------------------------------------- | ------------ | ----------- | ----------------------------------------------------------------------------------------------------------- | ----- | --------- | ---- | ---------------------------- |
| `elementType`     | `'input'                                                                          | 'text-field' | 'selection' | 'image'`                                                                                                    | `No`  | `'input'` | -    |
| `value`           | `string                                                                           | number       | boolean     | string[]                                                                                                    | File` | `No`      | `''` | initial value of the element |
| `options`         | [GetInputOptions](https://github.com/Lindeneg/cl-use-form-state#getinput-options) | `No`         | `undefined` | validation options from [cl-use-form-state](https://github.com/Lindeneg/cl-use-form-state#getinput-options) |
| `label`           | `string`                                                                          | `No`         | `undefined` | text label appearing over the input                                                                         |
| `placeholder`     | `string`                                                                          | `No`         | `undefined` | text appearing in the input (if applicable)                                                                 |
| `helperText`      | `string`                                                                          | `No`         | `undefined` | text appearing under the input                                                                              |
| `validFeedback`   | `string`                                                                          | `No`         | `undefined` | text appearing when input is valid                                                                          |
| `invalidFeedback` | `string`                                                                          | `No`         | `undefined` | text appearing when input is invalid                                                                        |
| `width`           | `string`                                                                          | `No`         | `undefined` | width of the input, such as '20%'                                                                           |
| `noValidation`    | `boolean`                                                                         | `No`         | `false`     | turn off all validation for input                                                                           |

So know we can add, say, a label, a placeholder and some validation to that username entry:

```ts
{
    username: {
        placeholder: 'Enter Username',
        label: 'Username',
        helperText: '4-16 characters with no numbers',
        invalidFeedback: 'Please enter a valid username.',
        validFeedback: 'Looks ok!',
        options: {
            minLength: 4,
            maxLength: 16,
            maxNumericalSymbols: 0
        }
    }
}

```

---

### Specific Options

Here's a overview of the individual options each `elementType` takes.

| elementType      | name               | type                    | required   | default                     | note                                                           |
| ---------------- | ------------------ | ----------------------- | ---------- | --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------- | -------- | ---------------------------------------------------- |
| **`input`**      | -                  | -                       | -          | -                           | -                                                              |
| -                | `type`             | `'text'                 | 'password' | 'number'                    | 'email'`                                                       | `No`                                                    | `'text'` | `type` attribute passed on to the html input element |
| **`text-field`** | -                  | -                       | -          | -                           | -                                                              |
| -                | `rows`             | `number`                | `No`       | `3`                         | `rows` attribute passed on to the html textarea element        |
| -                | `cols`             | `number`                | `No`       | `1`                         | `cols` attribute passed on to the html textarea element        |
| -                | `wrap`             | `'soft'                 | 'hard'`    | `No`                        | `undefined`                                                    | `wrap` attribute passed on to the html textarea element |
| **`image`**      | -                  | -                       | -          | -                           | -                                                              |
| -                | `imagePreviewText` | `string`                | `No`       | `'Please choose an image.'` | text shown in the preview div before image upload              |
| -                | `imageButtonText`  | `string`                | `No`       | `'UPLOAD'`                  | text shown in the image upload button                          |
| -                | `center`           | `boolean`               | `No`       | `false`                     | if true, image upload will be centered relative to the form    |
| **`selection`**  | -                  | -                       | -          | -                           | -                                                              |
| -                | `selectOptions`    | `Array<FormSelectOption | string>`   | `No`                        | `undefined`                                                    | -                                                       |
| -                | `multipleSelect`   | `boolean`               | `No`       | `false`                     | allows the selection of multiple `selectOption` entries        |
| -                | `center`           | `boolean`               | `No`       | `false`                     | if true, selection input will be centered relative to the form |

---

### FormSelectOption

`FormSelectOption` are the `<option />` values for the `selection` element type.

| name         | type    | required | default   | note |
| ------------ | ------- | -------- | --------- | ---- |
| value        | string  | Yes      | -         | -    |
| displayValue | string  | No       | undefined | -    |
| selected     | boolean | No       | false     | -    |

Thus, `selection` options can be created either by using a string array or by using a `FormSelectOption` object, which allows for the above options.

So lets say we want to add a `selection` to the `Entries` object we created before with `username`.

```ts
{
    username: {
        placeholder: 'Enter Username',
        label: 'Username',
        helperText: '4-16 characters with no numbers',
        invalidFeedback: 'Please enter a valid username.',
        validFeedback: 'Looks ok!',
        options: {
            minLength: 4,
            maxLength: 16,
            maxNumericalSymbols: 0
        }
    },
    mood: {
        elementType: 'selection',
        selectOptions: ['Happy', 'Content', 'Over the Moon!']
    }
}
```

Suppose we want `Content` as the default selected value. Then we can make use of the `FormSelectOption` object.

```ts
{
    username: {
        placeholder: 'Enter Username',
        label: 'Username',
        helperText: '4-16 characters with no numbers',
        invalidFeedback: 'Please enter a valid username.',
        validFeedback: 'Looks ok!',
        options: {
            minLength: 4,
            maxLength: 16,
            maxNumericalSymbols: 0
        }
    },
    mood: {
        elementType: 'selection',
        selectOptions: [
            'Happy',
            {
                value: 'Content',
                selected: true
            },
            'Over the Moon!'
        ]
    }
}
```

---

### onSubmit

`onSubmit` is called when a form satisfying the given validation option is submitted. It **requires** one argument, lets call it `result`.

The `result` argument is an object with input names as keys and its value at submission time as value.

In other words, if the above `Entries` object is what is used to create the `<Form />` then `result` will be something like this:

`{username: 'someValue', mood: 'Content'}`

---

### Stories

Play around with some stories using StoryBook [here](https://lindeneg.github.io/cl-form-component).