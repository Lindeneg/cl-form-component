import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FormButton, { FormButtonProps } from './FormButton';

export default {
    title: 'FormButton',
    component: FormButton,
    description: `A form button.`,
    argTypes: {
        type: { options: ['button', 'submit', 'reset'] },
        variant: { options: ['dark', 'light'] },
        className: { control: 'text', description: 'optional css class' },
        buttonText: { control: 'text' },
        disableDefaultStyles: { control: 'boolean', description: 'disables all default styling' },
        disabled: { control: 'boolean', description: 'disable button actions' },
        baseStyles: { control: 'object', description: 'custom base css, overwrites default.' },
        hoverStyles: { control: 'object', description: 'custom hover css, overwrites default.' }
    }
} as Meta;

const MetaButton: Story<FormButtonProps> = (args) => <FormButton {...args} />;

export const DefaultButton = MetaButton.bind({});
DefaultButton.args = {};

export const DisabledDefaultButton = MetaButton.bind({});
DisabledDefaultButton.args = {
    disabled: true
};

export const DefaultLightButton = MetaButton.bind({});
DefaultLightButton.args = {
    variant: 'light'
};

export const BorderedLightButton = MetaButton.bind({});
BorderedLightButton.args = {
    variant: 'light',
    baseStyles: { border: '1px solid #343a40' }
};

export const CustomTextButton = MetaButton.bind({});
CustomTextButton.args = {
    buttonText: 'Custom Button Text'
};

export const CustomButton = MetaButton.bind({});
CustomButton.args = {
    baseStyles: {
        backgroundColor: '#007bff',
        borderRadius: '15px'
    },
    hoverStyles: {
        backgroundColor: '#115dad',
        color: '#23eb51'
    }
};

export const ClickButton = MetaButton.bind({});
ClickButton.args = {
    buttonText: 'Click here',
    onClick: () => alert('You clicked..')
};

export const UnstyledButton = MetaButton.bind({});
UnstyledButton.args = {
    disableDefaultStyles: true
};
