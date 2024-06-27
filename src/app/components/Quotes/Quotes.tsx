"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Quotes = ({ id }: { id: string }) => {
  interface Citation {
    id: number;
    original_quote: string;
    translated_quote: string;
    image_url: string;
  }

  interface Slide {
    image: string;
    bigText: string;
    smallText: string;
  }

  const [citationsData, setCitationsData] = useState<Citation[]>([]);

  useEffect(() => {
    axios
      .get("https://sweetpunk-test-backend.onrender.com/citations")
      .then((response) => {
        console.log(response.data);
        setCitationsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const slides = citationsData.map((citation: Citation) => ({
    image: citation.image_url || "default-image.jpg",
    bigText: citation.original_quote || "Default Big Text",
    smallText: citation.translated_quote || "Default Small Text",
  }));

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
    }, 1000);
  }, [activeSlideIndex]);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  const displaySlides = () => {
    if (slides?.length > 0) {
      return (
        <div className="flex flex-col justify-center items-start w-full">
          <div>
            <div className="absolute top-[100px] right-[25px] md:bottom-[-170px] md:left-[80px] 2xl:top-[250px]">
              <img
                src={slides[activeSlideIndex].image}
                alt=""
                className="h-[350px] md:h-[440px] md:w-[385px] 2xl:h-[550px] 2xl:w-[485px] max-h-full z-10"
              />
            </div>
            <div
              className={`text-white z-20 absolute top-[70px] right-[20px] max-w-[340px] md:top-[80px] md:max-w-[550px] md:right-[200px] 2xl:max-w-[1000px] 2xl:top-[200px] ${
                showBigText ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 ease-out`}
            >
              <p className="font-oswald text-[80px] absolute left-[-25px] md:left-[-40px] top-[-50px] ">
                "
              </p>

              <h2 className="text-lg md:text-5xl 2xl:text-7xl font-bold font-oswald pb-4 ">
                {slides[activeSlideIndex].bigText}
              </h2>

              <div className="">
                <hr className="pt-2 opacity-50 w-[15%]" />
                <p className="font-light text-sm md:text-lg font-oswald w-[350px]">
                  {showSmallText ? slides[activeSlideIndex].smallText : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const displayDots = () => {
    if (slides?.length > 0) {
      return (
        <div className="absolute bottom-12 right-8 flex space-x-2">
          {slides.map((slide: Slide, index) => (
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
      );
    }
  };

  return (
    <section
      id={id}
      className="w-full min-h-[80vh] bg-[#DD1B5E] relative flex justify-center items-center pt-[80px] pl-[100px]"
    >
      {displaySlides()}
      {displayDots()}
    </section>
  );
};

export default Quotes;
