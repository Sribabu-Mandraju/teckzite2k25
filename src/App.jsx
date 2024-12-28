import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Events from './components/Events/Events';
import EventCard from './components/Events/EventCard';
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import Workshopcard from './components/workshops/Workshopcard';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Workshopcard />}/>
        <Route path="/referals" element={<Referals />}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App;

