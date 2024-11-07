import React from 'react';
import Header from './components/Header';
import ProfileAnima from './components/ProfileAnima';
import Description from './components/Description';
import JoinHNM from './components/JoinHNM';
import Steps from './components/Steps';
import TGScreen from './components/TGScreen';
import Timeline from './components/Timeline';
import './App.css';
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <ProfileAnima />
      <Description />
      <Timeline />
      <Steps />
      <TGScreen />
      <JoinHNM />
    </div>
  );
};

export default App;
