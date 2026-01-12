import { useEffect } from "react";
import "../assets/styles/HeroSection.css";
import bannerStore from "../store/bannerStore";
import HeroSkeleton from "./../skeletons/HeroSkeleton";
import heroImg from "../assets/images/hero_image.png";

const HeroSection = () => {
  const { bannerInfo, bannerLoading, bannerInfoRequest } = bannerStore();

  useEffect(() => {
    bannerInfoRequest();
  }, []);

  if (bannerLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section id="hero" className="hero hero-grad scroll-mt-16 p-16">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        {/* Image (40%) */}
        <div className="flex w-full justify-center lg:w-2/5">
          <img src={heroImg} className="min-w-sm rounded-lg" alt="Hero" />
        </div>

        {/* Text (60%) */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-7xl font-bold">
            Hello, <span className="text-(--deep-twilight)">I’m</span> <br />
            {bannerInfo?.header}
          </h1>
          <p className="py-6 text-2xl">{bannerInfo?.description}</p>
          <button className="btn-grad border border-(--bright-teal-blue)">
            Say Hello!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
