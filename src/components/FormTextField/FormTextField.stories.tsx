import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormTextField, { FormTextFieldProps } from './FormTextField';

export default {
    title: 'FormTextField',
    component: FormTextField,
    description: `Form <textarea /> element.`,
    argTypes: {
        id: { control: 'text', description: 'id attribute for html element' },
        isValid: { control: 'boolean', description: 'field is valid' },
        isInvalid: { control: 'boolean', description: 'field is invalid' },
        noValidation: { control: 'boolean', description: 'field has no validation' },
        variant: { options: ['dark', 'light'], description: 'theme variant of the input field' },
        wrap: {
            options: ['hard', 'soft'],
            description: 'rule for wrapping of text when submitted.'
        },
        value: { control: 'text', description: 'input text value' },
        label: { control: 'text', description: 'input text label' },
        width: { control: 'text', description: 'width of the input element' },
        placeholder: { control: 'text', description: 'placeholder text value' },
        helperText: { control: 'text', description: 'helper text for input field' },
        validFeedback: { control: 'text', description: 'text feedback on valid field' },
        invalidFeedback: { control: 'text', description: 'text feedback on invalid field' },
        onChange: { control: 'none' },
        onBlur: { control: 'none' },
        rows: { control: null },
        cols: { control: null }
    }
} as Meta;

const MetaInput: Story<FormTextFieldProps> = (args) => <FormTextField {...args} />;

export const DefaultTextField = MetaInput.bind({});
DefaultTextField.args = {};

export const DarkTextFieldHalfSize = MetaInput.bind({});
DarkTextFieldHalfSize.args = {
    label: 'Description',
    variant: 'dark',
    rows: 2,
    width: '50%',
    helperText: 'Please write a description'
};
DarkTextFieldHalfSize.parameters = {
    backgrounds: { default: 'dark' }
};

export const TextFieldValid = MetaInput.bind({});
TextFieldValid.args = {
    label: 'Description',
    value:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratn',
    helperText: 'Please write a description',
    isValid: true
};

export const TextFieldValidFeedback = MetaInput.bind({});
TextFieldValidFeedback.args = {
    label: 'Description',
    value:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratn',
    helperText: 'Please write a description',
    validFeedback: 'Looks great!',
    isValid: true
};

export const TextFieldInvalid = MetaInput.bind({});
TextFieldInvalid.args = {
    label: 'Description',
    value: 'Lorem ipsum',
    helperText: 'Please write a description',
    isInvalid: true
};

export const TextFieldInvalidFeedback = MetaInput.bind({});
TextFieldInvalidFeedback.args = {
    label: 'Description',
    value: 'Lorem ipsum',
    helperText: 'Please write a description',
    isInvalid: true,
    invalidFeedback: 'Description must at least be 32 characters'
};
