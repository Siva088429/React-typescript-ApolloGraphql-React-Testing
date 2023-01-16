import { render } from '@testing-library/react';
import React from 'react';
import Loading from './loading';
import '@testing-library/jest-dom/extend-expect'


describe(" loading test casess", () => {
    test('displays default loading message when no message prop is passed', () => {
        const { getByText } = render(<Loading />);
        const loadingMessage = getByText("Loading...");
        expect(loadingMessage).toBeInTheDocument();
    });
    test('displays message prop', () => {
        const message = "Fetching data...";
        const { getByText } = render(<Loading message={message} />);
        const loadingMessage = getByText(message);
        expect(loadingMessage).toBeInTheDocument();
    });
    test('displays loading class', () => {
        const { getByText } = render(<Loading />);
        const loadingMessage = getByText("Loading...");
        expect(loadingMessage.parentElement).toHaveClass('loading');
    });
      
});