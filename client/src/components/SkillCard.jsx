const SkillCard = ({ name, img }) => {
  const imgUrl = new URL(`../assets/images/icons/${img}`, import.meta.url).href;
  return (
    <div className="card bg-(--light-cyan) shadow-sm hover:shadow-lg">
      <figure className="flex h-48 w-64 items-center justify-center p-6">
        <img
          src={imgUrl}
          alt="HTML5"
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </figure>

      <div className="card-body pt-0">
        <h2 className="card-title mx-auto text-2xl">{name?.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
