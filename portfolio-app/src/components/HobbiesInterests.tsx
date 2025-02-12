import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";
import Job1Image from "../assets/Job1.png";

const HobbiesInterests: React.FC = () => {
    return (
        <section id="hobbies-interests" className="py-20 max-w-6xl mx-auto">
        <SectionHeader title="Hobbies & Interests" />
    
        {/* Hobbies & Interests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
            title="Hobby 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra mauris porta."
            imageUrl={Job1Image}
            linkUrl="https://example.com/job1"
            />
            <InfoCard
            title="Hobby 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus rhoncus justo."
            imageUrl={Job1Image}
            linkUrl="https://example.com/job1"
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