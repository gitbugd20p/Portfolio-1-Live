import "../assets/styles/SkillsSection.css";
import SectionTopHeader from "./SectionTopHeader";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="skills-grad scroll-mt-16 p-16">
      <div className="w-full">
        {/* Skills Top */}
        <div className="mb-12">
          <SectionTopHeader
            header="Skills"
            paraOne="Here's a selection of my recent work, showcasing my skills in creating
        user-centric and visually appealing interfaces."
            hClassName="text-5xl font-semibold"
            pClassNameOne="mx-auto max-w-lg pt-6"
            secondPara={false}
            paraTwo=""
            pClassNameTwo=""
          />
        </div>

        {/* Frontend Skills */}
        <div className="flex w-full flex-col gap-8 md:flex-row">
          {/* Right grid => Skill Cards */}
          <div className="grid flex-1 grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {/* Cards */}
            <SkillCard name="HTML" img="HTML5.png" />
            <SkillCard name="CSS" img="CSS.png" />
            <SkillCard name="JS (ES6+)" img="ES6.png" />
            <SkillCard name="TAILWINDCSS" img="TAILWINDCSS.png" />
            <SkillCard name="Git & Github" img="GIT.png" />
            <SkillCard name="MONGO DB" img="MONGODB.png" />
            <SkillCard name="EXPRESS JS" img="EXPRESS_JS.png" />
            <SkillCard name="REACT" img="REACT.png" />
            <SkillCard name="NODE JS" img="NODEJS.png" />
            <SkillCard name="REST API" img="REST_API.png" />
            {/* Add more SkillCards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
