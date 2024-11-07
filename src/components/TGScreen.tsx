import React, { useEffect, useRef, useState } from 'react';
import './TGScreen.css';

const TGScreen: React.FC = () => {
  const [isSecondImageVisible, setSecondImageVisible] = useState(false);
  const [isThirdImageVisible, setThirdImageVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const topPosition = containerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animations when container enters the viewport
        if (topPosition < windowHeight - 100) {
          setSecondImageVisible(true);
        }
        if (topPosition < windowHeight - 200) {
          setThirdImageVisible(true);
        }
        // Reset if scrolled up past the container
        if (topPosition > windowHeight) {
          setSecondImageVisible(false);
          setThirdImageVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="TGScreen">
      <h1>Join HUMAN. All you need is telegram.</h1>
      <div className="tgss">
        <img src="ss1.png" alt="" className="first-image" />
        <img
          src="ss2.png"
          alt=""
          className={`second-image ${isSecondImageVisible ? 'animate-right' : ''}`}
        />
        <img
          src="ss3.png"
          alt=""
          className={`third-image ${isThirdImageVisible ? 'animate-right' : ''}`}
        />
      </div>
      <br /><br /><br />
    </div>
  );
};

export default TGScreen;
