/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full mt-10 pt-6 bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Typography variant="body1" className="text-white">
              &copy; 2025 All Rights Reserved By{' '}
              <Link
                href="https://html.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                LD
              </Link>
            </Typography>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;