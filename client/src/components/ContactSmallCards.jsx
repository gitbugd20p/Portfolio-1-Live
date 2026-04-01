import { motion } from "motion/react";

const ContactSmallCards = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.5 }}
      viewport={{ once: true }}
      className="group hover:border-turquoise-surf/30 flex items-start gap-5 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10"
    >
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-(--turquoise-surf)/10 text-(--turquoise-surf) transition-transform duration-500 ease-in-out group-hover:scale-120 group-hover:bg-white">
        <item.icon size={20} />
      </div>

      {/* Text */}
      <div>
        <h6 className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
          {" "}
          {item.title}
        </h6>
        <p className="mt-1 text-sm font-medium text-slate-200 lg:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSmallCards;
