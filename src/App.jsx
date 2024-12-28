
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HorizontalCard from './components/Card/HorizontalCard';
import Events from './components/Events/Events';
import './App.css'
import Card from './components/Card/Card';
import './App.css'
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import { Menu } from './components/Menu';
import Events from './components/Events/Events';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>

       <Route path="/" element={<Events/>}/>

        <Route path="/" element={<Menu />}/>
        <Route path="/referals" element={<Referals />}/>
        <Route path="/card" element={<Card />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
       <Route path="/Events" element={<Events/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

