import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

describe('Form', () => {
    test('renders empty form', async () => {
        const dom = render(<Form wrapperId="test-form" entries={{}} onSubmit={() => null} />);
        const target = queryByAttribute('id', dom.container, 'test-form');

        expect(target).toBeInTheDocument();
        expect(target).toHaveStyle({
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(52, 58, 64)'
        });
    });
    test('renders dark empty form', async () => {
        const dom = render(
            <Form wrapperId="test-form" variant="dark" entries={{}} onSubmit={() => null} />
        );
        const target = queryByAttribute('id', dom.container, 'test-form');

        expect(target).toHaveStyle({
            backgroundColor: 'rgb(52, 58, 64)',
            color: 'rgb(255, 255, 255)'
        });
    });
    test('renders form with entries', async () => {
        render(
            <Form
                wrapperId="test-form"
                entries={{ username: { label: 'Username' }, password: { label: 'Password' } }}
                onSubmit={() => null}
            />
        );
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
    });
    test('handles on submit', async () => {
        const mockOnClick = jest.fn();
        render(<Form entries={{}} onSubmit={mockOnClick} />);
        fireEvent.click(screen.getByText('SUBMIT'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    test('handles on cancel', async () => {
        const mockOnClick = jest.fn();
        render(<Form entries={{}} onSubmit={() => null} onCancel={mockOnClick} />);
        fireEvent.click(screen.getByText('CANCEL'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    test('handles on change', async () => {
        const dom = render(
            <Form
                wrapperId="test-form"
                entries={{
                    username: { placeholder: 'Username' }
                }}
                onSubmit={() => null}
            />
        );
        const username = queryByAttribute('id', dom.container, 'username');
        username && userEvent.type(username, 'test');

        expect(username).toHaveValue('test');
    });
    test('handles validation', async () => {
        const dom = render(
            <Form
                wrapperId="test-form"
                entries={{
                    username: {
                        placeholder: 'Username',
                        validFeedback: 'valid user input',
                        invalidFeedback: 'invalid user input',
                        options: { minLength: 4, isTouched: true }
                    }
                }}
                onSubmit={() => null}
            />
        );
        const username = queryByAttribute('id', dom.container, 'username');

        expect(screen.getByText('invalid user input')).toBeInTheDocument();

        username && userEvent.type(username, 'te');

        expect(username).toHaveValue('te');
        expect(screen.getByText('invalid user input')).toBeInTheDocument();

        username && userEvent.type(username, 'st');

        expect(username).toHaveValue('test');
        expect(screen.getByText('valid user input')).toBeInTheDocument();
    });
});
