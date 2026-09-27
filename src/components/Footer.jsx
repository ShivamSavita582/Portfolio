import React from "react";
import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#07080c] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 overflow-hidden transition-colors duration-300">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-white/5">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "home")}
              className="inline-flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-purple-600/30">
                SS
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                Shivam<span className="text-purple-600 dark:text-purple-400">.dev</span>
              </span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-sm">
              Full Stack MERN Developer crafting high-performance, accessible, and delightful digital experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, "skills")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">Skills</a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">Projects</a>
            <a href="#experience" onClick={(e) => handleScrollTo(e, "experience")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">Experience</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ShivamSavita582"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:border-purple-500/40 transition-colors shadow-sm"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-savita-004a7225b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 transition-colors shadow-sm"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:shivamsavitamahewa7068@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-white hover:border-pink-500/40 transition-colors shadow-sm"
            >
              <HiOutlineMail className="text-lg" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-purple-700 dark:text-purple-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer ml-2 shadow-sm"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Shivam Savita. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
