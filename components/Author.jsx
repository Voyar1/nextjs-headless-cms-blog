import React from "react";
import { BsFillAwardFill } from "react-icons/bs";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute -top-4 -left-7 text-white text-7xl md:text-8xl">
        <BsFillAwardFill />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
