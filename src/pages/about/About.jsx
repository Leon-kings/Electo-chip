/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import image from '../../assets/images/others/electrician-2.jpg'
export default function About() {
  return (
    <>
     <section className="w-full mt-10 py-16 bg-gray-900 text-white dark:text-white rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-8">
              <Typography variant="h3" className="font-bold text-4xl mb-4">
                About Us
              </Typography>
            </div>
            <Typography variant="body1" className="text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="#"
              className="py-3 px-6 text-lg"
            >
              Read More
            </Button>
          </motion.div>

          {/* Right Section - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <img
                  src={image} // Replace with your image path
                  alt="About Us 1"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section> 
    </>
  )
}
