import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Card from './components/Card/Card';
import HorizontalCard from './components/Card/HorizontalCard';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<HorizontalCard/>}/>
      </Routes>
    </Router>
  )
}

export default App;
