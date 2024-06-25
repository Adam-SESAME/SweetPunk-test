"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Quotes = () => {
  interface Citation {
    id: number;
    original_quote: string;
    translated_quote: string;
    image_url: string;
  }

  const [citationsData, setCitationsData] = useState<Citation[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/citations")
      .then((response) => {
        console.log(response.data);
        setCitationsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const slides = citationsData.map((citation, index) => ({
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
    }, 500);
  }, [activeSlideIndex]);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  const test = () => {
    console.log(activeSlideIndex, "activeslideindex");
    console.log(slides[activeSlideIndex].image, "image");
    console.log(slides[activeSlideIndex].bigText, "bigtext");
    console.log(slides[activeSlideIndex].smallText, "smalltext");

    return <>hello</>;
  };

  const displaySlides = () => {
    if (slides !== null && slides.length > 0) {
      return (
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
      );
    }
  };

  const displayDots = () => {
    if (slides !== null && slides.length > 0) {
      return (
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
      );
    }
  };

  return (
    <section className="w-full min-h-[80vh] bg-[#DD1B5E] relative flex justify-center items-center pt-[80px] pl-[100px]">
      {displaySlides()}
      {displayDots()}
    </section>
  );
};

export default Quotes;
