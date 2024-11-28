//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/molecules/Header/header'
import Header2 from './components/molecules/Header2/header2'
import Footer from './components/molecules/Footer/footer'
import Home from './components/pages/home'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Modelos from './components/pages/3d'
import IA from './components/pages/ia'
import Forum from './components/pages/forum'

const App = () => {
  return (
    <Router>
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/3d" element={<Modelos />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
