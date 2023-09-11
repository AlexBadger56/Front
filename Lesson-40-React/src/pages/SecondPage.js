import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import News from './components/News';
import Repo from './components/Repository';

function SecondPage() {
  return (
    <div className='body__wrapper'>
      <Header />
      <Banner />
      <div className='content__wrapper'>
         <Blog />
         <News />
      </div>
      <Repo />
    </div>
  );
}

export default SecondPage;
