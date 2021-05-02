import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormImage, { FormImageProps } from './FormImage';

export default {
    title: 'FormImage',
    component: FormImage,
    description: `Form image upload element.`,
    argTypes: {
        variant: { control: 'none' },
        onChange: { control: 'none' },
        onBlur: { control: 'none' }
    }
} as Meta;

const MetaImage: Story<FormImageProps> = (args) => <FormImage {...args} />;

export const DefaultFormImage = MetaImage.bind({});
DefaultFormImage.args = {};

export const FormImageWithLabelAndHelper = MetaImage.bind({});
FormImageWithLabelAndHelper.args = {
    label: 'Profile Picture',
    ImagepreviewText: 'Preview',
    helperText: 'must be .png, .jpg or .jpeg'
};

export const CenteredDarkFormImageWithHelper = MetaImage.bind({});
CenteredDarkFormImageWithHelper.args = {
    ImagepreviewText: 'Please upload an image',
    helperText: 'must be .png, .jpg or .jpeg',
    variant: 'dark',
    center: true
};
CenteredDarkFormImageWithHelper.parameters = {
    backgrounds: { default: 'dark' }
};
