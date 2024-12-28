<<<<<<< HEAD
=======
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Events from './components/Events/Events';
import EventCard from './components/Events/EventCard';
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
<<<<<<< HEAD
import Workshopcard from './components/workshops/Workshopcard';
=======
import { Menu } from './components/Menu';
import WebTeam from './components/WebTeam/WebTeam';
>>>>>>> 0cc25edd262d4b6af08a18baa0a9df98b44577b9
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Workshopcard />}/>
        <Route path="/referals" element={<Referals />}/>
<<<<<<< HEAD
=======
        <Route path="/card" element={<EventCard />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
       <Route path="/webteam" element={<WebTeam />}/>
       <Route path="/Events" element={<Events/>}/>
>>>>>>> 0cc25edd262d4b6af08a18baa0a9df98b44577b9
      </Routes>
    </Router>
    </div>
  )
}
export default App;

>>>>>>> 7d295ca1d2499e48def58e8364e153ece316653e
