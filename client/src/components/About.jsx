import { useEffect } from "react";
import "../assets/styles/AboutSection.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import educationStore from "./../store/educationStore";
import heroImg from "../assets/images/portfolio-card.png";

const About = () => {
  const { educationList, educationLoading, getAllEducations } =
    educationStore();

  useEffect(() => {
    getAllEducations();
  }, [getAllEducations]);

  return (
    <section id="about" className="hero about-grad scroll-mt-16 p-16">
      <div className="hero-content w-full flex-col-reverse lg:flex-row-reverse">
        {/* Right Side (60%) */}
        <div className="flex w-full justify-start lg:w-3/5">
          {/* timeline */}
          <ul className="timeline timeline-vertical timeline-compact timeline-left">
            {educationList.map((edu, index) => (
              <li key={edu._id}>
                {index !== 0 && <hr />}

                {/* ICON */}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* CONTENT */}
                <div className="timeline-end timeline-box mb-6">
                  <time className="block font-mono italic">
                    {edu.yearFrom} – {edu.yearTo}
                  </time>
                  <div className="text-lg font-black">{edu.degree}</div>
                  <p>{edu.institutionAndDtls}</p>
                </div>

                <hr />
              </li>
            ))}
          </ul>
        </div>

        {/* Left Side (40%) */}
        <div className="flex w-full flex-col items-center justify-center lg:w-2/5">
          {/* Card */}
          <div className="hover-3d">
            {/* content */}
            <div className="card bg-base-100 w-96 py-6 shadow-sm">
              <div className="card-body items-center pb-0 text-center">
                <h2 className="card-title">Hi! I'm Sabur</h2>
                <p>Software Developer</p>
              </div>
              <figure className="flex justify-center px-10 pt-10">
                <img
                  src={heroImg}
                  alt="Profile"
                  className="h-48 w-48 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">mdsabur1010@gmail.com</h2>
                <p>
                  B-171 Matikata, Dhaka Cantonment, <br /> Dhaka-1206
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
          <div className="">
            <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
              <li>
                <a
                  className="tooltip hover:bg-(--light-cyan)"
                  data-tip="facebook"
                  href="google.com"
                >
                  <FaFacebookSquare size={32} />
                </a>
              </li>
              <li>
                <a
                  className="tooltip hover:bg-(--light-cyan)"
                  data-tip="twitter"
                  href="google.com"
                >
                  <FaSquareTwitter size={32} />
                </a>
              </li>
              <li>
                <a
                  className="tooltip hover:bg-(--light-cyan)"
                  data-tip="linkedin"
                  href="google.com"
                >
                  <FaLinkedin size={32} />
                </a>
              </li>
            </ul>
          </div>

          {/* Download CV */}
          <div className="">
            <a
              href="https://drive.google.com/file/d/1vmMbDGXoLgeKyvWMWGbC_oCU_TuQeOV_/view?usp=sharing"
              target="_blank"
            >
              <button className="btn-grad w-96 border border-(--bright-teal-blue)">
                View CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
