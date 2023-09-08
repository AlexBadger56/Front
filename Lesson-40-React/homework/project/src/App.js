import './assets/scss/App.scss';
import './assets/scss/SecondPage.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;

