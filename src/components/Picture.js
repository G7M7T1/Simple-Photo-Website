import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download
        <a href={data.src.large}> Here</a>
      </p>
    </div>
  );
};

export default Picture;
