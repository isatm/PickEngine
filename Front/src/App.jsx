import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header/header';
import Header2 from './components/molecules/Header2/header2';
import HeaderTC from './components/molecules/HeaderTC/headerTc';
import Footer from './components/molecules/Footer/footer';
import Home from './components/pages/Home/home.jsx';
import Login from './components/pages/Login & Register/login.jsx';
import Register from './components/pages/Login & Register/Register.jsx';
import Modelos from './components/pages/3D/3d.jsx';
import IA from './components/pages/IA/ia.jsx';
import Forum from './components/pages/Forum/forum.jsx';
import Post from './components/pages/toPost/toPost.jsx';
import PrivacyP from './components/pages/PRIVACYP/privacyp.jsx';
import Cuenta from './components/pages/Account/Cuenta.jsx';
import { AuthProvider, useAuth } from './context.jsx';
import Profile from './components/pages/user Profile/Profile.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PageHeader component={<Home />} />} />
          <Route path="/login" element={<PageHeader component={<Login />} />} />
          <Route path="/register" element={<PageHeader component={<Register />} />} />
          <Route path="/3d" element={<PageHeader component={<Modelos />} />} />
          <Route path="/ia" element={<PageHeader component={<IA />} />} />
          <Route path='/profile' element={<PageHeader component={<Profile/>}/>}/>
          <Route path="/forum" element={<PageHeader component={<Forum />} />} />
          <Route path="/post" element={<PageHeader component={<Post />} />} />
          <Route path="/privacyp" element={<TermsAndConditionsPageHeader component={<PrivacyP />} />} />
          <Route path="/cuenta" element={<PageHeader component={<Cuenta />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PageHeader = ({ component }) => {
  const { isAuthenticated } = useAuth();
  
  return (
    <>
      {isAuthenticated ? <Header /> : < Header2 />}
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
