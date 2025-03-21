/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { blogs } from "../../assets/data/object";

export default function Blog() {
  const [visibleBlogs, setVisibleBlogs] = useState(2); // Initially show 2 blogs
  const [showAll, setShowAll] = useState(false); // Track whether to show all blogs

  const toggleShowMore = () => {
    if (showAll) {
      setVisibleBlogs(2); // Show only 2 blogs when "Show Less" is clicked
    } else {
      setVisibleBlogs(blogs.length); // Show all blogs when "Show More" is clicked
    }
    setShowAll(!showAll); // Toggle the state
  };
  return (
    <>
      <section className="w-full mt-10 py-16 rounded-2xl bg-gray-900 text-white dark:text-white">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Typography variant="h3" className="font-bold text-4xl mb-4">
              Blog
            </Typography>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="img-box">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="detail-box p-6">
                  <Typography variant="h5" className="font-semibold mb-4">
                    {blog.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600">
                    {blog.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {blogs.length > 2 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={toggleShowMore}
                className="py-3 px-6 text-lg"
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
