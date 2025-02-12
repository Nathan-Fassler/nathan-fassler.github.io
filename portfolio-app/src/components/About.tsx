import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hi, my name is Nathan Fassler.
      </h1>
      <p className="text-lg py-5 text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra
        mauris porta, convallis nibh eu, tempor neque. Vestibulum luctus
        rhoncus justo a tempus. Quisque elementum porttitor mauris ac
        vulputate. Donec sit amet justo ut nibh blandit vehicula. Ut nec ex.
      </p>
    </section>
  );
};

export default About;