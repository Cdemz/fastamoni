import React from "react";

const MainScreen = () => {
  return (
    <div className="jost bg-black h-screen text-white  mt-14 p-8 lg:pl-[8rem] flex flex-col lg:gap-8 gap-4 ">
      <h3 className=" font-semibold mt-16">WELCOME TO CODESHAPER</h3>
      <h1 className="font-bold text-5xl lg:text-6xl">
        <span className="block mb-4 lg:mb-6">CONSULTING</span>
        <span className="block mb-4 lg:mb-6">FOR EVERY</span>
        BUSINESS
      </h1>

      <button className="bg-[var(--color-primary)] p-6 w-[12rem] font-bold rounded-2xl mt-4 lg:mt-0">
        DISCOVER MORE
      </button>
    </div>
  );
};

export default MainScreen;
