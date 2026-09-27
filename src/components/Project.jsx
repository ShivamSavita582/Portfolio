import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Full Stack", "Frontend", "JavaScript"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            A hand-picked selection of full-stack platforms, client-side web applications, and interactive digital experiences.
          </p>

          {/* Project Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === tab
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400"
                    : "bg-white/80 dark:bg-[#111322]/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA: View GitHub Profile */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/ShivamSavita582"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/90 dark:bg-[#111322]/90 hover:bg-slate-100 dark:hover:bg-[#181a30] text-slate-800 dark:text-white font-semibold text-sm sm:text-base border border-slate-200/80 dark:border-white/15 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-950/30 transition-all duration-200 group shadow-sm"
          >
            <FaGithub className="text-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
            <span>View More Projects on GitHub</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
