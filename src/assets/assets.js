import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaBolt,
  FaLayerGroup,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import profileImg from "../assets/profile.avif";
import Food from "../assets/food.png";
import PortFolio from "../assets/fortfolio.png";
import Commerce from '../assets/commerce.png';
import Grocery from '../assets/grocery.png';
import Calculater from '../assets/calculater.png';
import Scan from '../assets/scan.png';

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaBolt,
    title: "Fast & Performant",
    description: "Building lightning-fast web apps optimized for smooth rendering and Core Web Vitals.",
    highlight: "Speed & Scale",
  },
  {
    icon: FaPaintBrush,
    title: "Modern UI/UX",
    description: "Crafting visually striking, accessible interfaces with attention to spacing and micro-interactions.",
    highlight: "Aesthetic Precision",
  },
  {
    icon: FaCode,
    title: "Clean Architecture",
    description: "Writing maintainable, modular code with reusable components and structured state management.",
    highlight: "Scalable Code",
  },
  {
    icon: FaServer,
    title: "Full Stack Ready",
    description: "Connecting frontend experiences with secure Node.js/Express REST APIs and MongoDB databases.",
    highlight: "End-to-End",
  },
];

export const skills = [
  {
    category: "Frontend",
    title: "Frontend Engineering",
    icon: FaReact,
    description: "Building responsive, component-driven user interfaces with modern React ecosystem.",
    tags: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Vite"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/30",
  },
  {
    category: "Backend",
    title: "Backend & APIs",
    icon: FaServer,
    description: "Developing robust server-side logic, routing, and RESTful web services.",
    tags: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Middleware", "CRUD Ops"],
    color: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/30",
  },
  {
    category: "Database",
    title: "Database Management",
    icon: FaDatabase,
    description: "Designing schema models, indexing, and managing data flows efficiently.",
    tags: ["MongoDB", "Mongoose", "MySQL", "Database Indexing", "Cloud Atlas"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    category: "Tools",
    title: "Tools & Workflow",
    icon: FaTools,
    description: "Modern developer tooling for version control, design, and deployment.",
    tags: ["Git & GitHub", "VS Code", "Postman", "Vercel", "Figma", "npm / Vite"],
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food Recipe & Explorer",
    category: "Frontend",
    featured: true,
    description: "An interactive culinary platform allowing users to discover recipes, explore nutritional details, filter by category, and bookmark favorite meals.",
    image: Food,
    tech: ["JavaScript", "HTML5", "CSS3", "Fetch API", "Responsive UI"],
    demo: "https://food-recipe-mu.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
  {
    id: 2,
    title: "Full-Stack E-Commerce Store",
    category: "Full Stack",
    featured: true,
    description: "Modern e-commerce platform with product catalogs, dynamic cart management, category filtering, and backend order processing capabilities.",
    image: Commerce,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demo: "https://portfolio-tau-coral-net7ls3pn0.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
  {
    id: 3,
    title: "FreshMart Grocery Store",
    category: "Frontend",
    featured: false,
    description: "A fast, intuitive grocery shopping interface featuring item categorizations, real-time cart computation, discount badges, and checkout preview.",
    image: Grocery,
    tech: ["React", "Tailwind CSS", "State Management", "REST API"],
    demo: "https://portfolio-tau-coral-net7ls3pn0.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
  {
    id: 4,
    title: "Developer Portfolio 2026",
    category: "Frontend",
    featured: false,
    description: "Modern glassmorphism personal portfolio showcasing projects, technical competencies, and developer journey with smooth Framer Motion interactions.",
    image: PortFolio,
    tech: ["React 19", "Tailwind CSS v4", "Framer Motion", "Vite"],
    demo: "https://portfolio-tau-coral-net7ls3pn0.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
  {
    id: 5,
    title: "Interactive Calculator App",
    category: "JavaScript",
    featured: false,
    description: "A sleek, responsive calculator app featuring standard arithmetic operations, keyboard event listeners, and clean glassmorphism UI.",
    image: Calculater,
    tech: ["JavaScript", "HTML5", "CSS3", "DOM Events"],
    demo: "https://calculator-design-tjgm.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
  {
    id: 6,
    title: "Instant QR Generator Utility",
    category: "JavaScript",
    featured: false,
    description: "A high-speed client-side QR code generator allowing users to create, preview, and download custom QR codes instantly for links, text, and contacts.",
    image: Scan,
    tech: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
    demo: "https://portfolio-tau-coral-net7ls3pn0.vercel.app/",
    code: "https://github.com/ShivamSavita582",
  },
];

export const workData = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Independent Projects",
    duration: "2024 - Present",
    type: "Work Experience",
    icon: FaLaptopCode,
    description: "Architecting end-to-end web applications with React, Node.js, Express, and MongoDB. Building responsive UI/UX designs, integrating REST APIs, and optimizing web performance.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Frontend Development Specialist",
    company: "Personal Project Milestones",
    duration: "2023 - 2024",
    type: "Projects & Specialization",
    icon: FaBriefcase,
    description: "Focused on building complex client-side applications, modernizing user interfaces, mastering state management, and crafting engaging interactive animations with Framer Motion.",
    skills: ["React.js", "JavaScript (ES6+)", "UI/UX Design", "Vite", "Git"],
  },
  {
    role: "Computer Science & Engineering",
    company: "Academic Education",
    duration: "Noida, Uttar Pradesh",
    type: "Education",
    icon: FaGraduationCap,
    description: "Strong academic foundation in Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering practices.",
    skills: ["Web Technologies", "DBMS", "Software Engineering", "Problem Solving"],
  },
];

