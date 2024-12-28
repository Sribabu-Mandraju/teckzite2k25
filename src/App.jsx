
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HorizontalCard from './components/Card/HorizontalCard';
import Events from './components/Events/Events';
import './App.css'
const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Events/>}/>
      </Routes>
    </Router>
  )
}

export default App;

