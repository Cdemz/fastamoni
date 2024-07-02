import Link from "next/link";
import React from "react";
import Slider from "./Slider";

const WealthCarousel = () => {
  return (
    <div className="bg-[#0F0D1D] flex flex-col justify-center items-center rh-[50vh] jost py-8 px-4 lg:px-20">
      <h1 className="text-white uppercase lg:text-4xl text-2xl font-bold">
        Real-world Experience
      </h1>
      <h3>The best business consulting firm count on!</h3>
      <Slider />
    </div>
  );
};

export default WealthCarousel;
