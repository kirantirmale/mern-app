import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Profile({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const logOutUser = () => {
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('token');   
        setIsAuthenticated(false); 
        handleSuccess('User LogOut');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    return (
        <div className=" dark:bg-gray-900 text-center mt-32">
            <button
                type="button"
                onClick={logOutUser}
                className="px-6 py-3 bg-teal-500 text-white font-medium text-lg rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
            >
                Log Out
            </button>
            <ToastContainer />
        </div>
    );
}

export default Profile;
