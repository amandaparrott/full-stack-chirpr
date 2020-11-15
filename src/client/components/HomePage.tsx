import React from 'react';
import ChirpsTimeline from './Chirps';

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div className="container">
      <div>
        <ChirpsTimeline />
      </div>
    </div>
  )
}

interface IHomePageProps { }

export default HomePage;