
import React from "react";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demo,
  code,
  category,
  featured,
}) => {
  return (
    <div className="group h-full rounded-3xl overflow-hidden isolate bg-white/80 dark:bg-[#111322]/80 border border-slate-200/80 dark:border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-purple-500/10 dark:hover:shadow-purple-950/30 flex flex-col justify-between">
      <div className="flex-1 flex flex-col">
        {/* Project Thumbnail with Zoom on Hover */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#111322] via-transparent to-transparent opacity-80" />

          {/* Featured or Category Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-white/15 text-purple-700 dark:text-purple-300 text-xs font-semibold shadow-sm">
              {category || "Web App"}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-600 dark:text-amber-300 text-xs font-semibold backdrop-blur-md shadow-sm">
                <FaStar className="text-[10px]" /> Featured
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
              {title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 mt-auto flex items-center gap-3">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-200"
        >
          <span>Live Demo</span>
          <FaExternalLinkAlt className="text-[10px]" />
        </a>

        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-white border border-slate-300 dark:border-white/10 hover:border-purple-500/40 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm"
          aria-label="GitHub Repository"
        >
          <FaGithub className="text-base" />
          <span>Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
