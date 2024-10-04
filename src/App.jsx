import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header/header'
import Header2 from './components/molecules/Header2/header2'
import Footer from './components/molecules/Footer/footer'
import Home from './components/pages/home'
import Login from './components/pages/login'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
