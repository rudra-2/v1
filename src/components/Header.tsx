import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const profileImages = [
    './pp1.png',
    './pp2.png',
    './pp3.png',
    './pp4.png',
    './pp5.png',
    './pp6.png',
    './pp7.png',
    './pp1.png',
    './pp2.png',
    './pp3.png',
    './pp4.png',
    // Add more images as needed
  ];

  const profilePhotosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const predictionBox = document.querySelector('.prediction-box');
      const forecastingElement = document.getElementById('forecasting');
      const profilePhotosElement = profilePhotosRef.current;

      if (predictionBox && forecastingElement) {
        const predictionBoxBottom = predictionBox.getBoundingClientRect().bottom-100;
        if (predictionBoxBottom < 0) {
          forecastingElement.style.textDecoration = 'underline';
        } else {
          forecastingElement.style.textDecoration = 'none';
        }
      }

      if (profilePhotosElement) {
        const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const slowScrollFactor = 1.5; // Adjust this factor to slow down the scroll speed
        profilePhotosElement.scrollLeft = scrollRatio * (profilePhotosElement.scrollWidth - profilePhotosElement.clientWidth) * slowScrollFactor;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="prediction-box">
        MAKE PREDICTIONS <br />
        GET AIRDROP
      </div>
      <p className="brief-des">
        <b> Join the first social network for <span id="forecasting">Forecasting</span> the future </b>
      </p>
      <button className="getinvite" onClick={scrollToBottom}>Get Invited</button>
      <p className="joined">and join 2m+ others</p>
      <div className="social-icons">
        <div className="icon-wrapper">
          <a href="https://t.me/imhmnxyz" target='_blank' className='alink'><img src="./tg.png" alt="Telegram" /></a>
        </div>
        <div className="icon-wrapper">
          <a href="https://x.com/imhmnxyz" target='_blank' className='alink'><img src="./twit.png" alt="Twitter" /></a>
        </div>
      </div>
      <br /><br /><br /><br />
      <div className="profile-photos" ref={profilePhotosRef}>
        {profileImages.map((src, index) => (
          <img key={index} src={src} alt={`Profile ${index + 1}`} />
        ))}
      </div>
    </header>
  );
};

export default Header;
