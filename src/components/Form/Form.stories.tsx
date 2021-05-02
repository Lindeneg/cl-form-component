import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Form, { FormProps } from './Form';

export default {
    title: 'Form',
    component: Form,
    description: `Form Component.`,
    argTypes: {
        variant: { options: ['dark', 'light'] }
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
    onSubmit: (e) => {
        console.log(e);
        alert('Check console for submission result');
    },
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
    onSubmit: (e) => {
        console.log(e);
        alert('Check console for submission result');
    },
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
    onSubmit: (e) => {
        console.log(e);
        alert('Check console for submission result');
    },
    onCancel: undefined
};
DarkLoginFormWithValidation.parameters = {
    backgrounds: { default: 'dark' }
};

export const ImageUploadFormWithValidationAndCancelButton = MetaForm.bind({});
ImageUploadFormWithValidationAndCancelButton.args = {
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
            invalidFeedback: '8-128 characters',
            validFeedback: 'Looks Ok!',
            options: {
                minLength: 8,
                maxLength: 128
            }
        }
    },
    headerText: 'Upload Image',
    onSubmit: (e) => {
        console.log(e);
        alert('Check console for submission result');
    },
    onCancel: () => alert('onCancel called')
};

export const DarkCenteredImageUploadFormWithValidationAndCancelButton = MetaForm.bind({});
DarkCenteredImageUploadFormWithValidationAndCancelButton.args = {
    entries: {
        imageFile2: {
            helperText: 'Must be type .png, .jpg or .jpeg',
            invalidFeedback: 'An image is required',
            validFeedback: 'Looks Ok!',
            elementType: 'image',
            center: true
        },
        imageDescription2: {
            elementType: 'text-field',
            placeholder: 'Enter description...',
            label: 'Please provide a description',
            invalidFeedback: '8-128 characters',
            validFeedback: 'Looks Ok!',
            options: {
                minLength: 8,
                maxLength: 128
            }
        }
    },
    variant: 'dark',
    headerText: 'Upload Image',
    onSubmit: (e) => {
        console.log(e);
        alert('Check console for submission result');
    },
    onCancel: () => alert('onCancel called')
};
DarkCenteredImageUploadFormWithValidationAndCancelButton.parameters = {
    backgrounds: { default: 'dark' }
};
