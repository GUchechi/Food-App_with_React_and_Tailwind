import React from "react";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { footerTextAnimation } from "../animation";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      ref={element}
      className="text-black text-center py-10"
      variants={footerTextAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-12">
        <h3 className="cursor-pointer mt-4 text-[#fa8517]">
          STACK <span className="font-bold text-[var(--appColor)]">EATS</span>
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[var(--appColor)]">
          Terms
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[#fa8517]">
          Privacy
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[var(--appColor)]">
          Security
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[#fa8517]">Status</h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[var(--appColor)]">
          Pricing
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[#fa8517]">Blog</h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[var(--appColor)]">
          Training
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[#fa8517]">
          Contact us
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[var(--appColor)]">
          Docs
        </h3>
        <h3 className="cursor-pointer mt-4 font-bold text-[#fa8517]">Food</h3>

        <h3 className="cursor-pointer mt-4 text-[var(--appColor)] font-bold">
          STACK <span className="font-bold text-[#fa8517]">EATS</span>
        </h3>
      </div>
    </motion.div>
  );
};

export default Footer;
