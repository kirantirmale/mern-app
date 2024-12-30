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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Refactor PrivateRoute logic for clarity
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    
      {isAuthenticated && <Header />} 

      <main className="flex-grow p-4">
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<Signup />} />
          
          {/* Use PrivateRoute to wrap protected routes */}
          <Route 
            path='/home' 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route 
            path='/skills' 
            element={
              <PrivateRoute>
                <Skills />
              </PrivateRoute>
            }
          />
          <Route 
            path='/contact' 
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      
      {isAuthenticated && <Footer />} 
    </div>
  );
}

export default App;
