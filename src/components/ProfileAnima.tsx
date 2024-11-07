import React from 'react';
import './ProfileAnima.css';

const ProfileAnima: React.FC = () => {
  return (
    <header className="profileanima">
      <br />
      <div className='content-container'>
        <div className='whyhmn'>
          <h1>Why &nbsp;HUMAN?</h1>
          <p>
            HUMAN is a social network where your
            predictions shape the conversation. <br /> <br />
            Engage with real-world events, build a
            reputation, and connect with others through
            shared forecasts. <br /> <br />
            It’s a platform driven by foresight and
            collaboration, empowering you to influence
            the future.
          </p>
        </div>
        <div className='ppanima'>
          <div className="amoeba">
            <img src="./ppmainwobg.png" alt="Amoeba Profile" />
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </header>
  );
};

export default ProfileAnima;
