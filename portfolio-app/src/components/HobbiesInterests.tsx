import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";
import Job1Image from "../assets/Job1.png";
import PC from "../assets/PC.jpg";
import Space from "../assets/Space.jpg";

const HobbiesInterests: React.FC = () => {
    return (
        <section id="hobbies-interests" className="py-20 max-w-6xl mx-auto">
        <SectionHeader title="Hobbies & Interests" />
    
        {/* Hobbies & Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
            title="PC Hardware & Building"
            description="I enjoy learning about PC hardware, especially CPU and GPU architecture. I also enjoy building PCs—mine is like the Ship of Theseus."
            imageUrl={PC}
            linkUrl="https://www.youtube.com/@LinusTechTips"
            />
            <InfoCard
            title="Space"
            description="I am facinated by space, and follow the latest news on astronomy, space exploration, and rocket launches."
            imageUrl={Space}
            linkUrl="https://www.space.com/"
            />
            <InfoCard
            title="Hobby 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus rhoncus justo."
            imageUrl={Job1Image}
            linkUrl="https://example.com/job1"
            />
            <InfoCard
            title="Hobby 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus rhoncus justo."
            imageUrl={Job1Image}
            linkUrl="https://example.com/job1"
            />
        </div>
        </section>
    );
    }
    export default HobbiesInterests;