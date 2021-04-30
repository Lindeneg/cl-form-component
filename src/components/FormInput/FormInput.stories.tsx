import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormInput, { FormInputProps } from './FormInput';

export default {
    title: 'FormInput',
    component: FormInput,
    description: `Form <input /> element.`,
    argTypes: {
        id: { control: 'text', description: 'id attribute for html element' },
        variant: { options: ['dark', 'light'], description: 'theme variant of the input field' },
        type: { options: ['text', 'number', 'password', 'email', 'file'] },
        value: { control: 'text', description: 'input text value' },
        width: { control: 'text', description: 'width of the input element' },
        label: { control: 'text', description: 'input text label' },
        placeholder: { control: 'text', description: 'placeholder text value' },
        helperText: { control: 'text', description: 'helper text for input field' },
        validFeedback: { control: 'text', description: 'text feedback on valid field' },
        invalidFeedback: { control: 'text', description: 'text feedback on invalid field' },
        onChange: { control: 'none', description: 'called when value changes' },
        onBlur: { control: 'none', description: 'called when field is touched and then left' }
    }
} as Meta;

const MetaInput: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const DefaultInput = MetaInput.bind({});
DefaultInput.args = {};

export const InputWithLabel = MetaInput.bind({});
InputWithLabel.args = {
    label: 'Username',
    placeholder: 'Enter username..'
};

export const InputWithHelper = MetaInput.bind({});
InputWithHelper.args = {
    label: 'Username',
    placeholder: 'Enter username..',
    helperText: 'username must be between 4-12 characters'
};

export const DarkInputWithValidValue = MetaInput.bind({});
DarkInputWithValidValue.args = {
    variant: 'dark',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'lindeneg',
    isValid: true
};
DarkInputWithValidValue.parameters = {
    backgrounds: { default: 'dark' }
};

export const InputWithValidFeedback = MetaInput.bind({});
InputWithValidFeedback.args = {
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'lindeneg',
    isValid: true,
    validFeedback: 'Looks good!'
};

export const InputWithInvalidValue = MetaInput.bind({});
InputWithInvalidValue.args = {
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'christian lindeneg',
    isInvalid: true
};

export const DarkInputWithInvalidFeedback = MetaInput.bind({});
DarkInputWithInvalidFeedback.args = {
    variant: 'dark',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'christian lindeneg',
    isInvalid: true,
    invalidFeedback: 'Please enter a valid username.'
};
DarkInputWithInvalidFeedback.parameters = {
    backgrounds: { default: 'dark' }
};
