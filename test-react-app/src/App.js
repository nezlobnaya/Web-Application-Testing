import React, { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {

  const [ballScore, setBallScore] = useState(0);
  const [strikeScore, setStrikeScore] = useState(0);
  
  const resetScores = () => setBallScore(0) || setStrikeScore(0) ;

  const handleFoul = () => (strikeScore < 2) ? setStrikeScore(strikeScore + 1) : strikeScore;

  const handleBall = () => (ballScore + 1 >= 4) ? resetScores() : setBallScore(ballScore + 1);
   
  const handleStrike = () => (strikeScore + 1 >= 3) ? resetScores() : setStrikeScore(strikeScore + 1);
    
  return (
    <div className='counter'>
      <Display ball={ballScore} strike={strikeScore}/>
      <Dashboard handleStrike={handleStrike} handleBall={handleBall} handleFoul={handleFoul} resetScores={resetScores}  />
    </div>
  );
}

export default App;