import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[300px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Career RoadMap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Journey & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            My development path, practical project experiences, and academic background in Computer Science.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-purple-500/30 space-y-12">
          {workData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-[#08090d] border-2 border-purple-500 flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm shadow-lg shadow-purple-600/30 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <item.icon />
              </div>

              {/* Milestone Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-purple-500/10 dark:hover:shadow-purple-950/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium mt-0.5">{item.company}</p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-950/60 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold self-start sm:self-center">
                    <FaCalendarAlt className="text-[10px]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4">
                  {item.description}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
