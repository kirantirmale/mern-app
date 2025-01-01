import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import { Tooltip } from '@mui/material';
import logo from '../assets/images/logo-no-background.png'; // Assuming the logo is in this path

function Header() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // Get current location to check active route

  useEffect(() => {
    const fullName = localStorage.getItem('LoggedInUser') || 'Guest';
    const [first, last] = fullName.split(' ');
    setFirstName(first || '');
    setLastName(last || '');
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the current route matches the link
  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-teal-500 font-semibold'
      : 'text-gray-300 hover:text-white';
  };

  return (
    <header className="bg-slate-950 p-6">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight ml-2">
            <img src={logo} alt="Logo" className="h-10" />
          </span>
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
          className={`w-full block flex-grow lg:flex lg:items-center text-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`}
        >
          <div className="text-base lg:flex-grow">
            <Link
              to="/home"
              className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${getLinkClass('/home')}`}
            >
              HOME
            </Link>
            <Link
              to="/skills"
              className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${getLinkClass('/skills')}`}
            >
              SKILLS
            </Link>
            <Link
              to="/contact"
              className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${getLinkClass('/contact')}`}
            >
              CONTACT
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4 lg:mt-0 -ml-4">
            <Link to="/profile">
              <Tooltip title={`${firstName} ${lastName}`} arrow>
                <Avatar sx={{ bgcolor: teal[600] }} className="lg:h-10 lg:w-10 h-12 w-12">
                  {`${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()}
                </Avatar>
              </Tooltip>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
