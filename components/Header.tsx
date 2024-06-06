"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  AlarmClockCheck,
  ChevronRight,
  UsersRound,
  MapPinned,
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
const Header = () => {
  return (
    <div className="relative w-full h-[1000px] bg-cover bg-center bg-[url('https://res.cloudinary.com/dioas9lmz/image/upload/v1716098657/MarineStripedMarlinAnimalBackgroundFishingPhotographyBackdropIBD-20099_wsgf2j.jpg')]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="absolute right-40 top-60 max-lg:left-12 max-lg:right-12">
        <h1 className="text-heading1-bold text-white mb-6 dark:text-sky-900">
          Explore the World of Fishing with Us
        </h1>
        <h1 className="text-heading1-bold text-white mb-6 dark:text-sky-900">
          Get the Biggest Fish on the Earth
        </h1>

        <p className="text-body-medium text-slate-300 mb-6 dark:text-sky-700">
          Summer’s over, but the fishing is always on.
        </p>
        <Button className="border-none rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
          Join The Club
        </Button>
      </motion.div>
      <motion.div
        className="grid gap-12 grid-cols-3 absolute bottom-20 left-1/3 -translate-x-1/2 max-lg:hidden"
        variants={container}
        initial="hidden"
        animate="visible">
        <motion.div
          variants={item}
          className="rounded-lg px-4 py-6 max-w-[300px] bg-white dark:bg-sky-900 drop-shadow-xl">
          <div className="flex justify-start">
            <h1 className="text-heading1-bold text-slate-300">1</h1>
            <AlarmClockCheck size={60} className="ml-20 text-sky-300" />
          </div>
          <h2 className="text-heading2-bold text-sky-900 dark:text-sky-300 text-center mt-8">
            Choose Place, Activity, And Time
          </h2>
          <p className="text-base-medium leading-relaxed text-slate-300 mt-6">
            We bring the right people together to challenge established thinking
            and drive transform in 2020
          </p>
          <div className="flex justify-end mt-6">
            <Link
              href="#"
              className="flex items-center text-sky-400 hover:-translate-y-2 duration-300">
              Read More <ChevronRight />
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="rounded-lg px-4 py-6 max-w-[300px] bg-white dark:bg-sky-900 drop-shadow-xl">
          <div className="flex justify-start">
            <h1 className="text-heading1-bold text-slate-300">2</h1>
            <UsersRound size={60} className="ml-20 text-sky-300" />
          </div>
          <h2 className="text-heading2-bold text-sky-900 dark:text-sky-300 text-center mt-8">
            Find People Who Have The Same Interest
          </h2>
          <p className="text-base-medium leading-relaxed text-slate-300 mt-6">
            We bring the right people together to challenge established thinking
            and drive transform in 2020
          </p>
          <div className="flex justify-end mt-6">
            <Link
              href="#"
              className="flex items-center text-sky-400 hover:-translate-y-2 duration-300">
              Read More <ChevronRight />
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="rounded-lg px-4 py-6 max-w-[300px] bg-white dark:bg-sky-900 drop-shadow-xl">
          <div className="flex justify-start">
            <h1 className="text-heading1-bold text-slate-300">3</h1>
            <MapPinned size={60} className="ml-20 text-sky-300" />
          </div>
          <h2 className="text-heading2-bold text-sky-900 dark:text-sky-300 text-center mt-8">
            Offer Members To Go On A Joint Adventure
          </h2>
          <p className="text-base-medium leading-relaxed text-slate-300 mt-6">
            We bring the right people together to challenge established thinking
            and drive transform in 2020
          </p>
          <div className="flex justify-end mt-6">
            <Link
              href="#"
              className="flex items-center text-sky-400 hover:-translate-y-2 duration-300">
              Read More <ChevronRight />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
