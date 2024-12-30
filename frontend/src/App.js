import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Skills from './pages/Skills';
import RefreshHandler from './RefreshHandler';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token') // Initialize based on token presence
  );

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
    
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

    
      {isAuthenticated && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/skills" element={<PrivateRoute element={<Skills />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile setIsAuthenticated={setIsAuthenticated} />} />} />
          <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
        </Routes>
      </main>

      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
