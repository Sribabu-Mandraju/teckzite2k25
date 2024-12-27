import React from 'react'
import ReuseButton from './components/Buttons/ReuseButton';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './components/Buttons/Footer';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReuseButton/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
  )
}

export default App
