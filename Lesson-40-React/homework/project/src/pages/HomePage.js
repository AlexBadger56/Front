import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Main />
    
    </div>
  );
}

function Weather() {
  const weatherBlock = {
    city: ['lisbon', 'paris', 'belgrade', 'venice', 'tel-Avive', 'cair', 'new-York', 'new-Delhi', 'san-Francisco', 'tokyo', 'sydney'],
    temperature: ['21°C', '11°C', '15°C', '21°C', '32°C', '21°C', '17°C', '17°C', '15°C', '8°C', '25°C'],
  };

  const weatherBlocks = weatherBlock.city.map((city, i) => (
    <div key={city} className={`weather__block ${city}`}>
      <span>{city}</span>
      <div className='weather__temp'>
         <span>{weatherBlock.temperature[i]}</span>
         <span className={`icon-${city}`}> </span>
      </div>
      
    </div>
  ));

  return (
    <div className='weather__container'>
      {weatherBlocks}
    </div>
  );
}

function Main() {
  return (
    <div className='main__wrapper'>
      <div className='main__container'>
      <h1 className='title'>CSS Weather Forecast <span className='icon-title'></span> </h1>
        <div className='.weather__container'>
          <Weather />
        </div>
        <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
        <Link to="/second-page"><button className="next-btn">Second part</button> </Link> 
      </div>

    </div>
  );
};

export default HomePage;

