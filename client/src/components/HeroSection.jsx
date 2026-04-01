import { useEffect } from "react";
import "../assets/styles/HeroSection.css";
import bannerStore from "../store/bannerStore";
import HeroSkeleton from "./../skeletons/HeroSkeleton";
import heroImg from "../assets/images/hero_image.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const HeroSection = () => {
  const { bannerInfo, bannerLoading, bannerInfoRequest } = bannerStore();

  useEffect(() => {
    bannerInfoRequest();
  }, [bannerInfoRequest]);

  if (bannerLoading) return <HeroSkeleton />;

  return (
    <section
      id="hero"
      className="bg-bg-dark flex min-h-screen items-center px-6 py-24 lg:px-48 lg:py-0"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row-reverse">
        {/* Image from the right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full justify-center lg:w-2/5"
        >
          <img
            src={heroImg}
            className="max-h-100 w-64 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,119,182,0.2)] md:w-75 lg:max-h-125"
            alt="Hero"
          />
        </motion.div>

        {/* Text from the left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-left lg:w-3/5"
        >
          <h1 className="text-text-main text-5xl font-bold lg:text-7xl">
            <span className="text-text-muted mb-2 block text-3xl font-medium">
              Hello, I'm
            </span>
            <span className="text-gradient">{bannerInfo?.header}</span>
          </h1>

          <div className="text-turquoise-surf mt-4 h-10 text-2xl font-semibold lg:text-3xl">
            <Typewriter
              words={[
                "Frontend Engineer",
                "React Developer",
                "Building Real World Apps with MERN Stack",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </div>

          <p className="text-text-muted max-w-xl py-6 text-lg leading-relaxed">
            {bannerInfo?.description}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:mdsabur1010@gmail.com"
              className="btn-grad rounded-xl px-10 py-4 font-bold tracking-wide md:w-72 lg:w-84"
            >
              LET'S TALK
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
