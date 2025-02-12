import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
      {title}
    </h1>
  );
};

export default SectionHeader;
