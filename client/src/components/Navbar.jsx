import { Link } from "react-router-dom";
import { scrollToId } from "./../utilities/scrollTo";
import logoImg from "../assets/images/logo_portfolio.png";

const Navbar = () => {
  return (
    <nav className="navbar glass-effect fixed top-0 z-50 container w-full px-4 py-3 transition-all lg:px-12">
      {/* LEFT */}
      <div className="navbar-start">
        {/* MOBILE MENU */}
        <div className="dropdown mr-2 lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-text-main hover:bg-white/10"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* DROPDOWN MENU */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content glass-effect z-100 mt-3 w-52 rounded-xl p-2 shadow-lg"
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-text-muted rounded-lg hover:bg-white/10 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="mt-2">
              <a
                href="https://drive.google.com/file/d/1y-SvaQzQ9sVVsW08AwcuEB4394O80nxg/view?usp=drive_link"
                target="_blank"
                className="bg-bright-teal-blue hover:bg-turquoise-surf rounded-lg px-4 py-2 text-center font-semibold text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" onClick={() => scrollToId("hero")}>
          <img
            src={logoImg}
            alt="Logo"
            className="w-27.5 transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* DESKTOP MENU (UNCHANGED) */}
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
