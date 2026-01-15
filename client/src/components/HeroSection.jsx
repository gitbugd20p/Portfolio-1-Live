import { useEffect } from "react";
import "../assets/styles/HeroSection.css";
import bannerStore from "../store/bannerStore";
import HeroSkeleton from "./../skeletons/HeroSkeleton";
import heroImg from "../assets/images/hero_image.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const { bannerInfo, bannerLoading, bannerInfoRequest } = bannerStore();

  useEffect(() => {
    bannerInfoRequest();
  }, [bannerInfoRequest]);

  if (bannerLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section id="hero" className="hero hero-grad scroll-mt-16 p-16">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        {/* Image (40%) */}
        <div className="flex w-full justify-center lg:w-2/5">
          <img
            src={heroImg}
            className="max-h-124 min-w-sm rounded-lg"
            alt="Hero"
          />
        </div>

        {/* Text (60%) */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-6xl font-bold">
            <span className="mb-2 block">
              <span className="text-5xl font-medium text-gray-600">Hello</span>,{" "}
              <span className="text-6xl text-(--bright-teal-blue)">I’m</span>
            </span>

            <span className="mt-2 block text-7xl font-bold tracking-tight text-gray-900">
              {bannerInfo?.header}
            </span>

            <span className="mt-4 block min-h-[1.2em] text-4xl font-semibold text-(--deep-twilight)">
              <Typewriter
                words={[
                  "Frontend Engineer",
                  "React Enthusiast",
                  "UI-Focused Web Developer",
                  "Building Scalable MERN Apps",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="max-w-2xl py-6 text-justify text-xl text-gray-600">
            {bannerInfo?.description}
          </p>
          <a
            href="mailto:mdsabur1010@gmail.com"
            target="_blank"
            className="block w-fit"
          >
            <button className="btn-grad m-0! border border-(--bright-teal-blue)">
              Say Hello!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
