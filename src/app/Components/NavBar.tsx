"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiSearch, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsMenuOpen(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 300); // Allow some time for the menu to open
  };

  return (
    <nav
      className={` z-40 fixed top-0 left-0 w-full  transition-all duration-300 h-16 border-b-2 border-white
      ${isMenuOpen ? "bg-black " : isScrolled ? "bg-black" : "bg-black"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6  h-full">
        <div className="flex items-center justify-between lg:justify-start ah-16 h-full bg-red-500s ">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center justify-center lg:border-r-2 lg:border-white lg:pr-2 h-full mr-[5vw]">
            <Link href="/">
              <Image
                src="/Flogo.png"
                alt="Company logo"
                width={300}
                height={300}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>
          <div className=" capitalize hidden lg:flex justify-between ">
            <ul className="text-white capitalize text-md font-bold flex gap-2">
              {" "}
              <a href="">Home</a>
              <a href="">Services</a>
              <a href="">About</a>
              <a href="">PAGES</a>
              <a href="">CASE SHOP</a>
              <a href="">BLOG</a>
              <a href="">CONTENT</a>
            </ul>
            <div className="flex gap-4 ml-[10vw]  ">
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
              </Link>{" "}
            </div>
          </div>
          <div className="flex items-center lg:border-x-2 lg:border-white h-full lg:px-4 lg:mx-auto">
            <button
              onClick={handleSearchClick}
              className="text-white focus:outline-none"
            >
              <FiSearch size={24} />
            </button>
          </div>
          <div className="hidden lg:flex">
            <p>Need help?</p>
            <p>+92 666 888 0000</p>
          </div>
        </div>
      </div>
      <div
        className={` fixed justify-between top-[3.4rem] z-50 left-0 w-full h-[100vh] bg-[var(--color-secondary)] text-white transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 pt-6 pb-8 capitalize h-full">
          <ul className="space-y-2 flex flex-col gap-2 uppercase text-2xl font-extrabold">
            {" "}
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">About</a>
            <a href="">PAGES</a>
            <a href="">CASE SHOP</a>
            <a href="">BLOG</a>
            <a href="">CONTENT</a>
          </ul>

          <div className="mt-32 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className=" " size={24} />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Fastamoni"
              className="w-[90%] pl-10 pr-4 py-2 rounded focus:outline-blue-500 focus:ring-2 focus:ring-white grate text-white bg-[#374366] text-xl"
            />
          </div>
          <div className="grate mt-10">
            <p className="text-md">FOLLOW FASTAMONI</p>
            <ul className="flex gap-3">
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
    </nav>
  );
};

export default Navbar;

// import Image from "next/image";
// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// const NavBar = () => {
//   return (
//     <nav className="jost flex gap-5">
//       <Image
//         src="/Flogo.png"
//         alt="company-logo"
//         width={300}
//         height={300}
//         className="h-5 w-auto"
//       />
//       <div className="">
//         <div className="uppercase ">
//           <a href="">Home</a>

//           <a href="">Services</a>
//           <a href="">About</a>
//           <a href="">PAGES</a>
//           <a href="">CASE SHOP</a>
//           <a href="">BLOG</a>
//           <a href="">CONTENT</a>
//         </div>
//         <div className="">
//           <FaInstagram />
//           <FaLinkedin />
//           <FaTwitter />
//           <FaFacebook />
//         </div>
//         <div className="">
//           <CiSearch />
//         </div>
//         <div className="">
//           < p>Need help?</ p>
//           < p>+92 666 888 0000</ p>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
