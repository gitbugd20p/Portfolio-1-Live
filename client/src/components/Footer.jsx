import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookSquare,
      tip: "Facebook",
      url: "https://facebook.com",
      color: "hover:text-blue-500",
    },
    {
      icon: FaSquareTwitter,
      tip: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      icon: FaLinkedin,
      tip: "LinkedIn",
      url: "https://www.linkedin.com/in/mdsabur/",
      color: "hover:text-blue-400",
    },
    {
      icon: FaGithub,
      tip: "GitHub",
      url: "https://github.com",
      color: "hover:text-white",
    },
  ];

  return (
    <footer className="footer footer-horizontal footer-center border-t border-white/25 bg-(--bg-dark) pt-16 pb-4 text-slate-400 shadow-lg">
      {/* Nav-links */}
      <nav className="grid grid-flow-col gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="link link-hover underline decoration-transparent transition-colors duration-300 hover:text-white hover:decoration-(--light-cyan)"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Social-Icons */}
      <nav>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -5 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`tooltip transition-colors duration-300 ${social.color}`}
              data-tip={social.tip}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Copyright */}
      <hr className="w-full border bg-white/25" />
      <aside>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase opacity-50"
        >
          Copyright © {new Date().getFullYear()} —{" "}
          <span className="font-bold text-white">Md. Abdus Sabur</span>. All
          rights reserved.
        </motion.p>
      </aside>
    </footer>
  );
};

export default Footer;
