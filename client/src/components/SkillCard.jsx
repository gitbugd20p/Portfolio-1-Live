import { motion } from "motion/react";

const SkillCard = ({ name, img, index }) => {
  const imgUrl = new URL(`../assets/images/icons/${img}`, import.meta.url).href;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="skill-card-glass card group w-full max-w-55 shadow-xl"
    >
      <figure className="flex h-32 items-center justify-center p-6">
        <img
          src={imgUrl}
          alt={name}
          className="h-full w-full object-contain transition-all duration-500 hover:rotate-12"
        />
      </figure>

      <div className="card-body items-center p-4 pt-0">
        <h2 className="card-title font-bold tracking-widest text-slate-300 group-hover:text-slate-100">
          {name?.toUpperCase()}
        </h2>
        <div className="mt-2 h-1 w-8 rounded-full bg-(--turquoise-surf)/30 transition-all duration-300 ease-in-out group-hover:bg-(--turquoise-surf)" />
      </div>
    </motion.div>
  );
};

export default SkillCard;
