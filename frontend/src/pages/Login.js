import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from '../utils';
import backgroundImage from "../assets/images/bg-image.jpg"
function Login() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { email, password } = formData;

        if (!email || !password) {
            toast.error('Both fields are required!');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://mern-app-api-xi.vercel.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (!response.ok) {
                console.log("API error response:", result);
                return handleError(result.message || 'Login failed');
            }

            const { jwtToken, firstname = '', lastname = '', email = '', message } = result;
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('LoggedInUser', `${firstname} ${lastname} ,${email}`);
            handleSuccess(message);
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        } catch (error) {
            console.error("Frontend error:", error);
            handleError(error.message || 'Something went wrong');
            toast.error(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
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
            className="h-screen w-full flex items-center justify-center relative">
            {/* Full-page loader */}
            {loading && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-16 h-16 border-4 border-t-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
                <div className="w-full bg-teal-900 bg-opacity-55 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-teal-200 bg-opacity-20 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-teal-200 bg-opacity-20 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-4 text-white dark:text-gray-400"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <Link to="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full  bg-pink-300 hover:bg-red-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5  text-white rounded"
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </button>

                            <p className="text-sm font-light text-white dark:text-gray-400">
                                Don’t have an account yet ? {'  '}
                                <Link to="/signup" className="font-medium text-black hover:underline dark:text-primary-500">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Login;
