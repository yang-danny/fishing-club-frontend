"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  ShieldCheck,
  HeartHandshake,
  PiggyBank,
  MapPinned,
  Slack,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const JoinClub = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-5 ">
      <div className="flex flex-col rounded-lg items-start max-md:items-center backdrop-blur-sm backdrop-contrast-125 bg-slate-200 dark:bg-blue-950">
        <div className="flex ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Image
              src="https://res.cloudinary.com/dioas9lmz/image/upload/v1717130284/glad-male-angler-with-beard-and-mustache-holding-1-800x640_cupi7c.jpg"
              alt="club"
              width={800}
              height={360}
              className="rounded-tl-lg max-lg:hidden"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex max-w-2xl flex-col items-start p-8">
            <p className="text-body-medium mt-4 text-sky-500 mb-4 dark:text-sky-300">
              Our Benefit Club Memberships...
            </p>
            <h1 className="text-heading1-bold mt-4 text-sky-900">
              Join Our Community of Passionate Anglers
            </h1>
            <p className="text-base-medium mt-4 text-gray-500 mb-4 dark:text-gray-400">
              We are a community of fishing enthusiasts who share a passion for
              the great outdoors and the thrill of the catch. Our society is
              dedicated to promoting the sport of fishing and preserving our
              natural resources for future generations.
            </p>
            <ul>
              <li className="flex items-center mb-2">
                <HeartHandshake size={80} className=" text-sky-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Build From The Community
                </span>
              </li>
              <li className="flex items-center mb-2">
                <PiggyBank size={80} className=" text-sky-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Member Monthly Points
                </span>
              </li>
              <li className="flex items-center mb-2">
                <MapPinned size={80} className=" text-sky-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Conveniently Fishing Spot
                </span>
              </li>
              <li className="flex items-center mb-2">
                <Slack size={80} className=" text-sky-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Annual Member Gathering
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="flex max-lg:flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex max-w-2xl flex-col items-start mx-6 p-8">
            <h1 className="text-heading1-bold mt-4 text-sky-900">
              Membership Benefits
            </h1>
            <p className="text-base-medium mt-8 text-gray-500 mb-4 dark:text-gray-400">
              We are a community of fishing enthusiasts who share a passion for
              the great outdoors and the thrill of the catch. Our society is
              dedicated to promoting the sport of fishing and preserving our
              natural resources for future generations.
            </p>
            <ul>
              <li className="flex items-center mb-2">
                <ShieldCheck size={80} className=" text-teal-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Free mentorship
                </span>
              </li>
              <li className="flex items-center mb-2">
                <ShieldCheck size={80} className=" text-teal-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  Discount in our partner store
                </span>
              </li>
              <li className="flex items-center mb-2">
                <ShieldCheck size={80} className=" text-teal-500" />
                <span className="text-sky-900 text-heading2-bold ml-8 font-normal">
                  24/7 Support
                </span>
              </li>
            </ul>
          </motion.div>
          <div className="flex max-w-2xl flex-col items-center mx-12 my-8 p-8 border-2 border-sky-300 max-lg:mx-8">
            <motion.div
              className="grid grid-cols-2 gap-8 "
              variants={container}
              initial="hidden"
              animate="visible">
              <motion.div
                variants={item}
                className="flex bg-white items-center flex-col py-10 px-16 dark:bg-sky-900 rounded-lg">
                <h2 className="text-heading1-bold text-teal-500">12K+</h2>
                <p className="text-base-medium text-gray-500 mt-4">
                  Active Members
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex bg-white items-center flex-col py-10 px-16 dark:bg-sky-900 rounded-lg">
                <h2 className="text-heading1-bold text-teal-500">2K+</h2>
                <p className="text-base-medium text-gray-500 mt-4">
                  Fishing Equipments
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex bg-white flex-col items-center py-10 px-16 dark:bg-sky-900 rounded-lg">
                <h2 className="text-heading1-bold text-teal-500">1K+</h2>
                <p className="text-base-medium text-gray-500 mt-4">
                  Fishing Awards
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex bg-white flex-col items-center py-10 px-16 dark:bg-sky-900 rounded-lg">
                <h2 className="text-heading1-bold text-teal-500">350+</h2>
                <p className="text-base-medium text-gray-500 mt-4">
                  Fishing Events
                </p>
              </motion.div>
            </motion.div>
            <Button className="border-none mt-8 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
              Join Club Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
