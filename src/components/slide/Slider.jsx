/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { slide } from "../../assets/data/object";

export default function SliderPart() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="w-full py-12 bg-gray-900 text-white dark:text-white rounded-2xl">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 items-center">
            {/* Left Section - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <Typography variant="h3" className="font-bold text-4xl mb-4">
                Electrical <br />
                Service Providers
              </Typography>
              <Typography variant="body1" className="text-white mb-6">
                An electrician is a tradesperson specializing in electrical
                wiring of buildings, transmission lines, stationary machines,
                and related equipment.
              </Typography>
              <Typography className="text-gray-400 pt-4 font-medium text-xl">
                Electrical technicians complete the installation, assembly,
                repair, and maintenance of electrical devices. They read
                blueprints, perform diagnostic assessments, and use a variety of
                tools and techniques to ensure that the equipment that they're
                working on is functioning optimally.
              </Typography>
              <Button variant="contained" color="primary" href="#contact">
                Contact Us
              </Button>
            </motion.div>

            {/* Right Section - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <Slider {...settings}>
                {slide.map((slide, index) => (
                  <div key={index}>
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
