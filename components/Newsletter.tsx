"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MailPlus } from "lucide-react";
import { motion } from "framer-motion";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-8 py-8 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-[1482px] grid grid-cols-2 rounded-lg gap-32 px-8 py-4 max-lg:gap-8 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center backdrop-blur-sm backdrop-contrast-125 bg-slate-200 dark:bg-blue-950">
        <div className="px-8 flex justify-start items-center max-lg:px-2">
          <MailPlus size={80} className="text-sky-500" />
          <h2 className="text-sky-900 ml-8 text-heading2-bold font-normal">
            Subscribed to Our Newsletter
          </h2>
        </div>

        <div className="flex px-8 justify-end items-center space-x-2 max-lg:px-2">
          <Input
            type="email"
            placeholder="Your Email "
            className="w-[420px] max-lg:w-auto"
          />
          <Button
            type="submit"
            className="border-none  rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 bg-sky-500 dark:bg-sky-900 text-white">
            Subscribe
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
