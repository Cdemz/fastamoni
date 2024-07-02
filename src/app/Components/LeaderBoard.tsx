import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const LeaderBoard = () => {
  return (
    <div className=" flex flex-col lg:flex-row bg-white text-black p-8 pb-36">
      <div className="flex justify-start flex-1 ">
        <div className=" h-32 w-32 flex items-center justify-center bg-[var(--color-primary)] text-white">
          <FaPlay size={50} />
        </div>
      </div>
      {/* main content */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-bold text-4xl uppercase">
          WE're leading in the market
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          consequuntur sit? Sint odio ratione repudiandae.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          reprehenderit?
        </p>
        <div className="flex gap-10 flex-col">
          <div className="relative h-6 w-full bg-gray-500">
            <div className="h-6 w-[88%] bg-[var(--color-primary)]"></div>
            <h4 className="absolute right-[12%] top-8 text-black font-bold">
              88%
            </h4>
            <h2 className="text-black font-bold ">CONSULTING</h2>
          </div>
          <div className="relative h-6 w-full bg-gray-500">
            <div className="h-6 w-[68%] bg-[var(--color-primary)]"></div>
            <h4 className="absolute right-[28%] top-8 text-black font-bold">
              68%
            </h4>
            <h2 className="text-black font-bold ">ADVICES</h2>
          </div>
        </div>
        <div className="flex gap-4 bg-white  p-4 shadow-lg shadow-gray-700 mt-10 pt-8">
          <div className="bg-[var(--color-primary-b)] w-[4rem] h-10 p-4 flex justify-center items-center ">
            <h1 className="font-bold text-xl lg:text-2xl text-[var(--color-primary)]  ">
              <MdOutlineWifiCalling3 size={36} />
            </h1>
          </div>
          <div className="text-[var(--color-secondary)] ">
            <h2 className="mb-1 text-2xl text-black text-nowrap">
              Have any question? Give us a call
            </h2>
            <p className="text-xl">+92 666 888 0000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
