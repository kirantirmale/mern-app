import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import home from "../assets/images/home.jpg"
function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        country: 'IN',  // Default country can be updated here
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://mern-app-api-xi.vercel.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the form data
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log('Form submitted successfully:', result);
                // Show success toast
                toast.success('Thank you for contacting us. We will get back to you shortly!');
                
                // Reset form fields after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    country: 'IN',  // Default country reset
                });
            } else {
                console.error('Error submitting form:', result.message);
                // Show error toast
                toast.error('There was an issue submitting your form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Show error toast
            toast.error('An error occurred while submitting the form. Please try again later.');
        }
    };

    return (
        <>
            <div className="p-5"
             style={{
                      backgroundImage: `url(${home})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}

            >
                <form onSubmit={handleSubmit} method="POST" className="mx-auto max-w-xl  bg-red-50 px-6 py-8  rounded-lg shadow dark:border ">
                <div className="mx-auto mb-2">
                    <h2 className="text-balance  font-mono tracking-tight text-gray-900 text-5xl ">Contact Form</h2>
                </div>
                    <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    placeholder="firstName"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-teal-200 bg-opacity-20  px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    placeholder="lastName"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block w-full bg-teal-200 bg-opacity-20 rounded-md  px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-teal-200 bg-opacity-20 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-teal-200 bg-opacity-20 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full  bg-teal-200 bg-opacity-20 appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-black placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            value={formData.country}
                                            onChange={handleChange}
                                        >
                                            <option>IN</option>
                                            <option>US</option>
                                            <option>EU</option>
                                        </select>

                                    </div>
                                    <input
                                        id="phone-number"
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="(123) 456-7890"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="block min-w-0 grow py-1.5 pl-1 bg-teal-200 bg-opacity-20 pr-3 text-base text-gray-900 placeholder:text-gray-600 focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-teal-200 bg-opacity-20 px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-teal-200 shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Contact;
