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
    onCancel: undefined
};

export const FormSelectInput = MetaForm.bind({});
FormSelectInput.args = {
    entries: {
        car: {
            multipleSelect: true,
            elementType: 'selection',
            selectOptions: [
                {
                    value: 'volvo'
                },
                {
                    value: 'porche'
                },
                {
                    value: 'mercedes'
                },
                {
                    value: 'fiat'
                },
                {
                    value: 'ferrai'
                },
                {
                    value: 'mclaren'
                }
            ],
            invalidFeedback: 'A car is required. Please pick one.',
            validFeedback: 'Looks good',
            helperText: 'multiple cars can be selected',
            noValidation: true
        }
    },
    headerText: 'Favourite Cars',
    onCancel: undefined
};

export const FormSelectInput2 = MetaForm.bind({});
FormSelectInput2.args = {
    entries: {
        car2: {
            multipleSelect: true,
            elementType: 'selection',
            selectOptions: [
                {
                    value: 'volvo'
                },
                {
                    value: 'porche'
                },
                {
                    value: 'mercedes'
                },
                {
                    value: 'fiat'
                },
                {
                    value: 'ferrai'
                },
                {
                    value: 'mclaren'
                }
            ],
            invalidFeedback: 'A car is required. Please pick one.',
            validFeedback: 'Looks good',
            helperText: 'multiple cars can be selected',
            options: {
                minLength: 3
            }
            //noValidation: true
        }
    },
    headerText: 'Favourite Cars',
    onCancel: undefined
};

export const FormSelectInput3 = MetaForm.bind({});
FormSelectInput3.args = {
    entries: {
        car3: {
            elementType: 'selection',
            selectOptions: [
                {
                    value: 'volvo'
                },
                {
                    value: 'porche'
                },
                {
                    value: 'mercedes'
                },
                {
                    value: 'fiat'
                },
                {
                    value: 'ferrai'
                },
                {
                    value: 'mclaren'
                }
            ]
        }
    },
    headerText: 'Favourite Car',
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

export const CenteredImageUploadFormWithValidationAndCancelButton = MetaForm.bind({});
CenteredImageUploadFormWithValidationAndCancelButton.args = {
    entries: {
        imageFile: {
            center: true,
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
    headerText: 'Upload Image'
};
