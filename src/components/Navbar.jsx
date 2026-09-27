import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            const targetPath = section === "home" ? "/" : `/${section}`;
            if (window.location.pathname !== targetPath) {
              window.history.replaceState(null, "", targetPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle direct navigation to /about, /skills, or legacy #about
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const targetPath = hashId === "home" ? "/" : `/${hashId}`;
      window.history.replaceState(null, "", targetPath);
      const el = document.getElementById(hashId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    } else if (window.location.pathname && window.location.pathname !== "/") {
      const pathId = window.location.pathname.replace(/^\//, "");
      const el = document.getElementById(pathId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetPath = targetId === "home" ? "/" : `/${targetId}`;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", targetPath);
    setActiveSection(targetId);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/shivam_resume.pdf";
    link.download = "Shivam_Savita_Resume.pdf";
    link.click();
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Skills", href: "/skills", id: "skills" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Experience", href: "/experience", id: "experience" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-white/85 dark:bg-[#0c0d14]/85 backdrop-blur-xl border-slate-200/80 dark:border-purple-500/20 shadow-xl shadow-slate-200/50 dark:shadow-purple-950/20"
            : "bg-white/70 dark:bg-[#11131f]/70 backdrop-blur-lg border-slate-200/60 dark:border-white/10 shadow-md shadow-slate-200/30 dark:shadow-none"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            SS
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
            Shivam<span className="text-purple-600 dark:text-purple-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? "text-purple-600 dark:text-white font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-purple-500/15 dark:bg-gradient-to-r dark:from-purple-600/30 dark:to-pink-600/30 border border-purple-500/30 dark:border-purple-500/40 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Controls: Theme Toggle & Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-amber-300 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            {theme === "dark" ? (
              <FaSun className="text-amber-400 text-sm animate-spin-slow" />
            ) : (
              <FaMoon className="text-purple-600 text-sm" />
            )}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <FaDownload className="text-xs" />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {showMenu ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed top-20 left-4 right-4 max-w-md mx-auto p-5 rounded-2xl bg-white/95 dark:bg-[#0c0d17]/95 backdrop-blur-2xl border border-slate-200 dark:border-purple-500/30 shadow-2xl shadow-slate-300/50 dark:shadow-purple-950/50 flex flex-col space-y-3 z-50 md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    handleScrollTo(e, link.id);
                    setShowMenu(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all cursor-pointer ${
                    activeSection === link.id
                      ? "bg-purple-500/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-300 border border-purple-500/20 dark:border-purple-500/30 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowMenu(false);
                  handleDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/30"
              >
                <FaDownload />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


