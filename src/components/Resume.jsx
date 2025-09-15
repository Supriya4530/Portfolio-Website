// src/components/Resume.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Resume & Socials</h2>

      {/* Download Resume Button */}
      <a
        href="/resume.pdf" // Add your resume file in public folder as resume.pdf
        download
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mb-8 transition duration-300"
      >
        Download Resume
      </a>

      {/* Social Links */}
      <div className="flex space-x-6 text-3xl text-gray-700">
        <a
          href="https://www.linkedin.com/in/supriya-sukale-6252b91a8/" // replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Supriya4530" // replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.youtube.com/channel/your-youtube" // replace with your YouTube
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition duration-300"
        >
            
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default Resume;

