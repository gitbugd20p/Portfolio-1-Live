import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/ProjectsSection.css";
import ProjectCard from "./ProjectCard";
import SectionTopHeader from "./SectionTopHeader";
import useProjectStore from "../store/projectsStore";
import ProjectSkeletonCard from "./../skeletons/ProjectSkeletonCard";
import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";

const Projects = () => {
  const { projectList, getAllProjects, projectLoading, projectError } =
    useProjectStore();

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  const displayedProjects = projectList.slice(0, 3);

  return (
    <section
      id="projects"
      className="projects-grad min-h-screen scroll-mt-16 px-6 py-16 lg:px-16"
    >
      <div className="container mx-auto">
        {/* Project Top */}
        <div className="flex flex-col items-start justify-between gap-6 pb-12 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTopHeader
              header="Projects"
              hClassName="text-5xl font-bold text-center md:text-start"
              paraOne="Here's a selection of my recent work, showcasing my skills in creating
          user-centric and visually appealing interfaces."
              pClassNameOne="mx-auto max-w-lg pt-6 text-center md:text-start"
              secondPara={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="self-center"
          >
            <Link
              to="/projects"
              className="group border-turquoise-surf/30 bg-turquoise-surf/5 text-turquoise-surf hover:bg-turquoise-surf flex items-center gap-2 rounded-full border px-6 py-3 font-bold tracking-widest uppercase transition-all hover:text-white"
            >
              View All Projects
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Error */}
        {projectError && (
          <p className="pt-6 text-center text-red-400">{projectError}</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {projectLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeletonCard key={i} />
              ))
            : displayedProjects.map((project, id) => (
                <ProjectCard key={project._id} project={project} id={id} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
