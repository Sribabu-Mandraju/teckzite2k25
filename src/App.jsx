
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Events from './components/Events/Events';
import EventCard from './components/Events/EventCard';
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import Workshopcard from './components/workshops/Workshopcard';
import WebTeam from './components/WebTeam/WebTeam';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Workshopcard />}/>
        <Route path="/referals" element={<Referals />}/>
        <Route path="/card" element={<EventCard />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
       <Route path="/webteam" element={<WebTeam />}/>
       <Route path="/Events" element={<Events/>}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App;


