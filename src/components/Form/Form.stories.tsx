import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Form, { FormProps } from './Form';

export default {
    title: 'Form',
    component: Form,
    description: `Form Component.`,
    argTypes: {
        variant: { options: ['dark', 'light'] },
        onSubmit: { action: 'onSubmit' },
        onCancel: { action: 'onCancel' }
    }
} as Meta;

const MetaForm: Story<FormProps<Record<string, never>>> = (args) => <Form {...args} />;

export const DefaultInput = MetaForm.bind({});
DefaultInput.args = {
    entries: {
        someInput: {
            placeholder: 'Enter something...',
            noValidation: true
        }
    },
    headerText: 'Some Input...',
    onCancel: undefined
};

export const SignupFormWithValidationAndImageUpload = MetaForm.bind({});
SignupFormWithValidationAndImageUpload.args = {
    entries: {
        username: {
            placeholder: 'Enter Username',
            label: 'Username',
            helperText: '4-16 characters with no numbers',
            invalidFeedback: 'Please enter a valid username.',
            options: {
                minLength: 4,
                maxLength: 16,
                maxNumericalSymbols: 0
            }
        },
        image: {
            label: 'Profile Picture (optional)',
            helperText: 'Must be type .png, .jpg or .jpeg',
            elementType: 'image',
            noValidation: true
        },
        password: {
            type: 'password',
            placeholder: 'Enter Password',
            label: 'Password',
            helperText: '8-32 characters with at least one uppercase character',
            invalidFeedback: 'Please enter a valid password.',
            options: {
                minLength: 8,
                maxLength: 32,
                minUppercaseCharacters: 1,
                connectFields: ['passwordConfirmation']
            }
        },
        passwordConfirmation: {
            type: 'password',
            placeholder: 'Enter Password',
            label: 'Confirm Password',
            helperText: 'Please confirm your password',
            invalidFeedback: 'Please confirm a valid password.',
            options: {
                customRule: (value, state) =>
                    state.inputs.password.isValid && value === state.inputs.password.value
            }
        }
    },
    submissionText: 'SIGNUP',
    headerText: 'Please Signup',
    onCancel: undefined
};

export const DarkLoginFormWithValidation = MetaForm.bind({});
DarkLoginFormWithValidation.args = {
    entries: {
        loginUsername: {
            placeholder: 'Enter Username',
            label: 'Username',
            options: {
                minLength: 4,
                maxLength: 16,
                maxNumericalSymbols: 0
            }
        },
        loginPassword: {
            type: 'password',
            placeholder: 'Enter Password',
            label: 'Password',
            options: {
                minLength: 8,
                maxLength: 32,
                minUppercaseCharacters: 1
            }
        }
    },
    submissionText: 'LOGIN',
    headerText: 'Please Login',
    variant: 'dark',
    onCancel: undefined
};
DarkLoginFormWithValidation.parameters = {
    backgrounds: { default: 'dark' }
};

export const ImageUploadWithSelect = MetaForm.bind({});
ImageUploadWithSelect.args = {
    entries: {
        imageFile: {
            helperText: 'Must be type .png, .jpg or .jpeg',
            invalidFeedback: 'An image is required',
            validFeedback: 'Looks Ok!',
            elementType: 'image'
        },
        imageDescription: {
            elementType: 'text-field',
            placeholder: 'Enter description...',
            label: 'Please provide a description',
            invalidFeedback: 'max 128 characters',
            validFeedback: 'Looks Ok!',
            helperText: 'minimum 8 characters',
            options: {
                minLength: 8,
                maxLength: 128
            }
        },
        visibility: {
            elementType: 'selection',
            label: 'Visibility',
            selectOptions: ['Public', 'Private']
        }
    },
    headerText: 'Upload Image'
};

export const SelectWithMultipleOptions = MetaForm.bind({});
SelectWithMultipleOptions.args = {
    entries: {
        name: {
            label: 'Name',
            placeholder: 'Enter here...',
            helperText: 'name required',
            validFeedback: 'Looks Ok!',
            invalidFeedback: 'Please enter your name',
            options: { minLength: 1 }
        },
        cars: {
            label: 'Favourite cars?',
            helperText: 'you can select multiple cars',
            elementType: 'selection',
            multipleSelect: true,
            selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren'],
            options: { minLength: 1, maxLength: 3 },
            invalidFeedback: 'Please select 1-3 cars',
            validFeedback: 'Great choice!'
        }
    },
    headerText: 'Example Form',
    onCancel: undefined
};

export const DarkOptionalŚelectionWithPreSelectedOptions = MetaForm.bind({});
DarkOptionalŚelectionWithPreSelectedOptions.args = {
    entries: {
        nameDark: {
            label: 'Name',
            placeholder: 'Enter here...',
            helperText: 'name optional',
            noValidation: true
        },
        carsDark: {
            label: 'Favourite cars?',
            helperText: 'you can select multiple cars',
            elementType: 'selection',
            multipleSelect: true,
            selectOptions: [
                { value: 'Porsche', selected: true },
                'Aston Martin',
                { value: 'Mercedes', selected: true },
                'Ferrari',
                'McLaren'
            ],
            noValidation: true
        }
    },
    variant: 'dark',
    headerText: 'Example Form',
    onCancel: undefined
};
