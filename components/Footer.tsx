"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Youtube, Twitter, Mail, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-cyan-700 dark:bg-sky-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex justify-center items-center">
              <Image src="/logo.png" alt="logo" width={130} height={100} />
              <span className="self-center ml-4 text-heading2-bold font-bold whitespace-nowrap text-sky-300 dark:text-sky-700">
                Fishing Club
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-300 uppercase dark:text-sky-700">
                About Us
              </h2>
              <ul className="text-white dark:text-sky-300 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Brands
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-300 uppercase dark:text-sky-700">
                Club Info
              </h2>
              <ul className="text-white dark:text-sky-300 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Join Club
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Events
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline">
                    Member Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-300 uppercase dark:text-sky-700">
                Help & Support
              </h2>
              <ul className="text-white dark:text-sky-300 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline ">
                    Q & A
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline">
                    Shipping & Return
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-sky-300 uppercase dark:text-sky-700">
                Legal
              </h2>
              <ul className="text-white dark:text-sky-300 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-sky-900 dark:border-sky-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-white dark:text-sky-300 ">
          <span className="text-sm  sm:text-center ">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Fishing Club™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className=" hover:text-sky-900 dark:hover:text-white">
              <Facebook />
            </a>
            <a
              href="#"
              className=" hover:text-sky-900 dark:hover:text-white ms-5">
              <Youtube />
            </a>
            <a
              href="#"
              className=" hover:text-sky-900 dark:hover:text-white ms-5">
              <Twitter />
            </a>
            <a
              href="#"
              className=" hover:text-sky-900 dark:hover:text-white ms-5">
              <Mail />
            </a>
            <a
              href="#"
              className=" hover:text-sky-900 dark:hover:text-white ms-5">
              <Instagram />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
