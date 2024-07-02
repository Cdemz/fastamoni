"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserDoctor } from "react-icons/fa6";
// import { motion } from "framer-motion";

const Solution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the duration of the animation
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className=" bg-[#0F0D1D] relative  lg:pb-16 pb-32 flex flex-col justify-center items-center overflow-hiddens">
      <div className="flex flex-col lg:flex-row lg:my-6 gap-4 ">
        {[...Array(4)].map((_, index) => (
          <div className="py-8 flex flex-co gap-2   " key={index}>
            <div className="text-white g flex flex-col gap-2  justify-center items-center  ">
              <div className="bg-black  h-8 w-8 flex justify-center items-center">
                <FaUserDoctor size={56} />
              </div>
              <p className="eetext-[var(--color-primary)] font-bold text-2xl">
                420
              </p>
              <p>CONSULTING SOLUTIONS</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col lg:flex-row absolute -bottom-24  lg:-bottom-7  left-[50%] transform -translate-x-1/2  h-50 z-50   ew-[80vw] gap-5 jsustify-stretch  hbg-red-500">
        {" "}
        <div data-aos="fade-left" className="text-center   grate lg:w-[40%]">
          <div className=" flex flex-col lg:flex-row gap-2">
            <div className="shadow-gray-700 shadow-lg py-4 px-6 bg-white ">
              <h1 className="uppercase text-xl font-extrabold mb-3 lg:text-2xl text-[var(--color-primary)] text-nowrap">
                Business Growth
              </h1>
            </div>
            <div className="shadow-gray-700 shadow-lg py-4 px-6 bg-white ">
              <h1 className="uppercase text-xl font-extrabold mb-3 lg:text-2xl text-black text-nowrap">
                Business Growth
              </h1>
            </div>
            <div className="shadow-gray-700 shadow-lg py-4 px-6 bg-white ">
              <h1 className="uppercase text-xl font-extrabold mb-3 lg:text-2xl text-black text-nowrap">
                Business Growth
              </h1>
            </div>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Solution;
