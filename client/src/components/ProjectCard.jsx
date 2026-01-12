import projectImg from "../assets/images/project_img.png";

const ProjectCard = ({ project }) => {
  const { title, description, liveLink, category } = project;

  return (
    <div className="card bg-base-100 w-96 shadow-sm transition hover:shadow-lg">
      <figure className="flex h-64 w-96 items-center justify-center">
        <img
          src={projectImg}
          alt={title}
          className="h-full w-full object-contain pt-4 transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="card-body">
        <p className="text-sm text-gray-400">{category}</p>

        <h2 className="card-title text-lg text-gray-900">{title}</h2>

        <p className="text-gray-600">{description}</p>

        {liveLink && (
          <div className="card-actions justify-start">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-gray-300 bg-white hover:border-gray-600"
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
