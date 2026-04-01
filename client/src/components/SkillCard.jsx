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
      <figure className="flex h-24 items-center justify-center p-6 sm:h-28 md:h-32">
        <img
          src={imgUrl}
          alt={name}
          className="h-full w-full object-contain transition-all duration-500 hover:rotate-12"
        />
      </figure>

      <div className="card-body items-center p-4 pt-0">
        <h2 className="card-title text-text-muted group-hover:text-text-main font-bold tracking-widest">
          {name?.toUpperCase()}
        </h2>
        <div className="group-hover:bg-turquoise-surf bg-turquoise-surf/30 mt-2 h-1 w-8 rounded-full transition-all duration-300 ease-in-out" />
      </div>
    </motion.div>
  );
};

export default SkillCard;
