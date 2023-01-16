import { render } from '@testing-library/react';
import React from 'react';
import ErrorMessage from './error.message';
import '@testing-library/jest-dom/extend-expect'

describe("error message", () => {
    test('displays error message', () => {
        const error = new Error('Invalid date format');
        const { getByText } = render(<ErrorMessage error={error} />);
        const errorMessage = getByText(error.toString());
        expect(errorMessage).toBeInTheDocument();
    });
      
})