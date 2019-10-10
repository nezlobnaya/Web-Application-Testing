import React from 'react';

const Dashboard = ({handleBall, handleStrike, handleFoul, resetScores}) => {

  return (
    <div className='dashboard'>
      <button data-testid='strike' type="button" onClick={handleStrike}>STRIKE</button>
      <button data-testid='ball' type="button" onClick={handleBall}>BALL</button>
      <button data-testid='foul' type="button" onClick={handleFoul}>FOUL</button>
      <button data-testid='hit' type="button" onClick={resetScores}>HIT</button>
    </div>
  );
}

export default Dashboard;