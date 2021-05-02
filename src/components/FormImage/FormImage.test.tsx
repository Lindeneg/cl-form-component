import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import FormImage from './FormImage';

describe('Image', () => {
    test('renders a default image field', async () => {
        const dom = render(<FormImage id="test-id" />);
        const target = queryByAttribute('id', dom.container, 'test-id');

        expect(target).toBeInTheDocument();
        expect(target).toHaveAttribute('type', 'file');
        expect(target).toHaveAttribute('accept', '.jpg,.jpeg,.png');
    });
    test('renders light image preview text', async () => {
        render(<FormImage ImagepreviewText="preview" id="test-id" />);

        expect(screen.getByText('preview')).toBeInTheDocument();
        expect(screen.getByText('preview')).toHaveStyle({
            color: 'rgb(73, 80, 87)'
        });
    });
    test('renders dark image preview text', async () => {
        render(<FormImage ImagepreviewText="preview" variant="dark" id="test-id" />);

        expect(screen.getByText('preview')).toBeInTheDocument();
        expect(screen.getByText('preview')).toHaveStyle({
            color: 'rgb(255, 255, 255)'
        });
    });
    test('renders light image upload button', async () => {
        render(<FormImage ImagebuttonText="upload" id="test-id" />);

        expect(screen.getByText('upload')).toBeInTheDocument();
        expect(screen.getByText('upload')).toHaveAttribute('type', 'button');
        expect(screen.getByText('upload')).toHaveStyle({
            backgroundColor: 'rgb(52, 58, 64)',
            color: 'rgb(255, 255, 255)'
        });
    });
    test('renders dark image upload button', async () => {
        render(<FormImage ImagebuttonText="upload" variant="dark" id="test-id" />);

        expect(screen.getByText('upload')).toBeInTheDocument();
        expect(screen.getByText('upload')).toHaveAttribute('type', 'button');
        expect(screen.getByText('upload')).toHaveStyle({
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(52, 58, 64)'
        });
    });
});
