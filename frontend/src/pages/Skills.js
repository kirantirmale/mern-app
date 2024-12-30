import React from 'react';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';
import mongo from '../assets/images/MongoDB.png';
import ex from '../assets/images/Express.png';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';

function Skills() {
    return (
        <div className="dark:bg-gray-900 text-center mt-10 m-5">
            <div id="home" className="mb-12">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 animate__animated animate__fadeIn">
                    Mern Stack Developer
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <FaReact size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">React JS</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <DiNodejs size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Node.js</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <DiMongodb size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">MongoDB</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <SiExpress size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Express.js</h4>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <FaHtml5 size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">HTML5</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <FaCss3 size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">CSS 3</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <FaBootstrap size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Bootstrap</h4>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                >
                    <RiTailwindCssFill size={100} className="mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900  dark:text-white">TailwindCSS</h4>
                </div>
            </div>
        </div>
    );
}

export default Skills;
