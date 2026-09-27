import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroImg from "../assets/ShivamImg.jpeg";
import { FaLinkedinIn, FaGithub, FaArrowRight, FaCheck, FaCopy, FaStar } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SiReact, SiMongodb } from "react-icons/si";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  // Dynamic Auto-Changing Roles (Typewriter Animation)
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer (MERN)",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentFullText) {
      // Pause when full role text is typed
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      // Move to next role once deleted
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Speed for typing vs deleting
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // 3D Parallax Tilt state with Framer Motion Springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shivamsavitamahewa7068@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ShivamSavita582",
      icon: FaGithub,
      hoverBg: "hover:border-purple-500/60 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-purple-500/20",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shivam-savita-004a7225b/",
      icon: FaLinkedinIn,
      hoverBg: "hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-blue-500/20",
    },
    {
      name: "Email",
      href: "mailto:shivamsavitamahewa7068@gmail.com",
      icon: HiOutlineMail,
      hoverBg: "hover:border-pink-500/60 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-pink-500/20",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 dark:bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-indigo-500/15 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            {/* Recruiter Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/60 border border-purple-500/30 text-purple-700 dark:text-purple-200 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles & Freelance Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Shivam Savita
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 mt-3 tracking-tight min-h-[2.5rem] flex items-center justify-center lg:justify-start">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="inline-block w-[3px] h-6 sm:h-7 ml-1.5 bg-purple-600 dark:bg-purple-400 animate-pulse rounded-full" />
            </h2>

            {/* Value Proposition Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 max-w-2xl mx-auto lg:mx-0">
              I specialize in engineering high-performance web applications using{" "}
              <span className="text-slate-900 dark:text-white font-semibold">MongoDB, Express.js, React 19, and Node.js</span>.
              Passionate about turning complex ideas into clean, scalable architecture and
              delightfully smooth user experiences.
            </p>

            {/* Quick Copy Email Banner */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 hover:border-purple-500/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-300 font-medium">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    <span>shivamsavitamahewa7068@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons & Primary Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "projects")}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Work</span>
                  <FaArrowRight className="text-xs" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-white border border-slate-300 dark:border-white/15 hover:border-purple-500/50 font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Let's Connect
                </a>
              </div>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2.5 mt-2 sm:mt-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-11 h-11 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all duration-200 hover:scale-110 shadow-sm ${social.hoverBg}`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: "BAHUT TAGDA" 3D Animated Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center perspective-1000"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-92 md:h-92 cursor-pointer select-none group"
            >
              {/* Outer Cyber Neon Halo (Rotating Conic Gradient) */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600 via-cyan-400 via-pink-500 to-indigo-600 opacity-60 dark:opacity-75 blur-xl animate-spin-conic-slow group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />

              {/* Secondary Counter-Rotating Orbital Ring */}
              <div className="absolute -inset-2 rounded-3xl border border-dashed border-cyan-400/50 dark:border-cyan-400/40 animate-spin-conic-reverse pointer-events-none" />

              {/* Main 3D Card Surface */}
              <div className="relative w-full h-full rounded-3xl p-2.5 bg-white/80 dark:bg-[#0f111f]/90 border-2 border-slate-200/90 dark:border-purple-500/40 backdrop-blur-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                
                {/* Floating Profile Image */}
                <motion.img
                  src={HeroImg}
                  alt="Shivam Savita - Full Stack Developer"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Holographic light reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Subtle base gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 dark:from-[#08090d]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: React 19 (Top-Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(40px)" }}
                className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#111322]/95 border border-cyan-500/40 dark:border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform"
              >
                <SiReact className="text-cyan-500 dark:text-cyan-400 text-lg animate-spin-slow" />
                <span className="text-xs font-bold text-slate-800 dark:text-white">React 19 & Next.js</span>
              </motion.div>

              {/* Floating Badge 2: Full Stack MERN (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                style={{ transform: "translateZ(45px)" }}
                className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-[#111322]/95 border border-emerald-500/40 dark:border-emerald-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform"
              >
                <SiMongodb className="text-emerald-500 dark:text-emerald-400 text-lg" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Full Stack MERN</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Node • Express • Mongo</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Star Metric (Bottom-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                style={{ transform: "translateZ(35px)" }}
                className="hidden sm:flex absolute bottom-8 -left-6 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#111322]/95 border border-amber-500/40 backdrop-blur-xl shadow-xl items-center gap-1.5"
              >
                <FaStar className="text-amber-500 text-xs" />
                <span className="text-xs font-bold text-slate-800 dark:text-amber-300">15+ Projects</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
