import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectFallbackImg from "/images/project_img.png";
import useProjectStore from "../store/projectsStore";

const ProjectDetails = () => {
  const { id } = useParams(); // this is actually ID
  const navigate = useNavigate();

  const { getProjectById, projectLoading } = useProjectStore();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjectById(id);
        if (!data) {
          console.error("Project not found!");
          return;
        }
        setProject(data);
      } catch (error) {
        console.error("Navigation Error:", error);
      }
    };

    loadProject();
  }, [id, getProjectById]);

  if (projectLoading || !project) {
    return (
      <section className="p-16 text-center">Loading project details...</section>
    );
  }

  const {
    title,
    category,
    description,
    image,
    technologies,
    features,
    liveLink,
    githubLink,
  } = project;

  const techColorMap = {
    React: "bg-sky-100 text-sky-700 border-sky-200",
    "Node.js": "bg-green-100 text-green-700 border-green-200",
    MongoDB: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Tailwind: "bg-cyan-100 text-cyan-700 border-cyan-200",
    JWT: "bg-purple-100 text-purple-700 border-purple-200",
    Stripe: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };

  return (
    <section className="projects-grad scroll-mt-16 p-16">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 cursor-pointer text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to projects
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT — IMAGE */}
          <div className="rounded-xl border bg-white/70 p-6 shadow backdrop-blur-sm">
            <img
              src={image || projectFallbackImg}
              alt={title}
              loading="lazy"
              className="h-105 w-full object-contain"
            />
          </div>

          {/* RIGHT — DETAILS */}
          <div className="rounded-xl border bg-white/70 p-8 shadow backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
              {category}
            </span>

            <h1 className="mt-3 text-4xl font-extrabold text-slate-800">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              {description}
            </p>

            {/* Technologies */}
            {technologies?.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`rounded-full border px-4 py-1 text-sm font-medium transition-all hover:scale-105 hover:shadow ${
                        techColorMap[tech] ||
                        "border-gray-200 bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {features?.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold">Key Features</h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-full border border-sky-200 bg-sky-100 text-sky-700 hover:border-sky-600 hover:bg-sky-900 hover:text-white"
                >
                  View Live Project
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-full border border-indigo-200 bg-indigo-100 text-indigo-700 hover:border-indigo-600 hover:bg-gray-900 hover:text-white"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
