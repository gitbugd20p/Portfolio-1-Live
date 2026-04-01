import { Link } from "react-router-dom";
import projectFallbackImg from "/images/project_img.png";
import { motion } from "motion/react";

const ProjectCard = ({ project, id }) => {
  const { _id, title, description, liveLink, githubLink, category, image } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: id * 0.1, // Stagger effect
        ease: "easeOut",
      }}
      className="project-card-custom card w-full max-w-md overflow-hidden"
    >
      <Link to={`/projects/${_id}`}>
        <figure className="flex h-72 w-full items-center justify-center">
          <img
            src={image || projectFallbackImg}
            alt={title}
            className="object-fit h-full w-full p-8 transition-transform duration-500 hover:scale-110"
          />
        </figure>
      </Link>

      <div className="card-body">
        <span className="text-turquoise-surf text-[11px] font-bold tracking-[0.2em] uppercase">
          {category}
        </span>

        <h2 className="card-title hover:text-bright-teal-blue text-text-main mt-2 text-2xl font-bold transition-colors hover:underline">
          <Link to={`/projects/${_id}`}>{title}</Link>
        </h2>

        <p className="text-text-muted line-clamp-3 text-justify text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {liveLink && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full border border-sky-200 bg-sky-100 text-sky-700 hover:border-sky-600 hover:bg-sky-900 hover:text-white"
            >
              Live-link
            </motion.a>
          )}

          {githubLink && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full border border-indigo-200 bg-indigo-100 text-indigo-700 hover:border-indigo-600 hover:bg-gray-900 hover:text-white"
            >
              Source Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
