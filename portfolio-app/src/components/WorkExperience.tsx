import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="py-20 max-w-6xl mx-auto">
      <SectionHeader title="Work Experience" />

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Job 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mauris porta."
          imageUrl="https://via.placeholder.com/300x200"
        />
        <InfoCard
          title="Job 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus rhoncus justo."
          imageUrl="https://via.placeholder.com/300x200"
        />
      </div>
    </section>
  );
};

export default WorkExperience;
