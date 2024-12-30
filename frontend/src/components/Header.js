import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Header() {
  const [loggedInUser, setLoggedInUser] = useState(''); 
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('LoggedInUser') || 'Guest');
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-teal-500 p-6">
      <nav className="flex items-center justify-between flex-wrap">
      
        <div className="flex items-center flex-shrink-0 text-white mr-6">
         
          <span className="font-semibold text-xl tracking-tight">Welcome, {loggedInUser} !</span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center text-center  lg:w-auto ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-base lg:flex-grow">
            <Link
              to="/home"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to="/skills"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Skills
            </Link>
           
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Contact
            </Link>

            {/* <Link
              to="/profile"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Profile
            </Link> */}
          </div>
          <div>
            <Link
              to="/profile"
              className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
