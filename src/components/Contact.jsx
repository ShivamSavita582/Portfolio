import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/shivam_resume.pdf";
    link.download = "Shivam_Savita_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Have an open role, a freelance project, or simply want to connect? My inbox is always open.
          </p>
        </div>

        {/* Main Grid: Form + Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-2xl shadow-slate-200/50 dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Send a Message</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-8">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-sm flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500 dark:text-emerald-400 text-lg shrink-0" />
                <span>Thank you! Your message has been sent. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                    type="text"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all shadow-inner"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Shivam, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none shadow-inner"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Channels & Resume (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Details Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Direct Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:shivamsavitamahewa7068@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-100/60 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 dark:bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg group-hover:scale-110 transition-transform shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Email Address</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors break-all">
                      shivamsavitamahewa7068@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919198517600"
                  className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-100/60 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-lg group-hover:scale-110 transition-transform shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Phone / WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      +91 9198517600
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-transparent">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-lg shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Current Location</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Dadri Main Rd, Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-3">Connect Online</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/ShivamSavita582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:border-purple-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shivam-savita-004a7225b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:scale-110 transition-all duration-200 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-500/10 via-white to-indigo-500/10 dark:from-purple-950/40 dark:via-[#111322] dark:to-indigo-950/40 border border-purple-500/30 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Need a PDF Resume?</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  Download my up-to-date resume covering detailed skills, projects, and educational credentials.
                </p>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm border border-purple-500/40 hover:border-purple-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-md"
              >
                <FaDownload className="text-purple-600 dark:text-purple-400 text-xs" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


