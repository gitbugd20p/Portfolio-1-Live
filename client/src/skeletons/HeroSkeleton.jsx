const HeroSkeleton = () => {
  return (
    <section className="hero hero-grad scroll-mt-16 p-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <div className="skeleton h-12 w-3/4"></div>
          <div className="skeleton h-12 w-2/3"></div>

          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-2/3"></div>

          <div className="flex gap-4 pt-4">
            <div className="skeleton h-12 w-40 rounded-lg"></div>
            <div className="skeleton h-12 w-40 rounded-lg"></div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <div className="skeleton h-80 w-full rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
