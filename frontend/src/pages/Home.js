import React, { useEffect, useState } from 'react';


function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  
 

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('LoggedInUser') || 'Guest');
  }, []);


  return (
    <>
    
      <div className=" bg-gray-50 dark:bg-gray-900 text-center mt-32">

        <div id="home" className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 animate__animated animate__fadeIn">
            Mern Stack Developer Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to my portfolio! I specialize in Full Stack Web Development using the MERN stack. Check out my projects below.
          </p>
        </div>

       
      </div>
    </>

  );
}

export default Home;
