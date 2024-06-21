import React from "react";

function About() {
  return (
    <section className="w-full text-white font-oswald bg-[#1F1F1E] min-h-[120vh] font-bold text-xl md:text-7xl flex flex-col gap-2 pl-8 pt-32">
      <div className="flex flex-row items-end gap-4">
        <p className="">Le Fonds Culturel</p>
        <img
          className="mb-[0.20rem] h-[20px] w-[50px] md:w-[100px] md:h-[40px]"
          src="beach.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-row items-end gap-4">
        <p>Franco</p>
        <img
          className="h-[20px] w-[40px] md:w-[80px] md:h-[40px] mb-[0.20rem]"
          src="camera.jpg"
          alt=""
        />
        <p>Américain est une</p>
      </div>
      <div className="flex flex-row items-end gap-4">
        <p>collaboration</p>
        <img
          className="h-[20px] w-[40px] md:w-[80px] md:h-[40px] mb-[0.20rem]"
          src="hollywood.jpg"
          alt=""
        />
        <p>entre la Société</p>
      </div>
      <div className="flex flex-row items-end gap-4">
        <p>des Auteurs, Compositeurs,</p>
        <img
          className="h-[20px] w-[40px] md:w-[80px] md:h-[40px] mb-[0.20rem]"
          src="shadow.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-row md:gap-4">
        <p className="">et Editeurs de musique</p>
        <div className="w-[200px] mt-6 flex flex-col gap-4">
          <hr className="w-[30%]" />
          <p className="text-xs font-light">
            The Franco-American Cultural Fund is a unique partnership between
            Sacem and the two American guilds, Directors Guild of America and
            the Writers Guild of America West, subsequently joined by the Motion
            Picture Association.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <button className="font-oswald font-light bg-[#1F1F1E] text-white w-[150px] py-4 border border-white text-xs hover:bg-white hover:text-black hover:shadow-md transition duration-300 ease-in-out">
          DECOUVRIR LE FCFA
        </button>
      </div>
    </section>
  );
}

export default About;
