import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Form, { FormProps } from './Form';

export default {
    title: 'Form',
    component: Form,
    description: `Form Component.`,
    argTypes: {}
} as Meta;

// TODO

const MetaInput: Story<FormProps<Record<string, never>>> = (args) => <Form {...args} />;

export const DefaultInput = MetaInput.bind({});
DefaultInput.args = {
    entries: {
        hello: {
            value: '',
            placeholder: 'Enter Username',
            label: 'Username',
            helperText: 'minimum 3 characters',
            options: {
                minLength: 3
            }
        },
        there: {
            value: '',
            type: 'password',
            placeholder: 'Enter Password',
            label: 'Password',
            helperText: 'must be 12 characters long',
            options: {
                minLength: 12
            }
        }
    },
    onSubmit: (e) => alert(JSON.stringify(e)),
    onCancel: undefined
};
