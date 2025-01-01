import React from 'react';
import kiran from "../assets/images/kiran.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">

      {/* Heading Section */}

      <div className="container mx-auto px-4 bg-black">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
          {/* Left Side Information */}
          <div className="lg:w-1/2 text-center lg:text-left  mt-40 "> {/* Adjusted margin-top */}
            <h2 className="text-5xl font-extrabold text-white mb-4 sm:mb-6"> {/* Adjusted margin-bottom */}
              Kiran Ajay Tirmale | <span className="text-indigo-400">Software Engineer</span>
            </h2>
            <p className="text-lg text-gray-400 mb-4 sm:mb-6"> {/* Adjusted margin-bottom */}
              <a
                href="mailto:kirantirmale2362001@gmail.com"
                className="text-blue-500 hover:underline"
              >
                kirantirmale2362001@gmail.com
              </a>{" "}
              | +91 9607128284 | Location: Pune, Nigdi, Maharashtra, India
            </p>
            <p className="text-lg text-gray-300">
              I am a skilled MERN stack developer with expertise in React.js, Node.js,
              MongoDB, and more. Currently pursuing MCA and open to new opportunities.
            </p>
          </div>
          {/* Right Side Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={kiran}
              alt="Kiran Ajay Tirmale"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* About Me */}
      <section id="about-me" className="py-16  text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-500 mb-4">
            Hello, I'm Kiran Tirmale. As a software engineer, I have extensive experience and knowledge in the world of technology and programming.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            Software engineers are the architects of the digital world, tasked with designing, developing, and maintaining the intricate systems that power our modern lives.
          </p>
          <p className="text-lg text-gray-500 mb-6">
            In addition to technical prowess, software engineers possess a deep understanding of software development methodologies and best practices.
          </p>
          <p className="text-lg text-gray-500">
            Software engineers thrive in environments that foster creativity, collaboration, and continuous learning.
          </p>
        </div>
      </section>

      {/* Work Experience & Education*/}
      <section id="work-education" className="py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8">Work & Education</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work Experience */}
            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">Jan 2024 - July 2024</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">Software Engineer</h4>
              <p className="text-gray-400 mb-2">Company - Opash Software, Surat</p>
              <p className="text-gray-300">
                Software developers are the architects of the digital world, responsible for creating the applications and systems that power our everyday lives, and data structures, using these tools to craft innovative solutions to complex problems.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">June 2022 - Feb 2023</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">Full-Stack Developer - Course</h4>
              <p className="text-gray-400 mb-2">OSCAR CAREER POINT</p>
              <p className="text-gray-300">
                Full-stack developers are versatile professionals who possess a comprehensive understanding of both front-end and back-end technologies in software development.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">March 2021 - June 2022</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">Frontend Developer</h4>
              <p className="text-gray-400 mb-2">Company - Teleperformance, Vadodara</p>
              <p className="text-gray-300">
                Frontend developers are the creative minds behind the user interfaces of websites and applications, shaping the way users interact with digital products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Education */}
            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">June 2023 - Present</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">Master of Computer Applications (MCA)</h4>
              <p className="text-gray-400 mb-2">RKDF University</p>
              <p className="text-gray-300">
                A Master of Computer Applications (MCA) degree equips individuals with advanced knowledge and skills in the field of computer science and software development.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">July 2019 - June 2022</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-gray-400 mb-2">NMU University</p>
              <p className="text-gray-300">
                A Bachelor of Computer Applications (BCA) degree provides students with a strong foundation in computer science, software development, and information technology.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4 transform transition-all duration-300 hover:text-indigo-400">July 2017 - June 2019</h3>
              <h4 className="font-semibold text-gray-300 text-lg mb-2">High School</h4>
              <p className="text-gray-400 mb-2">RDMP High School</p>
              <p className="text-gray-300">
                High school education forms the foundation for students' academic and personal growth, providing a diverse range of subjects and opportunities for learning.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* My Projects */}
      {/* <section id="projects" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 1: Employee Dashboard</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive dashboard for managing employee data, utilizing React, Node.js, and MongoDB to create an interactive and user-friendly interface.
              </p>
              <a href="#!" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 2: Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                An analytical dashboard to monitor system processes, health, and threats using React.js and Ant Design, with real-time data visualization.
              </p>
              <a href="#!" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Project 3: MERN Stack Blog</h3>
              <p className="text-gray-400 mb-4">
                A fully functional blog application built using the MERN stack, featuring CRUD operations, user authentication, and real-time comments.
              </p>
              <a href="#!" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section> */}

      <section id="hire-me" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8">Hire Me</h2>
          <div className="text-center space-x-4">
            {/* Download CV Button */}
            <a href="/assets/images/KiranTirmale-CV.pdf"
              download="KiranTirmale-CV.pdf"
              className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600">
              Download CV
            </a>


            {/* Contact Me Button */}
            <Link to="/Contact"
              className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600">
              Contact Me
            </Link>
          </div>
        </div>
      </section>









    </section>
  );
}

export default Home;
