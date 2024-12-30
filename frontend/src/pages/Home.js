import React, { useEffect, useState } from 'react';
import { handleError, handleSuccess } from '../utils';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [projects, setProjects] = useState([]); // Initialize as an empty array
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('LoggedInUser') || 'Guest');
  }, []);

  const logOutUser = () => {
    localStorage.removeItem('LoggedInUser');
    localStorage.removeItem('token');
    handleSuccess('User LogOut');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const fetchProjects = async () => {
    try {
      const url = 'https://mern-app-api-xi.vercel.app/projects'; // Update URL to fetch your portfolio projects
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProjects(result); // Save projects to state
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
    
      <div className=" bg-gray-50 dark:bg-gray-900">

        <div id="home" className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 animate__animated animate__fadeIn">
            Mern Stack Developer Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to my portfolio! I specialize in Full Stack Web Development using the MERN stack. Check out my projects below.
          </p>
        </div>

        <button
          onClick={logOutUser}
          className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
        >
          Log Out
        </button>

        <ToastContainer />
      </div>
    </>

  );
}

export default Home;
