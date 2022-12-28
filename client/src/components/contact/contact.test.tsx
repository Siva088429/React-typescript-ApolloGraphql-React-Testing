import { render } from "@testing-library/react"
import React from 'react';
import App from "../../App";

describe('When every is Ok', () =>{
    test('should render the App component without crashing', () => {
        render(<App/>);
    });
    
});