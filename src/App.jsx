
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './components/Card/Card';
import './App.css'
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import { Menu } from './components/Menu';
import WebTeam from './components/WebTeam/WebTeam';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/referals" element={<Referals />}/>
        <Route path="/card" element={<Card />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
       <Route path="/webteam" element={<WebTeam />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

