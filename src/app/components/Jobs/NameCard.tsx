// TitleWithHighlight.tsx
import React from "react";

interface NameCardProps {
  title: string;
  additionalClasses?: string;
}

const NameCard: React.FC<NameCardProps> = ({ title, additionalClasses }) => {
  return (
    <h2 className={`title2 font-oswald ${additionalClasses}`}>
      {title}
      <span className="outer">
        <span className="inner">{title}</span>
      </span>
    </h2>
  );
};

export default NameCard;
