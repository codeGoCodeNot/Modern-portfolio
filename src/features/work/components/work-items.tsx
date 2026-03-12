"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { projects } from "../project-items";
import Link from "next/link";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderButtons from "./work-slider-buttons";

const WorkItems = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] h-[50%]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-5xl leading-none font-extrabold text-transparent transition-all duration-300 [-webkit-text-stroke:1px_#fff]">
                {project.number}
              </div>
              <h2 className="text-[25px] font-bold leading-none text-white group-hover:[-webkit-text-stroke:1px_#f97316] group-hover:text-primary/10">
                {project.category} Project
              </h2>
              <p className="text-white/60 text-sm">{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item} className="text-primary">
                    {item}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              <div className="flex gap-x-2 items-center">
                <Link href={project.link} target="_blank">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white hover:text-primary transition-colors duration-300 text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.githubLink} target="_blank">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsGithub className="text-white hover:text-primary transition-colors duration-300 text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Source Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item) => (
                <SwiperSlide key={item.number} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-amber-100/20">
                    {/* overlay */}
                    {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div> */}
                    <div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover border border-white/20 group-hover:border-emerald-50 transition-all duration-300"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles="flex gap-x-2 absolute bottom-[calc(50%_-_22px)] right-0 z-20 justify-between w-full lg:justify-none lg:w-max lg:bottom-0"
                iconsStyles="text-white hover:text-primary transition-colors duration-300 text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkItems;
