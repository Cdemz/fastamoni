import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-500 p-8 flex flex-col lg:flex-row jost font-bold gap-6 lg:pt-16">
        <div className="flex justify-between flex-col gap-5 flex-1">
          <Image
            src="/flogo1.png"
            alt="fastamoni logo"
            width={300}
            height={300}
            className="h-auto w-[10rem]"
          />

          <h3>
            Welcome to our consultancy agency. Lore ipsum simply text amet cing
            elit simply text amet cing elit.
          </h3>
          <hr />
          <div
            className=" flex gap-4 flex-col py-2
          "
          >
            <div className="flex gap-2">
              <IoCall size={26} className="text-[var(--color-primary)]" />
              <p>+92 666 888 0000</p>
            </div>
            <div className="flex gap-2">
              <MdEmail size={26} className="text-[var(--color-primary)]" />
              <p>needhelp@company.com</p>
            </div>
            <div className="flex gap-2">
              <IoLocationSharp
                size={26}
                className="text-[var(--color-primary)]"
              />
              <p>66 Broklyn Street New York, USA</p>
            </div>
          </div>
        </div>
        {/* the end of the first one out of 3  */}
        <div className="flex flex-col gap-4 text-white flex-1">
          <h3 className="font-bold text-2xl">EXPLORE</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>About</li>
              <li>Meet our Team</li>
              <li>Case Studies</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li>Support</li>
              <li>Terms of use</li>
              <li>Privacy & Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* the end of the second one out of 3  */}
        <div className="flex flex-col gap-4 text-white flex-1">
          <h3 className="font-bold text-2xl">NEWSLETTER</h3>
          <div className="flex flex-col gap-2 text-gray-500 subscribe ">
            <p>SUBSCRIBE</p>
            <input
              placeholder="Your e-mail"
              className="subscribe-input"
              name="email"
              type="email"
            />
            <br />
            <div className="submit-btn">SUBMIT</div>
          </div>
        </div>
      </footer>
      <div className="">
        <hr className="w-[80%] mx-auto" />
        <div className=" flex flex-col lg:flex-row justify-center items-center my-2 lg:my-4 lg:justify-between lg:px-6">
          <p className="text-center py-4 text-gray-500">
            &copy; 2021 Fastamoni. All Rights Reserved.
          </p>
          <ul className="flex gap-3 text-gray-500">
            <Link
              href="https://www.instagram.com/fastamonihq?igsh=NWtxeWs0NnU5NTJ6"
              target="blank"
            >
              <FaInstagram size={26} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/fastamoni/"
              target="blank"
            >
              <FaLinkedin size={26} />
            </Link>
            <Link
              href="https://x.com/FastaMoni?t=JAhkK-Q393IzLyAj-QzxFg&s=09"
              target="blank"
            >
              <FaTwitter size={26} />
            </Link>
            <Link href="https://www.facebook.com/fastamoni" target="blank">
              <FaFacebook size={26} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
