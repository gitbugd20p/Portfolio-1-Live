import { Link } from "react-router-dom";
import { scrollToId } from "./../utilities/scrollTo";
import logoImg from "../assets/images/logo_portfolio.png";

const Navbar = () => {
  return (
    <nav className="navbar glass-effect fixed top-0 z-50 container w-full px-4 py-3 transition-all lg:px-12">
      <div className="navbar-start">
        <Link to="/" onClick={() => scrollToId("hero")}>
          <img
            src={logoImg}
            alt="Logo"
            className="w-[110px] transition-transform hover:scale-105"
          />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-2">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-text-muted rounded-lg px-4 py-2 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1y-SvaQzQ9sVVsW08AwcuEB4394O80nxg/view?usp=drive_link"
              target="_blank"
              className="bg-bright-teal-blue hover:bg-turquoise-surf ml-4 rounded-lg px-6 py-2 font-semibold text-white shadow-lg transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
