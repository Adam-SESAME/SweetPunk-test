import React from "react";

interface JobCardProps {
  title: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h2 className="title font-oswald h-[100px] xl:h-[160px]">
        {title}
        <span className="outer">
          <span className="inner h-[100px] xl:h-[160px]">{title}</span>
        </span>
      </h2>
      <p className="text-[24px] md:text-[16px] xl:text-[32px] text-white text-center font-bold font-oswald">
        {description}
      </p>
    </div>
  );
};

export default JobCard;
