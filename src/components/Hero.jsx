// src/components/Hero.jsx
import React from "react";
import computerBg from "../assets/computer-bg.jpg"; // keep this if still in src/assets

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with fade-in animation */}
      <img
        src={computerBg}
        alt="Computer Background"
        className="absolute w-full h-full object-cover opacity-30 animate-bgFade"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Profile Photo from public folder */}
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover animate-float"
        />

        {/* Hero Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white animate-textFade">
          Hi, I'm Supriya Sukale
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 animate-textFade delay-200">
          Full Stack Web Developer | Java & React Enthusiast
        </p>
      </div>
    </section>
  );
};

export default Hero;






