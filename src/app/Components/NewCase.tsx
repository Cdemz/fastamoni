import React from "react";
import { FaCar } from "react-icons/fa";

const NewCase = () => {
  return (
    <div className="bg-[var(--color-secondary-a)] flex flex-col justify-center items-center py-8 pt-72 lg:pt-36 jost relative dmt-28 ">
      <div className="flex flex-col lg:flex-row absolute   -top-28 left-1/2 transform -translate-x-1/2  h-50 z-20 shadow-lg shadow-gray-500 w-[85vw] gap-5 justify-stretch ">
        <div className="flex gap-2 bg-white  p-4 shadow-lg shadow-gray-700">
          <div className="bg-[var(--color-primary-b)] w-[4rem] h-10 p-4 flex justify-center items-center ">
            <h1 className="font-bold text-xl lg:text-2xl text-[var(--color-primary)]  ">
              01
            </h1>
          </div>
          <div className="text-[var(--color-secondary)]">
            <h2 className="font-bold text-2xl text-black lg:text-nowrap">
              GET PROFESSIONAL ADVICE
            </h2>
            <p className="text-xl">
              There are many variations of available but the majority have
              suffer alteration
            </p>
          </div>
        </div>

        {/* end of the first get prof gjaimflkm */}
        <div className="flex gap-2 bg-white  p-4 shadow-lg shadow-gray-700">
          <div className="bg-[var(--color-primary-b)] w-[4rem] h-10 p-4 flex justify-center items-center ">
            <h1 className="font-bold text-xl lg:text-2xl text-[var(--color-primary)]  ">
              02
            </h1>
          </div>
          <div className="text-[var(--color-secondary)]">
            <h2 className="font-bold text-2xl text-black lg:text-nowrap">
              TRUSTED & PROFESSIONAL
            </h2>
            <p className="text-xl">
              There are many variations of available but the majority have
              suffer alteration
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-black font-bold text-2xl uppercase lg:text-4xl">
        New Case studies
      </h1>
      <p className="text-black text-xl font-bold">
        We help our client renew their business
      </p>
      <div className="flex gap-2 flex-col  lg:flex-row mt-8 flex-1 ">
        {[...Array(2)].map((_, index) => (
          <div className=" bg-[var(--color-secondary)] px-6 pb-2 pt-20 ">
            <FaCar size={26} />
            <h2>THOUGHT LEADERSHIP</h2>
            <h1 className="font-bold text-lg lg:text-xl uppercase text-nowrap">
              <span className="block mb-1 lg:mb-2">business</span>
              <span className="block mb-1 lg:mb-2">Growth</span>
            </h1>
          </div>
        ))}
        <div className=" bg-[var(--color-secondary)] pr-6 pt-20 flex-1 ww-[14rem] ">
          <div className="bg-[var(--color-primary)] p-8 flex flex-col">
            <FaCar size={26} />
            <h2>THOUGHT LEADERSHIP</h2>
            <h1 className="font-bold text-lg lg:text-xl uppercase text-nowrap">
              <span className="block mb-1 lg:mb-2">business</span>
              <span className="block mb-1 lg:mb-2">Growth</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
