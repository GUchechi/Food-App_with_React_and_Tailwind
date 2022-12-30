import React from "react";

const Footer = () => {
  return (
    <div className="text-black text-center py-10">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-12">
        <h3 className="cursor-pointer text-[#fa8517]">
          STACK <span className="font-bold text-[var(--appColor)]">EATS</span>
        </h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Terms
        </h3>
        <h3 className="cursor-pointer font-bold text-[#fa8517]">Privacy</h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Security
        </h3>
        <h3 className="cursor-pointer font-bold text-[#fa8517]">Status</h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Pricing
        </h3>
        <h3 className="cursor-pointer font-bold text-[#fa8517]">Blog</h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Training
        </h3>
        <h3 className="cursor-pointer font-bold text-[#fa8517]">Contact us</h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Docs
        </h3>
        <h3 className="cursor-pointer font-bold text-[#fa8517]">Food</h3>
        <h3 className="cursor-pointer font-bold text-[var(--appColor)]">
          Social Media
        </h3>
      </div>
    </div>
  );
};

export default Footer;
