
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './components/Card/Card';
import './App.css'
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import { Menu } from './components/Menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/referals" element={<Referals />}/>
        <Route path="/card" element={<Card />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
      </Routes>
    </Router>
  )
}

export default App;

