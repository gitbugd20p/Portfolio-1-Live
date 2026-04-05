import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { GiSpinningBlades } from "react-icons/gi";
import useProjectStore from "../store/projectsStore";
import ProjectCard from "../components/ProjectCard";
import ProjectSkeletonCard from "../skeletons/ProjectSkeletonCard";

const AllProjects = () => {
  const navigate = useNavigate();
  const { projectList, getAllProjects, projectLoading, projectError } =
    useProjectStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProjects();
  }, [getAllProjects]);

  if (projectLoading || projectList.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-bg-dark flex min-h-screen flex-col items-center justify-center"
      >
        <GiSpinningBlades className="text-turquoise-surf h-32 w-32 animate-spin lg:h-48 lg:w-48" />
        <p className="text-text-muted mt-6 font-mono tracking-[0.3em] uppercase">
          Initializing Archive...
        </p>
      </motion.section>
    );
  }

  return (
    <section className="all-projects-page min-h-screen px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex-1 text-start">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/")}
              className="text-turquoise-surf mb-6 cursor-pointer text-xs font-bold tracking-widest uppercase hover:underline"
            >
              ← Return Home
            </motion.button>
            <h1 className="text-text-main text-4xl font-extrabold lg:text-5xl">
              Full Project <span className="text-turquoise-surf">Archive</span>
            </h1>
          </div>

          <p className="text-text-muted max-w-sm text-sm leading-relaxed">
            A comprehensive look at my technical journey—ranging from full-stack
            MERN applications to specialized frontend experiments.
          </p>
        </div>

        {projectError && (
          <div className="glass-effect rounded-2xl p-8 text-center">
            <p className="text-red-400">
              Error loading archive: {projectError}
            </p>
            <button
              onClick={() => getAllProjects()}
              className="text-turquoise-surf mt-4 font-bold underline"
            >
              Retry Connection
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeletonCard key={i} />
              ))
            : projectList.map((project, index) => (
                <ProjectCard
                  key={project._id || index}
                  project={project}
                  id={index}
                />
              ))}
        </div>

        {!projectLoading && projectList.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-muted mt-20 text-center text-xs tracking-widest uppercase opacity-40"
          >
            End of Archive — More coming soon.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
