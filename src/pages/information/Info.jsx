/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import image from "../../assets/images/logo/optimal-electrical-logo.png";
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
export default function Info() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setOpenSnackbar(true);
      setEmail(""); // Reset email input
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <section className="w-full mt-10 py-16 rounded-2xl bg-gray-900 text-white dark:text-white">
        <div className="container mx-auto px-4">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <a href="#" className="flex items-center">
                <img
                  src={image} // Replace with your image path
                  alt="Location"
                  className="w-8 h-8 mr-4"
                />
                <span className="text-lg">LD</span>
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <a href="#" className="items-center">
                <p>
                  <Call className="size-6" />
                </p>
                <p className="text-lg"> +012334567890</p>
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <a href="#" className="items-center">
                <p>
                  {" "}
                  <Email className="size-6" />
                </p>
                <p className="text-lg">demo@gmail.com</p>
              </a>
            </motion.div>
          </div>

          {/* Subscription Form and Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Subscription Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <form onSubmit={handleSubscribe} className="flex w-full">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-l-lg"
                  InputProps={{
                    style: { color: "#000", backgroundColor: "#fff" },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="py-3 px-6 rounded-r-lg"
                >
                  Subscribe
                </Button>
              </form>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center md:justify-end gap-4"
            >
              <Facebook className="size-6" />
              <Twitter className="size-6" />
              <LinkedIn className="size-6" />
              <Instagram className="size-6" />
            </motion.div>
          </div>
        </div>

        {/* Snackbar for Subscription Feedback */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={subscribed ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {subscribed
              ? "Thank you for subscribing!"
              : "Please enter a valid email."}
          </Alert>
        </Snackbar>
      </section>
    </>
  );
}
