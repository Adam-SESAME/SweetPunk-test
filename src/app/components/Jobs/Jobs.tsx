import React from "react";
import "./Jobs.css";
import JobCard from "./JobCard";
import NameCard from "./NameCard";

const Jobs = () => {
  return (
    <section className="bg-[#1D1D1D] min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row pt-60 items-center justify-center gap-8 xl:pt-40">
        <img className="h-[60px] md:h-[40px]" src="dga-logo.png" alt="" />
        <img className="h-[60px] md:h-[40px]" src="mpa-logo.png" alt="" />
        <img className="h-[60px] md:h-[40px]" src="wga-logo.png" alt="" />
        <img className="h-[60px] md:h-[40px]" src="sacem-logo.png" alt="" />
      </div>
      <p className="text-lg md:text-xs font-light text-white font-oswald text-center pt-[20px] md:max-w-[35%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta
        laboriosam, atque fugiat officia nobis nam perspiciatis placeat error
        reprehenderit.
      </p>
      <div className="flex flex-col items-center justify-center">
        <JobCard title="PRODUCTEUR" description="PRODUCER" />
        <JobCard title="SCENARISTE" description="SCREENWRITER" />
        <JobCard title="DOUBLAGE" description="DUBBING" />
        <JobCard title="CADREUR" description="CAMERA OPERATOR" />
        <JobCard title="PROJECTIONNISTE" description="PROJECTIONIST" />
        <JobCard title="REGISSEUR" description="LOCATION MANAGER" />
        <JobCard title="PERCHISTE" description="BOOM OPERATOR" />
        <JobCard title="CASCADEUR" description="STUNTMAN" />
        <JobCard title="BRUITEUR" description="FOLEY" />
      </div>
      <div className="flex flex-col items-center">
        <NameCard title="JAY D. ROTH" />
        <NameCard title="TAYLOR HACKFORD" />
        <NameCard title="STAN MCCOY" />
        <NameCard title="JEAN-NOËL TRONC" />
        <NameCard title="LOUIS DIRINGER" />
        <NameCard title="HOWARD A. RODMAN" />
        <NameCard title="MICHAEL MANN" />
        <NameCard title="ANDREA BERLOFF" />
        <NameCard title="CHARLES RIVKIN" />
      </div>
      <div className="flex flex-col items-center mt-8">
        <button className="font-oswald font-light bg-[#1F1F1E] text-white w-[250px] py-4 border border-white text-lg hover:bg-white hover:text-black hover:shadow-md transition duration-300 ease-in-out">
          QUI SOMMES-NOUS?
        </button>
      </div>
    </section>
  );
};

export default Jobs;
