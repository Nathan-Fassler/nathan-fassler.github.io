import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover rounded-md mb-4" />
      <h3 className="text-lg text-gray-700 font-bold font-['Anonymous_Pro']">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </a>
  );
};

export default InfoCard;