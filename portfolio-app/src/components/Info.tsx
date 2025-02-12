import React from "react";
import SectionHeader from "./SectionHeader";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Info: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <SectionHeader title="Contact" />
      
      <div className="flex justify-center space-x-8 text-lg">
        {/* Email */}
        <a href="mailto:your-email@example.com" className="flex items-center space-x-2 text-blue-600 hover:underline">
          <FaEnvelope className="text-2xl" />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
           className="flex items-center space-x-2 text-blue-600 hover:underline">
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"
           className="flex items-center space-x-2 text-blue-600 hover:underline">
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Info;
