import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);//a clean up function will run after ech test runs

describe('Unit tests for the app', () => {
  it('renders without crashing',() => {
    const wrapper = rtl.render(<App />) 
    const element = wrapper.getByText('The At-Bat')
    expect(element).toBeVisible()
  })

  it ('renders without crashing',() => {
    const wrapper = rtl.render(<App />) //passing a component to render
    wrapper.debug() // let us look into component how JSX is structured
  })

  it('renders a text ', () => {
    const wrapper = rtl.render(<App />) 
    const element = wrapper.getByText('hit', { exact: false }) // ignore case
    expect(element).toBeInTheDocument()
  })

  it('all counts load with initial state of 0', () => {
    const wrapper = rtl.render(<App />);
    const ballCount = wrapper.getByTestId('ballCount');
    expect(ballCount.textContent).toBe('0');
    const strikeCount = wrapper.getByTestId('strikeCount');
    expect(strikeCount.textContent).toBe('0');
  });

  it('strike button increments strike count' , () => {
    const wrapper = rtl.render(<App />);
    const strikeCount = wrapper.getByTestId('strikeCount');
    const handleStrike = wrapper.getByTestId('strike');
    expect(strikeCount.textContent).toBe('0');
    rtl.fireEvent.click(handleStrike);
    expect(strikeCount.textContent).toBe('1');
    rtl.fireEvent.click(handleStrike);
    expect(strikeCount.textContent).toBe('2');
    rtl.fireEvent.click(handleStrike);
    expect(strikeCount.textContent).toBe('0');
  })

    it('strikes should only be 0, 1, or 2', () => {
      const wrapper = rtl.render(<App />);
      const value = parseInt(wrapper.queryByTestId('strikeCount').innerHTML);
      const valueCondition = num => {
        return num >= 0 && num < 3;
      };
      expect(valueCondition(value)).toBe(true);
    });
})


