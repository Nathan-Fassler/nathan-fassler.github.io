import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageUrl, linkUrl, altText }) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-lightblue p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-200"
    >
      <img src={imageUrl} alt={altText} className="w-full h-80 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold font-['Anonymous_Pro']">{title}</h3>
      <p className="text-sm">{description}</p>
    </a>
  );
};

export default InfoCard;