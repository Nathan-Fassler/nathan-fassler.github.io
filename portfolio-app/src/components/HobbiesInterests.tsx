import React from "react";
import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";
import Job1Image from "../assets/Job1.png";
import PC from "../assets/PC.jpg";
import Space from "../assets/Space.jpg";
import Gym from "../assets/Gym.jpg";
import Book from "../assets/Book.jpg";

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
            altText="Person building a PC on a table"
            linkUrl="https://www.youtube.com/@LinusTechTips"
            />
            <InfoCard
            title="Space"
            description="I am facinated by space, and follow the latest news on astronomy, space exploration, and rocket launches."
            imageUrl={Space}
            altText="Earth with a galaxy in the background"
            linkUrl="https://www.space.com/"
            />
            <InfoCard
            title="Weightlifting"
            description="I have been weightlifting for over 5 years. I enjoy the physical and mental benefits of weightlifting."
            imageUrl={Gym}
            altText="Interior of a gym"
            linkUrl="https://www.youtube.com/@JeffNippard"
            />
            <InfoCard
            title="Reading"
            description="I started reading books during my childhood, and it's still one of my favourite pastimes. My favourite series is The Stormlight Archive."
            imageUrl={Book}
            altText="Book on a table with a cup of tea and glasses"
            linkUrl="https://en.wikipedia.org/wiki/The_Stormlight_Archive"
            />
        </div>
        </section>
    );
    }
    export default HobbiesInterests;