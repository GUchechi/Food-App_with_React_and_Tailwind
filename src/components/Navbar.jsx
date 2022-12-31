import React from "react";
import { useState } from "react";
import {
  AiFillTags,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useScroll } from "./useScroll";
import { navAnimation } from "../animation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [element, controls] = useScroll();
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <motion.div
        ref={element}
        variants={navAnimation}
        transition={{ delay: 0.1 }}
        animate={controls}
        className="flex items-center"
      >
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className="text-[var(--appColor)]" />
        </div>
        <h4 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-[#fa8517]">
          STACK <span className="font-bold text-[var(--appColor)]">EATS</span>
        </h4>
        <div className="hidden lg:flex items-center bg-[var(--appColor)] rounded-full p-1 text-[14px]">
          <p className="bg-[var(--orange)] text-[#000000f8] rounded-full p-2 font-bold">
            DELIVERY
          </p>
          <p className="p-2 text-white font-bold">PICKUP</p>
        </div>
      </motion.div>
      {/* Right Side Search */}
      <motion.div ref={element}
        variants={navAnimation}
        transition={{ delay: 0.1 }}
        animate={controls}
         className="bg-[var(--appColor)] rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="text-[#fa8517]" />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none text-white"
          placeholder="Search foods"
        />
      </motion.div>
      {/* Cart Button */}
      <button className="bg-[var(--appColor)] text-white hidden md:flex items-center py-2 rounded-full font-bold outline-none border-none">
        <BsFillCartFill size={20} className="mr-2 text-[#fa8517]" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer text-[var(--appColor)]"
        />
        <h4 className="text-2xl p-4 text-[#fa8517]">
          STACK<span className="font-bold text-[var(--appColor)]"> EATS</span>
        </h4>
        <nav>
          <ul className="flex flex-col p-4 text-[var(--appColor)] font-bold cursor-pointer">
            <li className="text-xl py-4 gap-3 flex text-[#fa8517]">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 gap-3 flex">
              <MdFavorite size={25} className="mr-4 text-[var(--appColor)]" />{" "}
              Favorites
            </li>
            <li className="text-xl py-4 gap-3 flex text-[#fa8517]">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 gap-3 flex">
              <MdHelp size={25} className="mr-4 text-[var(--appColor)]" /> Help
            </li>
            <li className="text-xl py-4 gap-3 flex text-[#fa8517]">
              <AiFillTags size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 gap-3 flex">
              <BsFillSaveFill
                size={25}
                className="mr-4 text-[var(--appColor)]"
              />{" "}
              Best Ones
            </li>
            <li className="text-xl py-4 gap-3 flex text-[#fa8517]">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
