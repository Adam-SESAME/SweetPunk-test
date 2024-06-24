import React from "react";

interface JobCardProps {
  title: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h2 className="title font-oswald h-[100px]">
        {title}
        <span className="outer">
          <span className="inner h-[100px]">{title}</span>
        </span>
      </h2>
      <p className="text-white text-center font-bold font-oswald">
        {description}
      </p>
    </div>
  );
};

export default JobCard;
