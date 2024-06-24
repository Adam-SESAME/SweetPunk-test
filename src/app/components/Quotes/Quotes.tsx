"use client";
import React, { useState, useEffect } from "react";

const Quotes = () => {
  const slides = [
    {
      image: "michaelman.jpeg",
      bigText:
        "We are united by our love for cinema, and our passion for making films that are diverse.",
      smallText:
        "C'est l'amour du cinéma, l'amour de faire des films qui sont vus par des spectateurs qui nous unit.",
    },
    {
      image: "camera.jpg",
      bigText: "Big Text 2",
      smallText: "Small Text 2",
    },
    {
      image: "hollywood.jpg",
      bigText: "Big Text 3",
      smallText: "Small Text 3",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showBigText, setShowBigText] = useState(false);
  const [showSmallText, setShowSmallText] = useState(false);

  useEffect(() => {
    setShowBigText(false);
    setShowSmallText(false);

    setTimeout(() => {
      setShowBigText(true);
    }, 500);

    setTimeout(() => {
      setShowSmallText(true);
    }, 500);
  }, [activeSlideIndex]);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <section className="w-full min-h-[80vh] bg-[#DD1B5E] relative flex justify-center items-center pt-[80px] pl-[100px]">
      <div className="flex flex-col justify-center items-start w-full">
        <div>
          <div className="absolute bottom-[-170px] left-[80px]">
            <img
              src={slides[activeSlideIndex].image}
              alt=""
              className="h-[440px] w-[385px] max-h-full z-10 "
            />
          </div>
          <div
            className={`text-white z-20 absolute top-[80px] w-[550px] right-[200px] ${
              showBigText ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-out`}
          >
            <p className="font-oswald text-[100px] absolute left-[-40px] top-[-50px]">
              "
            </p>
            <h2 className="text-5xl font-bold font-oswald pb-4">
              {slides[activeSlideIndex].bigText.split("").map((char, i) => (
                <span
                  key={i}
                  style={{ display: `${showBigText ? "inline" : "none"}` }}
                >
                  {char}
                </span>
              ))}
            </h2>
            <hr className="pt-2 opacity-50 w-[15%]" />
            <p className="font-light text-lg font-oswald w-[350px]">
              {showSmallText ? slides[activeSlideIndex].smallText : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              width: "2rem",
              height: "2rem",
              borderRadius: "90px",
              outline: "none",
              cursor: "pointer",
            }}
            className={`${
              index === activeSlideIndex ? "border-[1px] border-white" : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
