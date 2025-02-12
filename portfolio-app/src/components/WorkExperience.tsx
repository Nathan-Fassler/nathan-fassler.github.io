import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";

import Job1Image from "../assets/Job1.png";
import Job2Image from "../assets/Job2.png";
import Pizza from "../assets/Pizza.jpg"
import Warehouse from "../assets/Warehouse.jpg"

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="py-20 max-w-6xl mx-auto">
      <SectionHeader title="Work Experience" />

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Boston Pizza"
          description="I learned how to prioritize tasks, work under pressure, and collaborate in a team environment."
          imageUrl={Pizza}
          linkUrl="https://bostonpizza.com/en/index.html"
        />
        <InfoCard
          title="Best Buy Warehouse"
          description="I learned the importance of structural operational workflows in improving efficiency."
          imageUrl={Warehouse}
          linkUrl="https://www.bestbuy.ca/en-ca"
        />
      </div>
    </section>
  );
};

export default WorkExperience;