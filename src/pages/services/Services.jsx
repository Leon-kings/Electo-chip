/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { services } from '../../assets/data/object';

export default function Services() {
  const [visibleServices, setVisibleServices] = useState(6); // Initially show 6 services

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 6); // Load 6 more services
  };
  return (
    <>
 <section className="w-full mt-10 rounded-2xl py-16 bg-gray-900 text-white dark:text-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" className="font-bold text-4xl mb-4">
            Our Services
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.slice(0, visibleServices).map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt=''
                  className="w-40 h-30 rounded-2xl object-cover mx-auto"
                />
              </div>
              <Typography variant="h6" className="font-semibold mb-2">
                {service.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {service.description}
              </Typography>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleServices < services.length && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={loadMoreServices}
              className="py-3 px-6 text-lg"
            >
              Show More
            </Button>
          </motion.div>
        )}
      </div>
    </section>
    </>
  )
}
