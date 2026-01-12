import { Link, NavLink } from "react-router-dom";
import { scrollToId } from "./../utilities/scrollTo";
import logoImg from "../assets/images/logo_portfolio.png";

const Navbar = () => {
  const navBarLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => scrollToId("hero")}
        className={({ isActive }) =>
          `mx-2 rounded-md px-4 py-2 transition-all duration-200 ${
            isActive
              ? "bg-(--deep-twilight) text-white"
              : "text-[#0077B6 hover:text-[#314755 hover:bg-slate-100"
          }`
        }
      >
        Home
      </NavLink>

      <a
        href="#about"
        className="mx-2 rounded-md px-4 py-2 text-slate-800 transition-all duration-200 hover:bg-(--light-cyan) hover:text-(--deep-twilight)"
      >
        About
      </a>

      <a
        href="#projects"
        className="mx-2 rounded-md px-4 py-2 text-slate-800 transition-all duration-200 hover:bg-(--light-cyan) hover:text-(--deep-twilight)"
      >
        Projects
      </a>

      <a
        href="#skills"
        className="mx-2 rounded-md px-4 py-2 text-slate-800 transition-all duration-200 hover:bg-(--light-cyan) hover:text-(--deep-twilight)"
      >
        Skills
      </a>

      <a
        href="#contact"
        className="mx-2 rounded-md px-4 py-2 text-slate-800 transition-all duration-200 hover:bg-(--light-cyan) hover:text-(--deep-twilight)"
      >
        Contact
      </a>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 container bg-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navBarLinks}
          </ul>
        </div>
        <Link to="/" className="" onClick={() => scrollToId("hero")}>
          <img src={logoImg} alt="" width={"125px"} />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
