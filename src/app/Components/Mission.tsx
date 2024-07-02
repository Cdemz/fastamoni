import React from "react";

const Mission = () => {
  return (
    <div className="jost bg-[#0F0D1D]  text-white   py-4 lg:py-8 lg:pl-[8rem] flex flex-col lg:gap-8 gap-2 items-center text-center uppercase ">
      <h1 className="font-bold text-2xl lg:text-4xl">
        <span className="block mb-4 lsg:mb-6">Mission is to protect</span>
        <span className="block mb-4 lsg:mb-6">your businesses &</span>
        <span className="block mb-4 l">much more</span>
      </h1>

      <button className="bg-[var(--color-primary)] p-6 w-[12rem] font-bold rounded-2xl mt-4 lg:mt-0">
        DISCOVER MORE
      </button>
    </div>
  );
};

export default Mission;
