// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [loggedInUser, setLoggedInUser] = useState('');

      useEffect(() => {
        setLoggedInUser(localStorage.getItem('LoggedInUser') || 'Guest');
      }, []);
    
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-semibold"><h1 className="text-2xl font-bold animate-bounce">Welcome, {loggedInUser}!</h1></div>
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/skills" className="hover:text-gray-300">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
