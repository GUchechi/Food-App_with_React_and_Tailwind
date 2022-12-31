import React from "react";
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="animate-bounce px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            {/* <span className="text-orange-500">Foods</span> Delivered */}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Foods Delivered"],
              }}
            />
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <section className="marquee-section">
        <Marquee speed={60} gradient={false} pauseOnHover>
          <div className="marquee-container">
            <div className="marquee3k">
              <h4>
                {" "}
                <span className="font-bold text-[var(--appColor)]">PIZZA</span>
                <span className="font-bold text-orange-500">WAFFLE</span>
                <span className="font-bold text-[var(--appColor)]">ICE-CREAM </span>
                <span className="font-bold text-orange-500">MUSHROOM BURGER </span>{" "}
              </h4>

              <h4>
                {" "}
                <span className="font-bold text-[var(--appColor)]"> BACON </span>{" "}
                <span className="font-bold text-orange-500">CHEESE BURGER</span>
                <span className="font-bold text-[var(--appColor)]"> ICE-CREAM </span>
                <span className="font-bold text-orange-500"> FETA </span>
                
              </h4>
              <h4>
                {" "}
                <span className="font-bold text-[var(--appColor)]">BURGER</span>
                <span className="font-bold text-orange-500">CHEESE</span>
                <span className="font-bold text-[var(--appColor)]"> PIZZA </span>
                <span className="font-bold text-orange-500"> WAFFLE </span>{" "}
              </h4>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Hero;
