import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLUListElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      const timeline = timelineRef.current;
  
      const handleScroll = (e: WheelEvent) => {
        if (timeline && timeline.scrollLeft !== 0 && timeline.scrollLeft < timeline.scrollWidth - timeline.clientWidth) {
          e.preventDefault();
          e.stopPropagation();
        }
      };
  
      if (container && timeline) {
        container.addEventListener('wheel', handleScroll, { passive: false });
        timeline.addEventListener('wheel', handleScroll, { passive: false });
      }
  
      // Cleanup event listeners on component unmount
      return () => {
        if (container && timeline) {
          container.removeEventListener('wheel', handleScroll);
          timeline.removeEventListener('wheel', handleScroll);
        }
      };
    }, []);

    return (
        <div className="container1">
            <br /><br />
            <div className="white-box">
                <h1 className='pth1'>Project Timeline</h1>
                <div className="profile-pics">
                    <div className="profile-pic-container1">
                        <img src="pp1.png" alt="Profile 1" className="profile-pic profile-pic1" />
                    </div>
                    <div className="profile-pic-container2">
                        <img src="pp2.png" alt="Profile 2" className="profile-pic profile-pic2" />
                    </div>
                </div>
                <ul ref={timelineRef} className="timeline">
                    <li>
                        <span className="year">Sep. 2024</span>
                        <ul className="content">
                            <li>Launch V1 Mini App</li>
                            <li>Commence initial invite epochs</li>
                        </ul>
                    </li>
                    <li>
                        <span className="year">Oct. 2024</span>
                        <ul className="content">
                            <li>Launch V2</li>
                            <li>Introduce HUMAN ID</li>
                            <li>Prediction Activities</li>
                        </ul>
                    </li>
                    <li>
                        <span className="year">Nov. 2024</span>
                        <ul className="content">
                            <li>UGC Predictions</li>
                            <li>HUMAN Social Network</li>
                        </ul>
                    </li>
                    <li>
                        <span className="year">Dec. 2024</span>
                        <ul className="content">
                            <li>UGC & PVP markets</li>
                            <li>KOL Activations</li>
                        </ul>
                    </li>
                    <li>
                        <span className="year new">TBD 2025</span>
                        <ul className="content">
                            <li>TGE & Platform</li>
                            <li>Onchain integrations</li>
                            <li>Airdrop infra</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Timeline;
