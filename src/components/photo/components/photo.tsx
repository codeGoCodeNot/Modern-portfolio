"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-[8px] overflow-hidden rounded-full mix-blend-lighten"
        >
          <Image
            src="/assets/profile.png"
            alt="Profile Photo"
            fill
            quality={100}
            className="object-cover object-[50%_30%]"
          />
        </motion.div>

        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="96"
            stroke="#f97316"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0 " }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
