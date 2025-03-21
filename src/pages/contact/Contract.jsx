/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/{your-form-id}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus({ success: true, error: false });
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setSubmissionStatus({ success: false, error: true });
      }
    } catch (error) {
      setSubmissionStatus({ success: false, error: true });
      console.log(error);
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <section className="w-full mt-10 rounded-2xl py-16 bg-gray-900 text-white dark:text-white">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Typography variant="h3" className="font-bold text-4xl mb-4">
              Contact Us
            </Typography>
          </motion.div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    placeholder="Enter your message"
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="py-3 px-6 text-lg"
                  >
                    SEND
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full"
            >
              <div className="map-container rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4974349999997!2d30.09131531532861!3d-1.9407129985702365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b433f2f29%3A0x7c7b7b7b7b7b7b7b!2sMasoro%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1697212345678!5m2!1sen!2sus"
                  className="w-full h-full object-cover"
                  style={{ border: 0, height: 500 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Snackbar for Submission Status */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={submissionStatus.success ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {submissionStatus.success
              ? "Message sent successfully!"
              : "Failed to send message. Please try again."}
          </Alert>
        </Snackbar>
      </section>
    </>
  );
}
