import "../assets/styles/SkillsSection.css";
import SectionTopHeader from "./SectionTopHeader";
import SkillCard from "./SkillCard";
import { motion } from "motion/react";

const Skills = () => {
  const skillsData = [
    { name: "HTML", img: "HTML5.png" },
    { name: "CSS", img: "CSS.png" },
    { name: "JS (ES6+)", img: "ES6.png" },
    { name: "TailwindCSS", img: "TAILWINDCSS.png" },
    { name: "React", img: "REACT.png" },
    { name: "Node JS", img: "NODEJS.png" },
    { name: "Express JS", img: "EXPRESS_JS.png" },
    { name: "Mongo DB", img: "MONGODB.png" },
    { name: "Git & Github", img: "GIT.png" },
    { name: "REST API", img: "REST_API.png" },
  ];
  return (
    <section id="skills" className="skills-grad scroll-mt-16 p-16">
      <div className="container mx-auto">
        {/* Skills Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <SectionTopHeader
            header="Technical Skills"
            paraOne="A comprehensive suite of modern technologies I use to bring performant and scalable web applications to life."
            hClassName="text-5xl font-extrabold text-white text-center"
            pClassNameOne="mx-auto max-w-lg pt-6 text-slate-400 text-center"
            secondPara={false}
          />
        </motion.div>

        {/* Frontend Skills */}
        <div className="grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              img={skill.img}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
