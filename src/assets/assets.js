import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.avif";
import Food from "../assets/food.png";
import PortFolio from "../assets/fortfolio.png";
import Commerce from '../assets/commerce.png'
import Grocery from '../assets/grocery.png'
import Calculater from '../assets/calculater.png'
import Scan from '../assets/scan.png'
export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "JavaScript (ES6+)", "Tailwind CSS", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL", "Firebase"],
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Webpack", "Vs Code", "Figma"],
  },
];

export const projects = [
  {
    title: "Food website",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
   
    image: Food,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://food-recipe-mu.vercel.app/",
    code: "#",
  },
  {
    title: "Calculater Design",
    description:
      "A productivity application with drag-and-drop functionality and real-time updates.",
    
     image: Calculater,
  
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "QR Generator",
    description:
      "A mobile app for tracking workouts, nutrition, and health metrics.",
     image: Scan,

    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
   
    image:PortFolio,
    tech: ["Reactjs", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Grocery Website",
    description:
      "A real-time chat application with group messaging, emojis, and file sharing.",
   
    image: Grocery,
  
    tech: [ "React", "Tailwind CSS","REST API"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  
    image: Commerce,
   
    tech: ["React",  "BootStrap CSS","NodeJs","ExpressJs","MongoDB"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];
