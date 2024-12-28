import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import HorizontalCard from './components/Card/HorizontalCard';
import Referals from './components/Card/Referals';
import Events from './components/Events/Events';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
        <Route path="/" element={<Events />}/>
        <Route path="/referals" element={<Referals />}/>
       <Route path="/horizontal" element={<HorizontalCard />}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App;

