import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';
import { Avatar } from '@mui/material';
import { teal } from '@mui/material/colors';

function Profile({ setIsAuthenticated }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [activeTab, setActiveTab] = useState('contact');
    const navigate = useNavigate();

    useEffect(() => {

        const fullName = localStorage.getItem('LoggedInUser') || 'Guest';
        const [first, last, Email] = fullName.split(' ');
        setFirstName(first || '');
        setLastName(last || '');
        setEmail(Email || '');
    }, []);

    const logOutUser = () => {
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        handleSuccess('User LogOut');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const user = {
        firstName: firstName,
        lastName: lastName,
        bio: 'Passionate developer and tech enthusiast',
        email: Email,
        phone: '+1234567890',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        socialLinks: {
            instagram: 'https://www.instagram.com/me.kirannn?igsh=Z2tocnl3MG9mMHdz',
            facebook: 'https://www.facebook.com/tirmale.kiranajay?mibextid=ZbWKwL',
            linkedin: 'https://www.linkedin.com/in/kiran-tirmale-668313252/',
        },
    };

    return (
        <div className="dark:bg-gray-900  mt-32">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md animate-fade-in-down mx-auto">
                <div className="flex items-start mb-6">
                    <div className="w-22 h-22 rounded-full border-4 border-blue-200 hover:border-blue-300 transition-all duration-300">
                        <Avatar sx={{ bgcolor: teal[600], width: 80, height: 80 }}>
                            {`${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()}
                        </Avatar>
                    </div>
                    {/* <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full border-4 border-blue-200 hover:border-blue-300 transition-all duration-300" /> */}
                    <div className="ml-4">
                        <h2 className="text-2xl font-bold text-gray-800">{user.firstName}  {user.lastName}</h2>
                        <p className="text-gray-600 mt-1">{user.bio}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            className={`py-2 px-4 ${activeTab === 'contact' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Info
                        </button>
                        <button
                            className={`py-2 px-4 ${activeTab === 'settings' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('settings')}
                        >
                            Settings
                        </button>
                    </div>
                </div>

                {/* Contact Info Tab */}
                {activeTab === 'contact' && (
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">
                                <FaEnvelope className="inline mr-2" />
                                Email: {user.email}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">
                                <FaPhone className="inline mr-2" />
                                Phone: {user.phone}
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href={user.socialLinks.instagram} className="text-blue-500 hover:text-blue-600">
                                <FaInstagram className="inline mr-1" /> Instagram
                            </a>
                            <a href={user.socialLinks.facebook} className="text-blue-500 hover:text-blue-600">
                                <FaFacebook className="inline mr-1" /> Facebook
                            </a>
                            <a href={user.socialLinks.linkedin} className="text-blue-500 hover:text-blue-600">
                                <FaLinkedin className="inline mr-1" /> LinkedIn
                            </a>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="space-y-4">
                        <div>
                            <button
                                onClick={logOutUser}
                                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <ToastContainer />
        </div>
    );
}

export default Profile;
