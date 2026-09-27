import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/ShivamImg.jpeg";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaRocket,
  FaDownload,
  FaArrowRight,
  FaBolt,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";

const About = () => {
  const stats = [
    { label: "Completed Projects", value: "15+" },
    { label: "Core Specialization", value: "MERN" },
    { label: "Code Quality", value: "100%" },
    { label: "Commitment", value: "Fast & Agile" },
  ];

  const highlights = [
    {
      icon: FaBolt,
      title: "Performance & Scale",
      description: "Optimized component lifecycles, fast asset loading, and high Core Web Vitals scores.",
      badge: "Speed First",
      color: "text-amber-500 dark:text-amber-400",
      bg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/20",
    },
    {
      icon: FaCode,
      title: "Clean Architecture",
      description: "Modular, readable code with reusable component patterns and robust state management.",
      badge: "Maintainable",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/20",
    },
    {
      icon: FaLayerGroup,
      title: "Full-Stack MERN",
      description: "Seamless integration between React 19 frontends, Express/Node APIs, and MongoDB databases.",
      badge: "End-to-End",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10 dark:bg-purple-500/15 border-purple-500/20",
    },
    {
      icon: FaRocket,
      title: "Modern UI/UX Engineering",
      description: "Pixel-perfect responsiveness with Tailwind CSS, accessible semantics, and fluid animations.",
      badge: "High Polish",
      color: "text-emerald-500 dark:text-emerald-400",
      bg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/20",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/shivam_resume.pdf";
    link.download = "Shivam_Savita_Resume.pdf";
    link.click();
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            Passionate MERN developer with a drive for clean architecture, fast rendering, and building web applications that solve real-world problems.
          </p>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Visual Portrait Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Portrait Card */}
            <div className="relative group rounded-3xl p-3 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-indigo-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Photo Container */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-inner">
                <img
                  src={Photo}
                  alt="Shivam Savita - Full Stack MERN Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle base gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Status Badge in Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-purple-300 font-mono font-semibold uppercase tracking-wider">
                      Location & Status
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <FaMapMarkerAlt className="text-pink-400 text-xs" />
                      <span>Noida / Delhi NCR, India</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-3xl p-5 sm:p-6 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-slate-200/40 dark:shadow-none space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-900/30 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Education</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">B.Tech in Information</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-900/30 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-lg shrink-0">
                  <SiReact />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Stack</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">React 19, Node.js, Express, MongoDB</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-900/30 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg shrink-0">
                  <FaCheckCircle />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Work Philosophy</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Clean Code & Ownership Mindset</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Pillars & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Turning complex problems into{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
                  intuitive digital products.
                </span>
              </h3>

              <div className="space-y-4 mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a Full Stack Developer specializing in the <strong className="text-slate-900 dark:text-white font-semibold">MERN ecosystem</strong> with a passion for building robust, scalable web applications that deliver real impact.
                </p>
                <p>
                  My journey involves developing end-to-end solutions — from designing normalized databases in <strong className="text-slate-900 dark:text-white font-semibold">MongoDB</strong> and creating secure REST APIs with <strong className="text-slate-900 dark:text-white font-semibold">Node.js & Express</strong>, to engineering highly responsive user interfaces with <strong className="text-slate-900 dark:text-white font-semibold">React 19 & Tailwind CSS</strong>.
                </p>
                <p>
                  I care deeply about developer experience and product quality: writing modular, clean code, optimizing for fast load times, and ensuring seamless cross-device compatibility.
                </p>
              </div>

              {/* Action Buttons inside Story Card */}
              <div className="mt-7 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Discuss Opportunities</span>
                  <FaArrowRight className="text-xs" />
                </a>

                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-white border border-slate-300 dark:border-white/15 hover:border-purple-500/50 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <FaDownload className="text-xs text-purple-600 dark:text-purple-400" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* 4 Pillars Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-5 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-950/30 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center ${item.color} text-lg group-hover:scale-110 transition-transform`}>
                        <item.icon />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-3.5 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl text-center shadow-sm"
                >
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
