import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-gray-600 text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-center space-x-16 text-lg">
        <a href="#work-experience" className="px-8 hover:underline">Work Experience</a>
        <a href="#hobbies" className="px-8 hover:underline">Hobbies</a>
        <a href="#contact" className="px-8 hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
