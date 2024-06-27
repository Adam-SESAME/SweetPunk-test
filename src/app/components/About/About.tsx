import React from "react";

const About = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="w-full text-white font-oswald bg-[#1F1F1E] font-bold text-xl pb-20 md:text-7xl flex flex-col gap-4 md:pl-8 px-4 pt-32"
    >
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
        <p className="text-[35px] lg:text-[72px] 2xl:text-[90px]">
          Le Fonds Culturel
        </p>
        <img
          className="hidden md:block mb-[0.20rem] h-[30px] w-[60px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:h-[50px]"
          src="beach.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px]">Franco</p>
        <img
          className="hidden md:block h-[30px] w-[60px] md:w-[80px] md:h-[40px] mb-[0.20rem] xl:w-[120px] xl:h-[50px]"
          src="camera.jpg"
          alt=""
        />
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px]">
          Américain est une
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px]">
          collaboration
        </p>
        <img
          className="hidden md:block h-[30px] w-[60px] md:w-[80px] md:h-[40px] mb-[0.20rem] xl:w-[120px] xl:h-[50px]"
          src="hollywood.jpg"
          alt=""
        />
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px]">
          entre la Société
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px] text-center">
          des Auteurs, Compositeurs,
        </p>
        <img
          className="hidden md:block h-[30px] w-[60px] md:w-[80px] md:h-[40px] mb-[0.20rem] xl:w-[120px] xl:h-[50px]"
          src="shadow.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end md:gap-4 md:items-baseline">
        <p className="text-[35px] lg:text-[72px] 2xl:text-[100px]">
          et Editeurs de musique
        </p>
        <div className="w-full md:w-[200px] mt-6 flex flex-col gap-4 items-center md:items-start">
          <hr className="w-[30%]" />
          <p className="text-xl md:text-xs font-light text-center md:text-left">
            The Franco-American Cultural Fund is a unique partnership between
            Sacem and the two American guilds, Directors Guild of America and
            the Writers Guild of America West, subsequently joined by the Motion
            Picture Association.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
        <button className="font-oswald font-light bg-[#1F1F1E] text-white w-[200px] py-4 border border-white text-xs hover:bg-white hover:text-black hover:shadow-md transition duration-300 ease-in-out">
          DECOUVRIR LE FCFA
        </button>
      </div>
    </section>
  );
};

export default About;
