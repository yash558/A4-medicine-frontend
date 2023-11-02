import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import { motion } from "framer-motion";
import { aktDemo } from '../assets';

const AktDemo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="h-full flex flex-col bg-[--main-color] items-center justify-center py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src={aktDemo}
        alt=""
        className="h-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="text-3xl font-bold text-center text-white capitalize"
        variants={containerVariants}
      >
        <h3>Take a demo of Akt revision and enhance your learning <br /> experience with us.</h3>
      </motion.div>
      <motion.div
        className="my-2"
        variants={containerVariants}
      >
        <motion.button
          className="bg-white text-[--main-color] h-12 w-28"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Link
            to="/demoquiz"
            className="text-xl font-bold"
            onClick={scrollToTop}
          >
            Akt Demo
          </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AktDemo;
