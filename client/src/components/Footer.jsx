import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-16 shadow-lg">
      <nav className="grid grid-flow-col gap-4">
        <a
          href="#hero"
          className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-(--deep-twilight) hover:decoration-(--light-cyan)"
        >
          Home
        </a>

        <a
          href="#about"
          className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-(--deep-twilight) hover:decoration-(--light-cyan)"
        >
          About
        </a>
        <a
          href="#projects"
          className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-(--deep-twilight) hover:decoration-(--light-cyan)"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-(--deep-twilight) hover:decoration-(--light-cyan)"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-(--deep-twilight) hover:decoration-(--light-cyan)"
        >
          Contact
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="">
            <ul className="menu menu-horizontal bg-base-200 rounded-box">
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
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Md Abdus Sabur. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
