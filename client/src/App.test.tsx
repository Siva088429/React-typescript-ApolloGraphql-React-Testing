import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("when everything is ok", () =>{
  test("should render the App component without crashing", () =>{
    render(<App />);
    screen.debug();
  });

  test('should select the children that is being  passed to the component', () =>{
    render(<App />);
  })
});


