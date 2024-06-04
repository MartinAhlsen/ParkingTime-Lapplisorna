"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-pt-primary text-white sticky top-0 z-50">
      <div>
        Hello world
      </div>
      <div className="container mx-auto flex justify-between items-center p-8">
        <div className="flex justify-end w-full">
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isOpen ? "open" : "closed"}
              variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </motion.svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            variants={wrapperVariants}
            className="bg-pt-primary absolute top-16 left-0 right-0 shadow-md p-4"
          >
            <motion.p variants={itemVariants} className="mb-4">Why Parking Time?</motion.p>
            <motion.a variants={itemVariants} href="/about_us" className="block mb-2">About Us</motion.a>
            <motion.a variants={itemVariants} href="/news" className="block mb-2">News</motion.a>
            <motion.a variants={itemVariants} href="/faq" className="block mb-2">FAQ</motion.a>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

