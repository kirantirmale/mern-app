import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Skills from './pages/Skills';
import RefreshHandler from './RefreshHandler';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import Contact from './pages/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      
      {/* Conditionally render Header and Footer */}
      {isAuthenticated && <Header />} {/* Show Header only if authenticated */}
      
      <main className="flex-grow p-4">
        <Routes>
          <Route path='/' element={<Navigate to={'/login'} />} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<PrivateRoute element={<Home />} />} />
          <Route path='/skills' element={<PrivateRoute element={<Skills />} />} />
          <Route path='/contact' element={<PrivateRoute element={<Contact />} />} />
        </Routes>
      </main>
      
      {isAuthenticated && <Footer />} {/* Show Footer only if authenticated */}
    </div>
  );
}

export default App;
