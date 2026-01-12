const ProjectSkeletonCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* Image Skeleton */}
      <div className="skeleton h-64 w-full"></div>

      <div className="card-body space-y-3">
        {/* Category */}
        <div className="skeleton h-4 w-24"></div>

        {/* Title */}
        <div className="skeleton h-6 w-3/4"></div>

        {/* Description */}
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>

        {/* Button */}
        <div className="skeleton mt-2 h-10 w-40"></div>
      </div>
    </div>
  );
};

export default ProjectSkeletonCard;
