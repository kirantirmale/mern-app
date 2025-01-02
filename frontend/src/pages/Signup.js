import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils';
import backgroundImage from "../assets/images/bg-image.jpg"
import sigimg from "../assets/images/signup1.jpg"

function Signup() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = formData;

        if (!firstname || !lastname || !email || !password) {
            return handleError('All fields are required!');
        }

        try {
            const url = 'https://mern-app-api-xi.vercel.app/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (response.ok) {
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                });

                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const detail = error?.details[0].message;
                handleError(detail);
            } else if (!success) {
                handleError(message);
            }
        } catch (error) {
            handleError(error.message || 'Something went wrong');
        }
    };

    return (
        <section

            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className=" h-screen w-full flex items-center justify-center">
            <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
                <div
                    style={{
                        sigimg: `url(${sigimg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="w-full bg-teal-900 bg-opacity-55 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-gray-900">Create an account</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="  bg-teal-200 bg-opacity-20 border rounded-lg p-2.5 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="bg-teal-200 bg-opacity-20 border rounded-lg p-2.5 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="bg-teal-200 bg-opacity-20 border rounded-lg p-2.5 w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-teal-200 bg-opacity-20 border rounded-lg p-2.5 w-full"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-300 hover:bg-red-300 text-white rounded px-5 py-2.5"
                            >
                                Create an account
                            </button>
                            <p className="text-sm text-white ">
                                Already have an account.? {' '}
                                <Link to="/login" className="text-blue-600 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
