import React from 'react';
import { Typography, Container, Grid2, Card, CardContent, Button, Grid22 } from '@mui/material';
import { School, Work } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import home from "../assets/images/home.jpg"

function Home() {
  return (
    <section
   
    >


      <div
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}

        className="bg-gray-50 dark:bg-gray-900 p-10">

        <div className='text-center'>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <Typography variant="h4" component="h2" className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Kiran Ajay Tirmale | Software Engineer
            </Typography>
            <Typography variant="body1" className="text-gray-600 dark:text-gray-300 mb-8">
              <a href="mailto:kirantirmale2362001@gmail.com" className="text-blue-500">kirantirmale2362001@gmail.com</a> | +91 9607128284 | Location: Pune, Nigdi, Maharashtra, India
            </Typography>
            <Typography variant="body2" className="text-gray-600 dark:text-gray-300">
              I am a skilled MERN stack developer with expertise in React.js, Node.js, MongoDB, and more. Currently pursuing MCA and open to new opportunities.
            </Typography>
          </motion.div>
        </div>

        {/* Education Section */}
        <Container maxWidth="lg" className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Typography variant="h5" className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Education</Typography>
            <Grid2 container spacing={4}>
              <Grid2 item xs={12} sm={6} md={4}>
                <Card className="shadow-lg dark:bg-gray-800">
                  <CardContent>
                    <School className="text-blue-500 mb-4" />
                    <Typography variant="h6" component="h5" className="font-semibold text-gray-900 dark:text-white">
                      Master of Computer Applications (MCA)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-4">
                      R.K.D.F University, Bhopal (Ongoing)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4}>
                <Card className="shadow-lg dark:bg-gray-800">
                  <CardContent>
                    <School className="text-blue-500 mb-4" />
                    <Typography variant="h6" component="h5" className="font-semibold text-gray-900 dark:text-white">
                      Bachelor of Computer Applications (BCA)
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-4">
                      ST CO.OP ES'S Institute of Management Research & Development, North Maharashtra University, Jalgaon (2019-2023)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              {/* Add more education entries here */}
            </Grid2>
          </motion.div>
        </Container>

        {/* Work Experience Section */}
        <Container maxWidth="lg" className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Typography variant="h5" className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Work Experience</Typography>
            <Grid2 container spacing={4}>
              <Grid2 item xs={12} sm={6} md={4}>
                <Card className="shadow-lg dark:bg-gray-800">
                  <CardContent>
                    <Work className="text-green-500 mb-4" />
                    <Typography variant="h6" component="h5" className="font-semibold text-gray-900 dark:text-white">
                      Software Engineer Intern
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-4">
                      Opash Software, Surat (January 2024 – August 2024)
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Developed and enhanced web applications using React.js, Node.js, and MongoDB. Focused on optimizing performance and scalability.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              {/* Add more work experience entries here */}
            </Grid2>
          </motion.div>
        </Container>



        {/* Contact Section */}
        <Container maxWidth="lg" className="mb-12">

          <Typography variant="h5" className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact Me</Typography>

          <div className="mt-10">
            <Link
              to="/contact"
              type="submit"
              className=" rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-teal-200 shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in Touch
            </Link>
          </div>


          <p className="text-gray-600 dark:text-gray-300 mt-5">
            Feel free to reach out to discuss any opportunities or collaborations.
          </p>

        </Container>
      </div>
    </section>
  );
}

export default Home;
