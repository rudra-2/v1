import React, { useRef, useEffect } from 'react';
import './Steps.css';

const Steps: React.FC = () => {
  const stepBoxesRef = useRef<HTMLDivElement[]>([]);
  const screenshotSectionRef = useRef<HTMLDivElement | null>(null);

  const addToRef = (el: HTMLDivElement) => {
    if (el && !stepBoxesRef.current.includes(el)) {
      stepBoxesRef.current.push(el);
    }
  };

  const scrollToScreenshotSection = () => {
    if (screenshotSectionRef.current) {
      screenshotSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      stepBoxesRef.current.forEach((box, index) => {
        const rect = box.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (inView) {
          box.style.animationDelay = `${index * 0.2}s`;
          box.classList.add('swing-in');
        } else {
          box.classList.remove('swing-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="steps">
      <h1>Let's Make it Happen</h1>
      <div className="step-container">
        <div className="step-box" ref={addToRef}>
          <img src='./pp8.png' alt="Step 1" />
          <h1 className='getinv'><center>GET INVITED</center></h1>
          <p>
            <center>
              <button className='howinv' onClick={scrollToScreenshotSection}>How Do I Get Invited?</button>
            </center>
          </p>
        </div>
        <div className="step-box" ref={addToRef}>
          <img src='./pp4.png' alt="Step 2" />
          <h1><center>PREDICT</center></h1>
          <p>Make predictions on what interests you and where you have an edge.</p>
        </div>
        <div className="step-box" ref={addToRef}>
          <img src='./pp2.png' alt="Step 3" />
          <h1><center>SHARE</center></h1>
          <p>Share your predictions with your friends so they can participate too.</p>
        </div>
        <div className="step-box" ref={addToRef}>
          <img src='./pp9.png' alt="Step 4" />
          <h1><center>EARN</center></h1>
          <p>Earn points which go towards your airdrop allocation for being right!</p>
        </div>
      </div>
      {/* Target screenshot section for scroll */}
      <div ref={screenshotSectionRef} className="screenshot-animation-section">
        {/* Content of the screenshot animation section */}
      </div>
    </div>
  );
};

export default Steps;
