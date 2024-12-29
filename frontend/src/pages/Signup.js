import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { ToastContainer, toast } from 'react-toastify'; // Import toast for success/error notifications
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import CSS for toast
import { handleError, handleSuccess } from '../utils'; // Importing handleError from utils

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
    const navigate = useNavigate(); // Initialize navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            return handleError('All fields are required!'); // Trigger the error toast
        }

        try {
            const url = 'http://localhost:8080/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            const { success, message ,error} = result;

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                });

                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000)
            } else if (error) {
                const detail = error?.details[0].message;
                handleError(detail);
            }
            else if (!success) {    
                handleError(message);
            }
        } catch (error) {
            handleError(error.message || 'Something went wrong');
            toast.error(error.message || 'Something went wrong');
        }

        // Submit form logic
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 shadow-xl">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 bg-blue-500 hover:bg-blue-700 text-white rounded"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Login here
                                </Link>
                            </p>
                        </form>
                        <ToastContainer /> {/* Ensure ToastContainer is present */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
