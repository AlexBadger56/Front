import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';

function SecondPage() {
  return (
    <div className='body__wrapper'>
      <Header />
      <Banner />
      <div className='content__wrapper'>
         <Blog />
         <News />
      </div>
      <button className="next-btn repo">My repositiry</button>
    </div>
  );
}

export default SecondPage;
