import React from 'react'

const Dashboard = ({handleBall, handleStrike, handleFoul, resetScores}) => {

  return (
    <div className='dashboard'>
      <button type="button" onClick={handleStrike}>STRIKE</button>
      <button type="button" onClick={handleBall}>BALL</button>
      <button type="button" onClick={handleFoul}>FOUL</button>
      <button type="button" onClick={resetScores}>HIT</button>
    </div>
  );
}

export default Dashboard;