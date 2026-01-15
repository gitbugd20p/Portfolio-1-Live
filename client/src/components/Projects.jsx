import { useEffect } from "react";
import "../assets/styles/ProjectsSection.css";
import ProjectCard from "./ProjectCard";
import SectionTopHeader from "./SectionTopHeader";
import useProjectStore from "../store/projectsStore";
import ProjectSkeletonCard from "./../skeletons/ProjectSkeletonCard";

const Projects = () => {
  const { projectList, getAllProjects, projectLoading, projectError } =
    useProjectStore();

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  return (
    <section id="projects" className="projects-grad scroll-mt-16 p-16">
      <div className="w-full">
        {/* Project Top */}
        <SectionTopHeader
          header="Projects"
          paraOne="Here's a selection of my recent work, showcasing my skills in creating
          user-centric and visually appealing interfaces."
          hClassName="text-5xl font-semibold"
          pClassNameOne="mx-auto max-w-lg pt-6"
          secondPara={false}
        />

        {/* Error */}
        {projectError && (
          <p className="pt-6 text-center text-red-500">{projectError}</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-4 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Skeletons */}
          {projectLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <ProjectSkeletonCard key={i} />
            ))}

          {/* Actual Projects */}
          {!projectLoading &&
            projectList.map((project, id) => (
              <ProjectCard key={project._id} project={project} id={id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
