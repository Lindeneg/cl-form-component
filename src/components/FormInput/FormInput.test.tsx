import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import FormInput from './FormInput';

describe('Input', () => {
    test('renders a default input field', async () => {
        const dom = render(<FormInput id="test-id" />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target).toBeInTheDocument();
        expect(target).toHaveStyle({
            outlineColor: 'rgb(0, 123, 255)',
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(52, 58, 64)'
        });
    });
    test('renders a dark input field with placeholder', async () => {
        const dom = render(<FormInput variant="dark" id="test-id" placeholder="write something" />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target).toHaveStyle({
            backgroundColor: 'rgb(52, 58, 64)',
            color: 'rgb(255, 255, 255)'
        });
        expect(target).toHaveAttribute('placeholder', 'write something');
    });
    test('renders a valid input field', async () => {
        render(<FormInput isValid id="test-id" validFeedback="Text is valid" />);

        expect(screen.getByText('Text is valid')).toBeInTheDocument();
        expect(screen.getByText('Text is valid')).toHaveStyle({
            color: 'rgb(40, 167, 69)'
        });
    });

    test('renders an invalid input field', async () => {
        render(<FormInput isInvalid id="test-id" invalidFeedback="Text is invalid" />);

        expect(screen.getByText('Text is invalid')).toBeInTheDocument();
        expect(screen.getByText('Text is invalid')).toHaveStyle({
            color: 'rgb(235, 87, 101)'
        });
    });
});
