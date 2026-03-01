import React from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="  py-20 "
    >
      <div className="container mx-auto px-6 ">
        <h2 className=" text-3xl md:text-5xl font-bold text-center mb-4  text-white">
          Get In
          <span className="text-purple-500"> Touch</span>
        </h2>
        <p className="text-gray-400 md:text-xl font-semibold text-center  max-w-2xl  mx-auto mb-16">
          Have a project in mind or want to collaborate ? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:max-w-10xl mx-auto bg-gray-800 p-5 md:p-25 rounded-2xl">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-3 md:text-xl"
                >
                  Your Name
                </label>
                <input
                  className="w-full  bg-gray-600 border border-gray-400 rounded-lg md:px-4 md:py-3 px-2 py-2 outline-none"
                  type="text"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-3 md:text-xl"
                >
                  Your Email
                </label>
                <input
                  className="w-full  bg-gray-600 border border-gray-400 rounded-lg md:px-4 md:py-3 px-2 py-2 outline-none"
                  type="email"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-3 md:text-xl"
                >
                  Your Message
                </label>
                <input
                  className="w-full h-40 bg-gray-600 border border-gray-400 rounded-lg md:px-4 md:py-3 px-2 py-2 outline-none"
                  type="message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3
              bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer md:text-2xl font-semibold"
              >
                Send
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-white font-semibold md:text-xl">Location</h3>
                <p className="text-white md:text-xl">
                  Dadri Main Rd, Noida Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-white font-semibold md:text-xl">Email</h3>
                <p className="text-white md:text-xl">shivam@example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-white font-semibold md:text-xl">Phone</h3>
                <p className="text-white md:text-xl ">+91 xxxxxxxxx</p>
              </div>
            </div>
            <div className="pt-4 space-x-5 gap-10">
              <h3 className="md:text-xl font-semibold mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex spaxe-x-4 md:gap-10 gap-5">
                <a
                  href="#"
                  className="md:h-20 md:w-20 h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="md:h-20 md:w-20 h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
                >
                  <FaLinkedinIn className="text-3xl"  />
                </a>
                <a
                  href="#"
                  className="md:h-20 md:w-20 h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="md:h-20 md:w-20 h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center text-white hover:bg-purple-700 transition duration-300 "
                >
                  <FaDribbble className=" text-3xl" />
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full md:px-6 md:py-3 px-3 py-2
              bg-purple-500 mt-12 text-white rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer md:text-2xl font-semibold"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
