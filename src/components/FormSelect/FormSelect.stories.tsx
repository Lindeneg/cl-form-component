import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormSelect, { FormSelectProps } from './FormSelect';

export default {
    title: 'FormSelect',
    component: FormSelect,
    description: `A form dropdown/select element.`,
    argTypes: {
        variant: { options: ['dark', 'light'] },
        onChange: { control: 'none' },
        onBlur: { control: 'none' },
        onClick: { control: 'none' }
    }
} as Meta;

// TODO

const MetaSelect: Story<FormSelectProps> = (args) => <FormSelect {...args} />;

export const DefaultSelect = MetaSelect.bind({});
DefaultSelect.args = {
    selectOptions: [
        {
            value: 'hello'
        },
        {
            value: 'there'
        }
    ]
};
