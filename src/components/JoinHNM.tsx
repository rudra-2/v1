import React from 'react';
import './JoinHNM.css';

const JoinHNM: React.FC = () => {
  return (
    <div className='join-outer'>
      <br />
      <div className="join-box">
        <h1>Join HUMAN</h1>
        <p className='fstp'>Joining HUMAN is by invite only</p>
        <p className='sndp'><center>Follow our socials to see who has
invite links or write a post to see if
any of your friends have one!</center></p>
      
      <div className="social-icons">
        <div className="icon-wrapper">
          <a href="https://t.me/imhmnxyz" target='_blank' className='alink'><img src="./tg.png" alt="Telegram" /></a>
        </div>
        <div className="icon-wrapper">
          <a href="https://x.com/imhmnxyz" target='_blank' className='alink'><img src="./twit.png" alt="Twitter" /></a>
        </div>
      </div>
    </div>
      <br />
      <br /><br />
    </div>
    
  );
};

export default JoinHNM;
