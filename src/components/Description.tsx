import React from 'react';
import './Description.css';

const Description: React.FC = () => {
  return (
    <header className="description">
      <div className="container">
        <div className="how-box">
          <h1>How?</h1>
          <div className="p1img">
            <img src="./pp1.png" alt="Profile Picture" />
          </div>
        </div>
        
        <div className="how-text">
          <h1>AIRDROP</h1>
          <p>We’re running an airdrop farming period where genuine human users can earn allocation for participating in the platform.</p>
          <h1>GROWING THE NETWORK</h1>
          <p>Inviting your friends will help to grow the network where more people will be able to participate in predictions.</p>
          <h1>ROBUST PREDICTIONS APP</h1>
          <p>Our predictions app built natively in telegram is used by millions already. You can create, participate, verify predictions and earn!</p>
          <h1>FAIR TOKEN DISTRIBUTION</h1>
          <p>We’re ensuring a fair bot-free airdrop by putting in sybil resistant checks such as ID points and security checks before distribution.</p>
        </div>
      </div>
      <br /><br />
    </header>
  );
};

export default Description;
