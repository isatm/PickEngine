import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/molecules/Header/header'
import Header2 from './components/molecules/Header2/header2';
import HeaderTC from './components/molecules/HeaderTC/headerTc';
import Footer from './components/molecules/Footer/footer';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Modelos from './components/pages/3d';
import IA from './components/pages/ia';
import Forum from './components/pages/forum';
import PrivacyP from './components/pages/privacyp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalPageHeader component={<Home />} />} />
        <Route path="/login" element={<PrincipalPageHeader component={<Login />} />} />
        <Route path="/register" element={<PrincipalPageHeader component={<Register />} />} />
        <Route path="/3d" element={<PrincipalPageHeader component={<Modelos />} />} />
        <Route path="/ia" element={<PrincipalPageHeader component={<IA />} />} />
        <Route path="/forum" element={<PrincipalPageHeader component={<Forum />} />} />
        <Route path="/privacyp" element={<TermsAndConditionsPageHeader component={<PrivacyP />} />} />
      </Routes>
    </Router>
  );
};

const PrincipalPageHeader = ({ component }) => {
  return (
    <>
      <Header2 />
      {component}
      <Footer />
    </>
  );
};

const TermsAndConditionsPageHeader = ({ component }) => {
  return (
    <>
      <HeaderTC />
      {component}
      <Footer />
    </>
  );
};

export default App;
