"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Button from "./Common/Button";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const list = ["home", "pages", "Services", "Portfolio", "Blog", "Contact Us"];
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <picture>
              <Image src={logo} alt={logo} className="w-6 md:w-9" />
            </picture>
            <h5 className="font-mulish font-bold text-xl lg:text-[35px] text-primary">
              Pacific Corp.
            </h5>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-10">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="font-openSans cursor-pointer hover:text-primary transition-all font-normal hover:scale-105 text-secondary text-base capitalize"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Button />
          </div>

          {/* menu bar */}
          <div
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl md:hidden cursor-pointer"
          >
            {" "}
            <HiBars3 />
          </div>
        </div>
      </div>

      {/* overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#ffffff25] backdrop-blur-sm w-full h-full fixed top-0 left-0 z-40"
        ></div>
      )}
      {/* mobile view menu */}

      <div
        className={`w-[50%] flex flex-col items-center justify-center h-full fixed top-0 bg-[#444444] z-[999] ${
          isMenuOpen
            ? "right-0 transition-all duration-200"
            : "right-[-100%] transition-all duration-200"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-4">
          {list.map((item, index) => (
            <li
              onClick={() => setIsMenuOpen(false)}
              key={index}
              className="font-openSans cursor-pointer hover:text-secondary transition-all font-normal hover:scale-105 text-white text-base capitalize"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Nav;
