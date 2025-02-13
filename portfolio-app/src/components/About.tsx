import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="pt-40 pb-10 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-glaucous mb-4 font-['Anonymous_Pro']">
        Hi, my name is Nathan Fassler.
      </h1>
      <p className="text-lg py-5 leading-relaxed">
        I am a Computer Science student with a passion for technology and science. I have experience in C/C++ and HTML/CSS. I am currently learning React and TailwindCSS, which is what this site is built with. My next goal is to learn about databases and machine learning, and create a project that uses both.
      </p>
    </section>
  );
};

export default About;