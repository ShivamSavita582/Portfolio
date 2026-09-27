import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[300px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            A comprehensive overview of my technical stack, tools, and libraries used to build scalable modern web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400"
                    : "bg-white/80 dark:bg-[#111322]/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-purple-500/10 dark:hover:shadow-purple-950/20 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-gradient-to-tr dark:from-purple-600/20 dark:to-pink-600/20 border border-purple-500/20 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl group-hover:scale-110 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300">
                    <skill.icon />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-slate-100 to-purple-500/10 dark:from-purple-950/30 dark:via-slate-900/60 dark:to-purple-950/30 border border-purple-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">Always Learning & Expanding</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">Continuously exploring Next.js App Router, TypeScript, Docker, and Cloud Deployment.</p>
          </div>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all duration-200 shrink-0 cursor-pointer"
          >
            See Them in Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;


