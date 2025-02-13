import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 font-['Anonymous_Pro']">
        {title}
      </h2>
      <div className="w-20 h-1 bg-glaucous mx-auto mb-6"></div>
    </div>
  );
};

export default SectionHeader;