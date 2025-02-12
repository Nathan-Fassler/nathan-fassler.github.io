import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default InfoCard;
