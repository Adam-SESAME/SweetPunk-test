"use client";
import React, { useState } from "react";

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="bg-black w-full min-h-[100vh] md:min-h-[120vh] bg-hero-background bg-cover relative">
      <div
        className="absolute top-8 left-8 bg-white rotate-x w-[100px] h-[100px] flex justify-center items-center"
        style={{
          borderRadius: "50% 50% 0 50%",
        }}
      >
        <p className="text-black text-xs font-bold font-oswald rotate-45 text-left w-[60px]">
          FRANCO - AMERICAN CULTURAL FUND
        </p>
      </div>
      <div className="absolute top-[15%] right-[5%] rounded-full w-[100px] h-[100px] bg-[#DD1B5E]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circlePath"
            fill="none"
            stroke="none"
            d="
                M 20, 50
                a 30,30 0 1,1 60,0
                a 30,30 0 1,1 -60,0
              "
          />
          <text
            id="text"
            fontFamily="Bebas Neue"
            fontSize="12"
            fontWeight="bold"
            fill="white"
          >
            <textPath id="textPath" href="#circlePath">
              Le Live · News · Actus · Events ---------------------
            </textPath>
          </text>
        </svg>
      </div>
      <div
        className="animation flex flex-col absolute top-[250px] w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          overflow: "hidden",
        }}
      >
        <img
          className="w-[60%]"
          src="text1.svg"
          alt=""
          style={{
            transform: isHovered ? "translateX(50%)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }}
        />
        <img
          className="w-[60%] place-self-end"
          src="text2.svg"
          alt=""
          style={{
            transform: isHovered ? "translateX(-50%)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
