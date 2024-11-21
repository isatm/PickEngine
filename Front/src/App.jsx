import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header/header';
import Header2 from './components/molecules/Header2/header2';
import Footer from './components/molecules/Footer/footer';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Modelos from './components/pages/3d';
import IA from './components/pages/ia';
import Forum from './components/pages/forum';
import Post from './components/pages/toPost.jsx';
import PrivacyP from './components/pages/privacyp';
import ConditionS from './components/pages/conditionS';
import Cuenta from './components/pages/cuenta.jsx';
import { AuthProvider, useAuth } from './context.jsx';

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
          <Route path="/forum" element={<PageHeader component={<Forum />} />} />
          <Route path="/post" element={<PageHeader component={<Post />} />} />
          <Route path="/privacyp" element={< WithoutHeaderFooter component={<PrivacyP />} />} />
          <Route path="/conditionS" element={< WithoutHeaderFooter component={<ConditionS />} />} />
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

const WithoutHeaderFooter = ({ component }) => {
  return (
    <>
      {component}
      <Footer />
    </>
  );
};

export default App;
