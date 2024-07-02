"use client";
import React from "react";

const TSlider = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:my-6 gap-4 ">
      {[...Array(2)].map((_, index) => (
        <div className="px-8 flex flex-co gap-2 h-[17rem]  " key={index}>
          <div className="py-8 lg:py-6 px-4 w bg-white shadow-gray-500 shadow-lg flex flex-col gap-2 text-black  ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sint ea in quisquam pariatur aliquid, voluptatum rem ratione illo
              quasi debitis consectetur error non at.
            </p>
            <p className="text-[var(--color-primary)] font-bold">
              TODD HIGGINS
            </p>
            <p>CUSTOMER</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TSlider;
