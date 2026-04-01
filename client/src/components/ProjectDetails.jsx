import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectFallbackImg from "/images/project_img.png";
import useProjectStore from "../store/projectsStore";
import { motion } from "motion/react";
import { GiSpinningBlades, GiSpinningRibbons } from "react-icons/gi";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProjectById, projectLoading } = useProjectStore();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-bg-dark flex min-h-screen flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center">
          <GiSpinningBlades className="text-bright-teal-blue h-48 w-48 animate-spin" />
        </div>
        <p className="text-text-muted mt-4 font-mono tracking-widest uppercase">
          Fetching Project...
        </p>
      </motion.section>
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
    React: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
    MongoDB: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Tailwind: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    JWT: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Stripe: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  };

  return (
    <section className="projects-grad min-h-screen px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="back-btn mb-10 cursor-pointer text-sm font-bold tracking-widest uppercase hover:underline"
        >
          ← Back to projects
        </motion.button>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect flex items-center justify-center overflow-hidden rounded-3xl border border-white/5 p-4 shadow-2xl"
          >
            <img
              src={image || projectFallbackImg}
              alt={title}
              loading="lazy"
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* RIGHT — DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect flex flex-col rounded-3xl border border-white/5 p-10 shadow-2xl"
          >
            <span className="text-turquoise-surf text-xs font-bold tracking-[0.3em] uppercase">
              {category}
            </span>

            <h1 className="text-text-main mt-4 text-3xl leading-tight font-extrabold lg:text-4xl">
              {title}
            </h1>

            <p className="text-text-muted mt-6 text-lg leading-relaxed">
              {description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              {liveLink && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hover:text-text-main rounded-full border border-sky-200 bg-sky-100 text-sky-700 hover:border-sky-600 hover:bg-sky-900"
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
                  className="btn hover:text-text-main rounded-full border border-indigo-200 bg-indigo-100 text-indigo-700 hover:border-indigo-600 hover:bg-gray-900"
                >
                  Source Code
                </motion.a>
              )}
            </div>

            {/* Technologies */}
            {technologies?.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-4 text-sm font-bold tracking-widest text-slate-400 uppercase">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`rounded-lg border px-4 py-1.5 text-xs font-bold transition-all ${
                        techColorMap[tech] ||
                        "border-white/10 bg-white/5 text-slate-300"
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
              <div className="mt-6">
                <h3 className="mb-4 text-sm font-bold tracking-widest text-slate-400 uppercase">
                  Key Features
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  {features.map((feature, i) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      key={i}
                      className="text-sm text-slate-300"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
