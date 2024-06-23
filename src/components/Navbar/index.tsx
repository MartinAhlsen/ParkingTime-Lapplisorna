"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useLocale, useTranslations } from "next-intl";
import Button from "../Button";
import LangToggle from "../LangToogle";

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const t = useTranslations("NavItem");
  const b = useTranslations("buttons");
  const locale = useLocale();
  const ContactButton: ButtonProperties = {
    text: b("contact_us"),
    url: `/${locale}/contact_us`,
    colorTheme: "light",
  };

  return (
    <nav className="p-5 bg-pt-primary text-white items-center sticky top-0 z-50 flex justify-evenly grow shadow-2xl" style={{height: '80px'}}>
      <div className="flex justify-between grow">
        <Link href={`/${locale}/`} className="flex items-center">
          <Image
            src="/Images/P-icon.png"
            alt="Icon"
            width="50"
            height="50"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex justify-end gap-[5%]">
            <Link href={`/${locale}/#why-parking-time`} className="flex items-center">
              <li className="hover:border-b button-text text-nowrap">{t("Why_parking_time?")}</li>
            </Link>
            <Link href={`/${locale}/about_us`} className="flex items-center">
              <li className="hover:border-b button-text text-nowrap">{t("About_us")}</li>
            </Link>
            <Link href={`/${locale}/news`} className="flex items-center">
              <li className="hover:border-b button-text text-nowrap">{t("News")}</li>
            </Link>
            <Link href={`/${locale}/#faq`} className="flex items-center">
              <li className="hover:border-b button-text text-nowrap">{t("FAQ")}</li>
            </Link>

            <Link href={`/${locale}/contact_us`} className="flex items-center">
              <Button {...ContactButton} />
            </Link>
          </ul>
          <div className="mt-3">
          <LangToggle />
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="focus:outline-none flex items-center justify-center"
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
      {isMounted && isOpen && ( // Ensure the menu is rendered only after mount
        <motion.div
          initial="closed"
          animate="open"
          variants={wrapperVariants}
          className="bg-pt-primary w-full md:hidden flex flex-col p-6 space-y-4 fixed top-[80px]"
        >
          <motion.a variants={itemVariants} href={`/${locale}/#why-parking-time`} className="button-text">Why Parking Time?</motion.a>
          <motion.a variants={itemVariants} href={`/${locale}/about_us`} className="block mb-2 button-text">About Us</motion.a>
          <motion.a variants={itemVariants} href={`/${locale}/news`} className="block mb-2 button-text">News</motion.a>
          <motion.a variants={itemVariants} href={`/${locale}/#faq`} className="block mb-2 button-text">FAQ</motion.a>
          <Button {...ContactButton} />
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;