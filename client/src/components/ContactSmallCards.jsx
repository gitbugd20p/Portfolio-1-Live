import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const ContactSmallCards = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex max-w-3/5 items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-2xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-gray-600 transition-colors duration-300 ${hover ? "bg-(--light-cyan)" : "bg-gray-100"}`}
      >
        <item.icon color="#9929fb" />
      </div>

      {/* Text */}
      <div>
        <h6 className="text-sm font-medium tracking-wide text-gray-400 uppercase">
          {item.title}
        </h6>
        <p className="mt-1 text-base text-gray-800">{item.description}</p>
      </div>
    </div>
  );
};

export default ContactSmallCards;
