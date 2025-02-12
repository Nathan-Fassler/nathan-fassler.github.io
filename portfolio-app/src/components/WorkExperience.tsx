import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";
import Job1Image from "../assets/Job1.png";
import Job2Image from "../assets/Job2.png";

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="py-20 max-w-6xl mx-auto">
      <SectionHeader title="Work Experience" />

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Job 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mauris porta."
          imageUrl={Job1Image}
        />
        <InfoCard
          title="Job 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus rhoncus justo."
          imageUrl={Job2Image}
        />
      </div>
    </section>
  );
};

export default WorkExperience;
