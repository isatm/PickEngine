import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/molecules/Header/header';
import Header2 from './components/molecules/Header2/header2';
import HeaderTC from './components/molecules/HeaderTC/headerTc';
import Footer from './components/molecules/Footer/footer';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Modelos from './components/pages/3d';
import IA from './components/pages/ia';
import Forum from './components/pages/forum';
import Post from './components/pages/toPost.jsx';
import PrivacyP from './components/pages/privacyp';
import Cuenta from './components/pages/cuenta.jsx';
import Settings from './components/pages/Settings.jsx';
import { AuthProvider, useAuth } from './context.jsx';

const App = () => {
  /*
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Aplicar el tema globalmente al cambiar
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Current theme:", theme); // Verifica que se aplica correctamente
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternar entre los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
*/
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
          <Route path="/privacyp" element={<TermsAndConditionsPageHeader component={<PrivacyP />} />} />
          <Route path="/cuenta" element={<PageHeader component={<Cuenta />} />} />
          <Route path="/settings" element={<PageHeader component={<Settings />} />} />
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
