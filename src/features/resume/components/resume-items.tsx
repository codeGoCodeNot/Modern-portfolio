"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { about } from "../about-items";
import { education } from "../education-items";
import { experienceItems } from "../experience-items";
import { skills } from "../skills-items";

const ResumeItems = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-1 items-center justify-center py-12 lg:py-0 self-center mt-25 w-full"
    >
      <Tabs
        defaultValue="experience"
        className="min-w-[420px] flex justify-center items-center flex-1"
      >
        <TabsList className="bg-muted border border-border rounded-lg shadow-sm p-1 gap-2">
          <TabsTrigger
            value="experience"
            className="px-4 py-2 rounded-md text-sm font-semibold transition-colors data-active:bg-background data-active:text-primary hover:bg-accent hover:text-accent-foreground"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="px-4 py-2 rounded-md text-sm font-semibold transition-colors data-active:bg-background data-active:text-primary hover:bg-accent hover:text-accent-foreground"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="px-4 py-2 rounded-md text-sm font-semibold transition-colors data-active:bg-background data-active:text-primary hover:bg-accent hover:text-accent-foreground"
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="px-4 py-2 rounded-md text-sm font-semibold transition-colors data-active:bg-background data-active:text-primary hover:bg-accent hover:text-accent-foreground"
          >
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <div>
            {experienceItems.map((item) => (
              <div key={item.title}>
                <h1 className="text-2xl mt-6 mb-4">{item.title}</h1>
                <div className="text-sm text-muted-foreground ">
                  {item.items.map((item) => (
                    <div key={item.company}>
                      <p>{item.duration}</p>
                      <h1>{item.company}</h1>
                      <h2>{item.position}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div>
            {education.map((item) => (
              <div key={item.institution}>
                <h1 className="text-2xl mt-6 mb-4 max-w-[400px]">
                  {item.institution}
                </h1>
                <div className="text-sm text-muted-foreground ">
                  <h2>{item.profession}</h2>
                  <h1>{item.degree}</h1>
                  <p>{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <div>
            <div className="text-2xl mt-6">
              <h1 className="mb-4">{skills.title}</h1>
              <p className="text-muted-foreground text-sm mb-6 max-w-[400px]">
                {skills.description}
              </p>
              {skills.skillList.map((skill) => (
                <div key={skill.name}>
                  <div className="flex flex-1 items-center  gap-x-2 text-lg mb-2 border border-border rounded-md p-2 max-w-[270px]">
                    <div>{skill.icon && <skill.icon />}</div>
                    <div> {skill.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="about">
          <div className="max-w-[400px]">
            <h1 className="text-2xl mt-6 mb-4">{about.title}</h1>
            <p className="text-muted-foreground text-sm max-w-[400px]">
              {about.description}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ResumeItems;
