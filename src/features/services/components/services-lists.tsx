"use client";

import { motion } from "framer-motion";
import { servicesItems } from "../services-item";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const ServicesLists = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesItems.map((service) => (
            <div
              key={service.id}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="flex w-full justify-between items-center">
                <div className="text-4xl font-extrabold text-transparent transition-all duration-300 [-webkit-text-stroke:1px_#fff] group-hover:[-webkit-text-stroke:1px_#f97316] group-hover:text-primary/10">
                  {service.id}
                </div>
                <Link
                  href={service.href}
                  className="w-[50px] h-[50px] rounded-full bg-white/90 group-hover:bg-primary/90 transition-all duration-500 flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowDownRight className="text-accent text-xl" />
                </Link>
              </div>
              <h2 className="text-[25px] font-bold leading-none text-white/90  group-hover:text-primary/90 transition-all duration-500">
                {service.title}
              </h2>
              <div className="text-white/60">{service.description}</div>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesLists;
