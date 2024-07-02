import React from "react";
import { FaMinus } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AChievements = () => {
  return (
    <div className="bg-white text-black flex flex-col lg:flex-row gap-4 lg:p-8 pt-28 z-10">
      <div className="flex flex-col gap-4 p-4">
        <div className="fbg-black flex gap-2">
          <div className="flex justify-center items-center bg-[var(--color-primary-b)]  p-2 h-[20%]">
            <IoMdCheckmarkCircleOutline
              size={30}
              className="text-[var(--color-primary)]"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-black">HIGHEST SUCCESS RATES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              vitae odio eveniet deleniti sapiente, maxime debitis nostrum.
            </p>
          </div>
        </div>
        <div className="fbg-black flex gap-2">
          <div className="flex justify-center items-center bg-[var(--color-primary-b)]  p-2 h-[20%]">
            <IoMdCheckmarkCircleOutline
              size={30}
              className="text-[var(--color-primary)]"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-black">HIGHEST SUCCESS RATES</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              vitae odio eveniet deleniti sapiente, maxime debitis nostrum.
            </p>
          </div>
        </div>
      </div>

      <hr className="h-[100%] lg:h-[80%] h:w-1 " />

      {/* second guy */}
      <div className="d p-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          voluptatibus eligendi porro dolore temporibus impedit, voluptas
          praesentium reiciendis sapiente placeat veritatis quas aliquid commodi
          provident saepe ex nisi unde ipsam!
        </p>
        <div className=" gap-3 flex flex-col">
          <div className="flex items-centesr justsify-center gap-3">
            <FaMinus className="text-[var(--color-primary)]" />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className="flex items-centesr justsify-center gap-3">
            <FaMinus className="text-[var(--color-primary)]" />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className="flex items-centesr justsify-center gap-3">
            <FaMinus className="text-[var(--color-primary)]" />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className="flex items-centesr justsify-center gap-3">
            <FaMinus className="text-[var(--color-primary)]" />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className="flex items-centesr justsify-center gap-3">
            <FaMinus className="text-[var(--color-primary)]" />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AChievements;
