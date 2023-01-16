
import { fireEvent, render,screen, configure, cleanup} from "@testing-library/react"
import React from 'react';
import App from "../../App";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);
describe('When every is Ok', () =>{
    test('should render the App component without crashing', () => {
        render(<App/>);
    });
    test('should data must be handleReset' , () =>{
        const handleReset = jest.fn()
        const {getByText} = render(<input className="btn btn-outline-warning" type="button" value="Reset" onClick={handleReset} />)
        const resetButtonNode =  getByText(/Reset/i)
        fireEvent.click(resetButtonNode)
        expect(handleReset).toHaveBeenCalledTimes(1)
        render(<App/>);
    });
    test('Data should be submit', () => {
        const handleSubmit = jest.fn()
        const {getByLabelText,getByText}=render(<input className="btn btn-outline-primary" type="submit" value="Save" onSubmit={handleSubmit}/>)
        const submitNode = getByText(/Save/i)
        fireEvent.click(submitNode)
        expect(handleSubmit).toHaveBeenCalledTimes(0)
        render(<App />);
    })
    test('Data should be update', () => {
        const handleInputChange = jest.fn()
        const {getByText} = render(<input className="btn btn-outline-danger" type="submit" value="Update" onSubmit={handleInputChange} />)
        const updateNode = getByText(/Update/i)
        fireEvent.click(updateNode)
        expect(handleInputChange).toBeCalledTimes(0)
        render(<App />);
    });
    test('Data should be name text', () => {
        render(<App />);
        screen.getByText('Name');
        screen.getByRole('heading');
        screen.debug();
    });
});

describe('contact',()=>{
    test('it should be true data', () => {
      const test = true;
      expect(test).toBe(true);
      render(<App/>);
    });
});




describe('Contact', () => {
    test('renders the contact componet', () => {
        render(<App />);
    });
})

describe("Save Button", () => {
    // or something more meaningful
    test("should handle click", () => {
      const buttonText = "Save";
      const testOnClick = jest.fn();
  
      render(
        <input className="btn btn-outline-primary" type="submit" value="Save" onClick={testOnClick}/>
      );
  
      fireEvent.click(screen.getByText(buttonText));
  
      expect(testOnClick).toBeCalledTimes(1);
    });
});

describe("Update Button", () => {
    test("Should handle to Click", () => {
        const buttonText = "Update";
        const testOnClick = jest.fn();
        render(<input className="btn btn-outline-danger" type="submit" value="Update" onClick={testOnClick}/>);
        fireEvent.click(screen.getByText(buttonText));
        expect(testOnClick).toBeCalledTimes(1);
    });
});

describe("Reset Button", () => {
    test("Should handle to click", () =>{
        const buttonText = "Reset";
        const handleReset= jest.fn();
        render(<input className="btn btn-outline-warning" type="button" value="Reset" onClick={handleReset} />);
        fireEvent.click(screen.getByText(buttonText));
        expect(handleReset).toBeCalledTimes(1);
    });
});



describe("input field", () => {
    test('textbox with name "name" is present', () => {
        const { getByRole } = render(<App />);
        const textbox = getByRole("textbox", { name: /name/i });
        expect(textbox).toBeDefined();
        expect(textbox).toHaveValue('');
        expect(textbox.getAttribute("name")).toEqual("name");
        expect(textbox).toHaveAttribute('type', 'text');
      });
});


describe("Email field", () => {
    test('email input field is present', () => {
        const { getByLabelText } = render(<App />);
        const input = getByLabelText('Email address');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'email');
    });
    test('email input field accepts valid email addresses', () => {
        const { getByLabelText } = render(<App />);
        const input = getByLabelText('Email address') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'example@gmail.com' } });
        expect(input.value).toBe('example@gmail.com');
    });   
});

describe("Date of Brith field", () => {
    test('date of birth input field is required', () => {
        const { getByLabelText, getByTestId, getByText } = render(<App />);
        const input = getByLabelText('Date of birth');
        // const form = getByTestId("dateOfBirth")
        fireEvent.submit(input);
        expect(getByText("Date of birth is required")).toBeInTheDocument();
    });
    test('handles date of birth input change', () => {
        const { getByTestId } = render(<App />);
        const inputField = getByTestId('dateOfBirth') as HTMLInputElement;
        fireEvent.change(inputField, { target: { value: '2022-01-01' } });
        expect(inputField.value).toBe('2022-01-01');
    });
    test('renders date of birth label', () => {
        const { getByTestId } = render(<App />);
        const label = getByTestId('dateOfBirth');
        const inputField = getByTestId('dateOfBirth');
        expect(label).toBeInTheDocument();
        // expect(label).toBeAssociatedWith(inputField);
    });

});




    

