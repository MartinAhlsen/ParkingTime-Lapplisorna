"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const wrapperVariants = {
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  return (
    <nav className="p-5 bg-pt-primary text-white sticky top-0 z-50" style={{height: '61px'}}>
      <div className="flex justify-between items-center px-5">
        <Link href="/">
          <Image
            src="/Images/P-icon.png"
            alt="Icon"
            width="48"
            height="20"
            className="cursor-pointer -mt-3"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex">
            <Link href="/WhyParkingTime">
              <li className="ml-10 hover:border-b text-xl">Why Parking Time?</li>
            </Link>
            <Link href="/about_us">
              <li className="ml-10 hover:border-b text-xl">About us</li>
            </Link>
            <Link href="/news">
              <li className="ml-10 hover:border-b text-xl">News</li>
            </Link>
            <Link href="/FAQ">
              <li className="ml-10 hover:border-b text-xl">FAQ</li>
            </Link>
            <Link href="/contact_us">
              <button className="ml-4 sm:ml-10 bg-white text-black text-xl px-4 py-2 rounded-full -mt-3">Contact us</button>
            </Link>
          </ul>
        </div>
        <div className="block sm:hidden">
          <button
            className="focus:outline-none"
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
      </div>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          variants={wrapperVariants}
          className="bg-pt-primary w-full sm:hidden flex flex-col p-4 space-y-4 fixed top-15 left-0"
        >
          <motion.p variants={itemVariants} >Why Parking Time?</motion.p>
          <motion.a variants={itemVariants} href="/about_us" className="block mb-2">About Us</motion.a>
          <motion.a variants={itemVariants} href="/news" className="block mb-2">News</motion.a>
          <motion.a variants={itemVariants} href="/FAQ" className="block mb-2">FAQ</motion.a>
          <motion.a variants={itemVariants} href="/contact_us" className="block bg-white text-black text-center py-2 rounded-full">Contact Us</motion.a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;