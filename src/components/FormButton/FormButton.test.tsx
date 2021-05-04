import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import FormButton from './FormButton';

describe('Button', () => {
    test('renders a default button', async () => {
        render(<FormButton />);

        expect(screen.getByText('SUBMIT')).toBeInTheDocument();
        expect(screen.getByText('SUBMIT')).toHaveStyle({
            backgroundColor: '#343a40',
            color: '#fff'
        });
    });
    test('renders a light button with custom text', async () => {
        render(<FormButton variant="light" buttonText="Click me" />);

        expect(screen.getByText('Click me')).toHaveStyle({
            backgroundColor: '#fff',
            color: '#343a40'
        });
    });
    test('renders a button with custom styles', async () => {
        render(<FormButton baseStyles={{ backgroundColor: '#007bff', borderRadius: '15px' }} />);

        expect(screen.getByText('SUBMIT')).toHaveStyle({
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '15px'
        });
    });
    test('renders a disabled button', async () => {
        render(<FormButton disabled />);

        expect(screen.getByText('SUBMIT')).toHaveStyle({
            opacity: '.65',
            cursor: 'not-allowed'
        });

        expect(screen.getByText('SUBMIT')).toHaveAttribute('disabled');
    });
    test('handles onClick', async () => {
        const mockOnClick = jest.fn();
        render(<FormButton onClick={mockOnClick} />);
        fireEvent.click(screen.getByText('SUBMIT'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
