import React from 'react';

function Skills() {


    return (
      <>
        <div>
            <h2>MERN Stack Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center animate__animated animate__fadeIn animate__delay-2s">
                    <h4 className="font-semibold text-gray-900 dark:text-white">React.js</h4>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center animate__animated animate__fadeIn animate__delay-3s">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Node.js</h4>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center animate__animated animate__fadeIn animate__delay-4s">
                    <h4 className="font-semibold text-gray-900 dark:text-white">MongoDB</h4>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 text-center animate__animated animate__fadeIn animate__delay-5s">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Express.js</h4>
                </div>
            </div>
        </div>
      </>
    );
}

export default Skills;
