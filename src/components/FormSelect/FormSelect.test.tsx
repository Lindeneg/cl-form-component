import React from 'react';
import { render, fireEvent, queryByAttribute } from '@testing-library/react';

import FormSelect from './FormSelect';

describe('Select', () => {
    test('renders a default select field', async () => {
        const dom = render(<FormSelect id="test-id" />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target).toBeInTheDocument();
        expect(target).toHaveStyle({
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(52, 58, 64)'
        });
    });
    test('renders a default dark select field', async () => {
        const dom = render(<FormSelect id="test-id" variant="dark" />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target).toBeInTheDocument();
        expect(target).toHaveStyle({
            backgroundColor: 'rgb(52, 58, 64)',
            color: 'rgb(255, 255, 255)'
        });
    });
    test('renders a select field with entries', async () => {
        const dom = render(<FormSelect id="test-id" selectOptions={['Hello', 'There']} />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target?.children.length).toBe(2);
        expect(target).toHaveValue('Hello');
    });
    test('handles select on click', async () => {
        const mockOnClick = jest.fn();
        const dom = render(<FormSelect id="test-id" onClick={mockOnClick} />);
        const target = queryByAttribute('id', dom.container, 'test-id');
        target && fireEvent.click(target);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    test('handles select on change', async () => {
        const mockOnClick = jest.fn();
        const dom = render(<FormSelect id="test-id" onChange={mockOnClick} />);
        const target = queryByAttribute('id', dom.container, 'test-id');
        target && fireEvent.change(target);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
