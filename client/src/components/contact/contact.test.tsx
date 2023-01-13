
import { fireEvent, render,screen, configure, cleanup } from "@testing-library/react"
import React from 'react';
import App from "../../App";


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
        // implicit assertion
        // because getByText would throw error
        // if element wouldn't be there
        render(<App />);
        screen.getByText('Name');
        screen.getByRole('heading');
        // screen.getByText('Email');
        // screen.getByDisplayValue('dateOfBirth');
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


// describe("<App />", () =>{
//     test('render the name field', () => {
//         render(<App />);
//         const inputElement = screen.getByLabelText("Name");
//         expect(inputElement).toBeInTheDocument();
//         expect(inputElement).toHaveAttribute("type", "text");
//     });
//     test('render the email address field', () => {
//         render(<App />);
//         const inputElement2 = screen.getByLabelText("Email");
//         expect(inputElement2).toBeInTheDocument();
//         expect(inputElement2).toHaveAttribute("type", "email");
//     });
// });


// describe("input field", () => {
//     test('render the name input field', () => {
//         render(<App />);
//         // const nameInput =screen.getByPlaceholderText(/Enter name/i);
//         // expect(nameInput).toBeInTheDocument();
//         // expect(nameInput).toHaveAttribute("type","text");
//         expect(screen.getByText('Name')).toBeInTheDocument()

//     });
// });





    

