
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './components/Card/Card';
import HorizontalCard from './components/Card/HorizontalCard';
import './App.css'
import { Menu } from './components/Menu';
const App = () => {
  return (
    <div className='bg-[#1E1C1C]'>
    <Router>
      <Routes>
       {/* <Route path="/" element={<HorizontalCard/>}/> */}
              <Route path="/" element={<Menu/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App;

