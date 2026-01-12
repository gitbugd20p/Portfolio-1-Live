import React from "react";

const SectionTopHeader = ({
  sectionTopClassName = "text-center",
  header,
  paraOne,
  hClassName,
  pClassNameOne,
  secondPara,
  paraTwo,
  pClassNameTwo,
}) => {
  return (
    <div className={`${sectionTopClassName}`}>
      <h1 className={`${hClassName}`}>{header}</h1>
      <p className={`${pClassNameOne}`}>{paraOne}</p>
      {/* Second paragraph */}
      {secondPara && <p className={`${pClassNameTwo}`}>{paraTwo}</p>}
    </div>
  );
};

export default SectionTopHeader;
