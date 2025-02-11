import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-gray-200 text-black z-50">
      <div className="max-w-6xl mx-auto flex justify-center space-x-16 text-lg">
        <a href="#work-experience" className="px-8 border-b-2 border-transparent hover:border-black">Work Experience</a>
        <a href="#hobbies" className="px-8 border-b-2 border-transparent hover:border-black">Hobbies & Interests</a>
        <a href="#contact" className="px-8 border-b-2 border-transparent hover:border-black">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;