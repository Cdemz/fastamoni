"use client";
import { useRef } from "react";
import TSlider from "./TSlider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden bg-[var(--color-secondary-a)] items-center justify-center py-4">
      <div className=" flex flex-col justify-center items-center text-center lg:text-start rh-[50vh] jost py-8 px-4 lg:px-20 text-black !w-[70vw] flex-1">
        <h1 className="font-bold text-2xl lg:text-4xl uppercase text-nowrap">
          <span className="block mb-2 lg:mb-6">What they</span>
          <span className="block mb-2 lg:mb-6">are talking</span>
          <span className="block mb-4 lg:mb-6">about?</span>
        </h1>
        <h3>Trusted by more than 4,200 customers</h3>
        <div className="flex justify-between mt-4 gap-4">
          <button className="bg-white px-4 py-4 rounded-full ">
            <FaArrowLeft className="text-black" />
          </button>
          <button className="bg-white px-4 py-4 rounded-full ">
            <FaArrowRight className="text-black" />
          </button>
        </div>
      </div>
      <div className="">
        <div className=" h-[40%] ">
          <TSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
