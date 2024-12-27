import React from 'react'
import ReuseButton from './components/Buttons/ReuseButton';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './components/Buttons/Footer';
import Card from './components/Card/Card';
import HorizontalCard from './components/Card/HorizontalCard';
const App = () => {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<ReuseButton/>}/>
        <Route path="/footer" element={<Footer/>}/>*/}
       {/*<Route path="/" element={<Card/>}/>*/}

       <Route path="/" element={<HorizontalCard/>}/> 

      </Routes>
    </Router>
  )
}

export default App
