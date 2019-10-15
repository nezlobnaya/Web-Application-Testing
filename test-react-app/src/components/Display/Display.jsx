import React from 'react';

const Display = ({ball,strike}) => {

  return (
    <div className='display'>
      <h1 style={{textDecoration: 'underline'}}>The At-Bat</h1>
      <h1>BALL</h1>
      <div className='data' data-testid='ballCount'>{ball}</div>
      <h1>STRIKE</h1>
      <div className='data' data-testid='strikeCount'>{strike}</div>
    </div>
  );
}

export default Display;