
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Events from './components/Events/Events';
import EventCard from './components/Events/EventCard';
import HorizontalCard from './components/Card/HorizontalCard';
import Workshopcard from './components/workshops/Workshopcard';
import WebTeam from './components/WebTeam/WebTeam';
import Animation from './Eventsbackground/Animation';
import Scanner from './components/Scanner/Scanner';
import NewHeader from './components/NewHeader/NewHeader';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Events />}/>
        <Route path="/card" element={<EventCard />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
       <Route path="/webteam" element={<WebTeam />}/>
       <Route path="/workshop" element={<Workshopcard/>}/>
       <Route path="/animation" element={<Animation/>}/>
       <Route path="/workshop" element={<Workshopcard/>}/>
       <Route path="/scanner" element={<Scanner/>}/>
       <Route path="/newheader" element={<NewHeader/>}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App;
