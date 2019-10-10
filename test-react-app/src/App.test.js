import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);//a clean up function will run after ech test runs

test ('renders without crashing',() => {
  const wrapper = rtl.render(<App />) //passing a component to render
  wrapper.debug() // let us look into component how JSX is structured
})

