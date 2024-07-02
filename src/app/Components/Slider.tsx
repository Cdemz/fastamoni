"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="container mx-auto mt-8">
      <Swiper
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="custom-slide">
            <div className="mt-4 py-8 lg:py-6 px-4 w-full bg-black flex flex-col gap-2">
              <h2 className="font-bold text-xl text-white">
                WEALTH <span className="block mt-1 lg:mb-4">MANAGEMENT</span>
              </h2>
              <div className="flex justify-center items-center gap-4">
                <a href="#" className="text-[var(--color-secondary)] font-bold">
                  READ MORE
                </a>
                <div className="scene ml-auto">
                  <div className="panel">
                    <div className="panel2"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-4 flex justify-center items-center">
        <hr className="w-full " />
        <p className=" mx-2 lg:mx-4 text-nowrap">MEET THE PARTNERS</p>
        <hr className="w-full" />
      </div>

      <div className="flex justify-between mt-4">
        <button
          ref={prevRef}
          className="bg-gray-700 px-4 py-2 rounded border-2 border-[var(--color-primary)]"
        >
          <FaArrowLeft className="text-[var(--color-primary)]" />
        </button>
        <button
          ref={nextRef}
          className="bg-gray-700 px-4 py-2 rounded border-2 border-[var(--color-primary)]"
        >
          <FaArrowRight className="text-[var(--color-primary)]" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
