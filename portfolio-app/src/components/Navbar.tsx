import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full py-4 bg-gray-200 text-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex justify-center space-x-16 text-lg">
        <a href="#work-experience" className="px-8 border-b-2 border-transparent hover:border-gray-700 font-bold font-['Anonymous_Pro']">Work Experience</a>
        <a href="#hobbies-interests" className="px-8 border-b-2 border-transparent hover:border-gray-700 font-bold font-['Anonymous_Pro']">Hobbies & Interests</a>
        <a href="#contact" className="px-8 border-b-2 border-transparent hover:border-gray-700 font-bold font-['Anonymous_Pro']">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;