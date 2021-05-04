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

const MetaSelect: Story<FormSelectProps> = (args) => <FormSelect {...args} />;

export const DefaultSelect = MetaSelect.bind({});
DefaultSelect.args = {};

export const SelectWithEntriesWithoutOptions = MetaSelect.bind({});
SelectWithEntriesWithoutOptions.args = {
    label: 'Favourite Car',
    selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren']
};

export const SelectWithEntriesAndOptions = MetaSelect.bind({});
SelectWithEntriesAndOptions.args = {
    label: 'Favourite Cars',
    helperText: 'Multiple cars can be selected',
    multipleSelect: true,
    selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren'],
    value: []
};

export const ValidSelectWithEntries = MetaSelect.bind({});
ValidSelectWithEntries.args = {
    label: 'Favourite Cars',
    helperText: 'Multiple cars can be selected',
    multipleSelect: true,
    selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren'],
    value: ['Porsche', 'Mercedes'],
    isValid: true,
    validFeedback: 'Looks good!'
};

export const InvalidSelectWithEntries = MetaSelect.bind({});
InvalidSelectWithEntries.args = {
    label: 'Favourite Cars',
    helperText: 'Multiple cars can be selected',
    multipleSelect: true,
    selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren'],
    value: [],
    isInvalid: true,
    invalidFeedback: 'Please pick a car!'
};

export const DarkSelectWithEntriesAndOptions = MetaSelect.bind({});
DarkSelectWithEntriesAndOptions.args = {
    label: 'Favourite Cars',
    helperText: 'Multiple cars can be selected',
    multipleSelect: true,
    selectOptions: ['Porsche', 'Aston Martin', 'Mercedes', 'Ferrari', 'McLaren'],
    value: [],
    variant: 'dark'
};
DarkSelectWithEntriesAndOptions.parameters = {
    backgrounds: { default: 'dark' }
};
