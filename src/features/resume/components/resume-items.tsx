"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { about } from "../about-items";
import { education } from "../education-items";
import { skills } from "../skills-items";

const tabs = [
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

const ResumeItems = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full mt-25 py-12"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {/* Education */}
            {activeTab === "education" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div
                      key={item.institution}
                      className="border border-border rounded-xl p-5 hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h3 className="text-base font-semibold">
                          {item.institution}
                        </h3>
                        <span className="text-sm text-primary font-medium shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground/80 mb-1">
                        {item.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.profession}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {activeTab === "skills" && (
              <div>
                <h2 className="text-2xl font-bold mb-2">{skills.title}</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  {skills.description}
                </p>
                <div className="space-y-8">
                  {skills.categories.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {category.items.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2.5 p-3 border border-border rounded-lg hover:bg-accent hover:border-primary/30 transition-all duration-200 group"
                          >
                            <span className="text-primary text-lg shrink-0 group-hover:scale-110 transition-transform">
                              {skill.icon && <skill.icon />}
                            </span>
                            <span className="text-sm font-medium truncate">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About */}
            {activeTab === "about" && (
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {about.description}
                </p>
                <div className="border border-border rounded-xl overflow-hidden">
                  {about.info.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-5 py-3.5 gap-4 even:bg-accent/20 border-b border-border last:border-b-0"
                    >
                      <span className="text-sm font-semibold shrink-0">
                        {item.fieldName}
                      </span>
                      <span className="text-sm text-muted-foreground text-right">
                        {item.fieldValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ResumeItems;
