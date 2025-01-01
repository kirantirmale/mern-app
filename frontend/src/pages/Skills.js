import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';

function Skills() {
    return (
        <Box className="dark:bg-gray-900 text-center mt-10 m-5">
            <motion.div
                id="home"
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    variant="h4"
                    className="font-semibold text-gray-900 dark:text-white mb-6"
                >
                    Mern Stack Developer
                </Typography>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {/* React JS */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaReact size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        React JS
                    </Typography>
                </motion.div>
                
                {/* Node.js */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <DiNodejs size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        Node.js
                    </Typography>
                </motion.div>

                {/* MongoDB */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <DiMongodb size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        MongoDB
                    </Typography>
                </motion.div>

                {/* Express.js */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <SiExpress size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        Express.js
                    </Typography>
                </motion.div>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                {/* HTML5 */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaHtml5 size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        HTML5
                    </Typography>
                </motion.div>

                {/* CSS3 */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaCss3 size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        CSS 3
                    </Typography>
                </motion.div>

                {/* Bootstrap */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaBootstrap size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        Bootstrap
                    </Typography>
                </motion.div>

                {/* TailwindCSS */}
                <motion.div
                    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center transition-all duration-300 ease-in-out hover:bg-teal-500 hover:shadow-lg hover:text-white"
                    whileHover={{ scale: 1.1 }}
                >
                    <RiTailwindCssFill size={100} className="mx-auto mb-4" />
                    <Typography className="font-semibold text-gray-900 dark:text-white">
                        TailwindCSS
                    </Typography>
                </motion.div>
            </motion.div>
        </Box>
    );
}

export default Skills;
