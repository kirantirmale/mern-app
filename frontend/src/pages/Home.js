import React, { useEffect, useState } from 'react';
import { handleError, handleSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]); // Initialize as an empty array
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

  const fetchProduct = async () => {
    try {
      const url = 'http://localhost:8080/products';
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result); // Save products to state
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-blue-600 text-white shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold animate-bounce">Welcome, {loggedInUser}!</h1>
          <nav className="space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Explore the Home Page
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          This is a beautifully styled home page with animations and responsive design.
        </p>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Price: ${product.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No products available.</p>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={logOutUser}
          className="px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
        >
          Log Out
        </button>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-200 py-6 mt-auto bottom-0 fixed w-full">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Home;
