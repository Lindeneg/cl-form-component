import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormInput, { FormInputProps } from './FormInput';

export default {
    title: 'FormInput',
    component: FormInput,
    description: `Form input element.`,
    argTypes: {
        id: { control: 'text', description: 'id attribute for html element' },
        variant: { options: ['dark', 'light'] },
        value: { control: 'text', description: 'input text value' },
        label: { control: 'text', description: 'input text label' },
        placeholder: { control: 'text', description: 'placeholder text value' },
        helperText: { control: 'text', description: 'helper text for input field' },
        validFeedback: { control: 'text', description: 'text feedback on valid field' },
        invalidFeedback: { control: 'text', description: 'text feedback on invalid field' },
        isValid: { control: 'boolean' },
        isInvalid: { control: 'boolean' }
    }
} as Meta;

const MetaInput: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const DefaultInput = MetaInput.bind({});
DefaultInput.args = {};

export const InputWithLabel = MetaInput.bind({});
InputWithLabel.args = {
    id: 'element-id-1',
    label: 'Username',
    placeholder: 'Enter username..'
};

export const InputWithHelper = MetaInput.bind({});
InputWithHelper.args = {
    id: 'element-id-2a',
    label: 'Username',
    placeholder: 'Enter username..',
    helperText: 'username must be between 4-12 characters'
};

export const DarkInputWithHelper = MetaInput.bind({});
DarkInputWithHelper.args = {
    id: 'element-id-2b',
    variant: 'dark',
    label: 'Username',
    placeholder: 'Enter username..',
    helperText: 'username must be between 4-12 characters'
};
DarkInputWithHelper.parameters = {
    backgrounds: { default: 'dark' }
};

export const InputWithValidValue = MetaInput.bind({});
InputWithValidValue.args = {
    id: 'element-id-3a',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'lindeneg',
    isValid: true
};

export const DarkInputWithValidValue = MetaInput.bind({});
DarkInputWithValidValue.args = {
    id: 'element-id-3b',
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
    id: 'element-id-4a',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'lindeneg',
    isValid: true,
    validFeedback: 'Looks good!'
};

export const DarkInputWithValidFeedback = MetaInput.bind({});
DarkInputWithValidFeedback.args = {
    id: 'element-id-4b',
    variant: 'dark',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'lindeneg',
    isValid: true,
    validFeedback: 'Looks good!'
};
DarkInputWithValidFeedback.parameters = {
    backgrounds: { default: 'dark' }
};

export const InputWithInvalidValue = MetaInput.bind({});
InputWithInvalidValue.args = {
    id: 'element-id-5a',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'christian lindeneg',
    isInvalid: true
};

export const DarkInputWithInvalidValue = MetaInput.bind({});
DarkInputWithInvalidValue.args = {
    id: 'element-id-5b',
    variant: 'dark',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'christian lindeneg',
    isInvalid: true
};
DarkInputWithInvalidValue.parameters = {
    backgrounds: { default: 'dark' }
};

export const InputWithInvalidFeedback = MetaInput.bind({});
InputWithInvalidFeedback.args = {
    id: 'element-id-6a',
    label: 'Username',
    helperText: 'Username must be between 4-12 characters',
    value: 'christian lindeneg',
    isInvalid: true,
    invalidFeedback: 'Please enter a valid username.'
};

export const DarkInputWithInvalidFeedback = MetaInput.bind({});
DarkInputWithInvalidFeedback.args = {
    id: 'element-id-6b',
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
