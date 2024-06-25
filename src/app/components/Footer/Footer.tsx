import React from "react";

const Footer = ({ id }: { id: string }) => {
  return (
    <>
      <section
        id={id}
        className="flex flex-row justify-between bg-[#1D1D1D] p-8 border-t border-b border-white/10 "
      >
        <div className="flex flex-row gap-6 items-center ">
          <a href="">
            <img src="instagram.png" alt="" width={25} />
          </a>
          <a href="">
            <img src="twitter.png" alt="" width={25} />
          </a>
          <a href="">
            <img src="facebook.png" alt="" width={25} />
          </a>
          <a href="">
            <img src="youtube.png" alt="" width={25} />
          </a>
        </div>
        <div className="flex flex-row font-bold text-white font-oswald gap-8 items-center">
          <a href="">
            <p>NOS PARTENAIRES</p>
          </a>
          <a href="">
            <p>CONTACT</p>
          </a>
          <a href="">
            <p>INFOS PRATIQUES</p>
          </a>
          <a href="">
            <p>MENTIONS LEGALES</p>
          </a>
        </div>
        <div className="flex flex-row font-oswald font-semibold gap-2 items-center w-[171px] justify-end">
          <p className="text-white">FR</p>
          <p className="text-white text-[15px] self-center">|</p>
          <p className="text-gray-500">EN</p>
        </div>
      </section>
      <section className="flex flex-row justify-between items-end bg-[#1D1D1D] p-12">
        <div className="flex flex-col pl-4">
          <hr className="pb-4 border-gray-500" />
          <div>
            <p className="text-white text-xs font-light"> @ FCFA 2021</p>
            <p className="text-white text-xs font-light">All right reserved</p>
          </div>
        </div>
        <div className="">
          <div
            className="bg-[#DD1B5E] rotate-x w-[250px] h-[250px] flex justify-center items-center"
            style={{
              borderRadius: "50% 50% 0 50%",
            }}
          >
            <p className="text-left text-white text-4xl font-bold font-oswald rotate-45 w-[150px]">
              FRANCO - AMERICAN CULTURAL FUND
            </p>
          </div>
        </div>
        <div className="flex flex-col pr-4 text-right">
          <hr className="pb-4 border-gray-500" />
          <p className="text-white text-xs font-light">Site réalisé</p>
          <p className="text-white text-xs font-light">par Sweet Punk</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
