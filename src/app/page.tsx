import React from 'react';
import Header from './components/header/page';
import HeroImage from './components/hero/page';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <HeroImage page={''} />
    </div>
  );
};

export default App;
