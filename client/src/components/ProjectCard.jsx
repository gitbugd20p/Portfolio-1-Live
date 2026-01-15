import { Link } from "react-router-dom";
import projectFallbackImg from "/images/project_img.png";

const ProjectCard = ({ project }) => {
  const { _id, title, description, liveLink, category, image } = project;

  return (
    <div className="card w-md border border-white bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/50">
      <Link to={`/projects/${_id}`}>
        <figure className="flex h-72 w-auto items-center justify-center">
          <img
            src={image || projectFallbackImg}
            alt={title}
            className="h-full w-full object-contain pt-4 transition-transform duration-300 hover:scale-105"
          />
        </figure>
      </Link>

      <div className="card-body">
        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-500/90 uppercase">
          {category}
        </span>

        <Link to={`/projects/${_id}`}>
          <h2 className="card-title text-xl font-extrabold tracking-tight text-slate-800 hover:underline">
            {title}
          </h2>
        </Link>

        <p className="line-clamp-3 text-sm text-gray-600">{description}</p>

        {liveLink && (
          <div className="card-actions justify-start">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full border border-gray-300 bg-white hover:border-gray-600 hover:bg-(--deep-twilight) hover:text-white"
            >
              See Live Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
