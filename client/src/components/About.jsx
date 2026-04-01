import { useEffect } from "react";
import "../assets/styles/AboutSection.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import educationStore from "./../store/educationStore";
import heroImg from "../assets/images/portfolio-card.png";
import { motion } from "motion/react";

const About = () => {
  const { educationList, getAllEducations } = educationStore();

  useEffect(() => {
    getAllEducations();
  }, [getAllEducations]);

  return (
    <section
      id="about"
      className="about-grad min-h-screen scroll-mt-16 px-6 py-16 lg:px-16"
    >
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row-reverse">
        {/* Right Side (60%) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex w-full justify-start lg:w-3/5"
        >
          {/* timeline */}
          <ul className="timeline timeline-vertical timeline-compact timeline-left">
            {educationList.map((edu, index) => (
              <li key={edu._id}>
                {index !== 0 && <hr />}

                {/* ICON */}
                <div className="timeline-middle text-bright-teal-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-end timeline-box mb-6 p-5 shadow-xl"
                >
                  <time className="text-bright-teal-blue block font-mono italic">
                    {edu.yearFrom} – {edu.yearTo}
                  </time>
                  <div className="text-text-main text-xl font-bold">
                    {edu.degree}
                  </div>
                  <p className="text-text-muted mt-1">
                    {edu.institutionAndDtls}
                  </p>
                </motion.div>

                <hr />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Left Side (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center justify-center lg:w-2/5"
        >
          {/* Card */}
          <div className="hover-3d transition-transform duration-500 hover:scale-105">
            {/* content */}
            <div className="card bg-base-100 py-6 shadow-sm sm:w-80 md:w-84 lg:w-96">
              <div className="card-body items-center pb-0 text-center">
                <h2 className="text-text-main text-2xl font-bold">
                  Hi! I'm Sabur
                </h2>
                <p className="text-turquoise-surf font-medium tracking-wider uppercase">
                  Frontend Engineer
                </p>
              </div>
              <figure className="flex justify-center px-10 pt-8">
                <img
                  src={heroImg}
                  alt="Profile"
                  className="border-bright-teal-blue/30 h-44 w-44 rounded-full border-4 object-cover shadow-inner"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-text-muted font-mono text-sm">
                  mdsabur1010@gmail.com
                </h2>
                <p className="text-text-muted mt-2 text-sm">
                  Dhaka Cantonment, <br /> Dhaka-1206
                </p>
              </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Social */}
          <motion.div whileHover={{ y: -5 }} className="mt-8 flex gap-4">
            <ul className="menu menu-horizontal bg-bg-card/50 rounded-2xl border border-white/10 p-2">
              {[
                {
                  Icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/mdsabur/",
                  tip: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  Icon: FaFacebookSquare,
                  link: "#",
                  tip: "Facebook",
                  color: "hover:text-blue-500",
                },
                {
                  Icon: FaGithub,
                  link: "https://github.com/gitbugd20p",
                  tip: "GitHub",
                  color: "hover:text-white",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className={`hover:text-turquoise-surf tooltip text-slate-300 transition-colors ${item.color}`}
                    data-tip={item.tip}
                  >
                    <item.Icon size={28} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download CV */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href="https://drive.google.com/file/d/1y-SvaQzQ9sVVsW08AwcuEB4394O80nxg/view?usp=drive_link"
              target="_blank"
            >
              <button className="btn-grad border-bright-teal-blue border text-lg font-bold md:w-84 lg:w-96">
                View CV
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
