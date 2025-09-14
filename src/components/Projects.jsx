import React from "react";

function Projects() {
  const projects = [
    {
      title: "EduTrack - Powering the Future of Digital Classrooms",
      description:
        "A platform designed to streamline digital learning, enhance classroom engagement, and simplify education management for teachers and students.",
      tech: "React.js, Node.js, MongoDB, Tailwind CSS",
      link: "https://github.com/Supriya4530/-EduTrack-Powering-the-Future-of-Digital-Classrooms",
    },
    {
      title: "PassOP - Your Own Password Manager",
      description:
        "A secure password management application that encrypts and stores user credentials safely, providing an easy-to-use interface for users.",
      tech: "React.js, JavaScript, LocalStorage",
      link: "https://github.com/Supriya4530/PassOP-Your-Own-Password-Manager",
    },
    {
      title: "Scholarly API",
      description:
        "A RESTful API providing academic data and research information, making it easy to integrate scholarly resources into apps and platforms.",
      tech: "Node.js, Express.js, MongoDB",
      link: "https://github.com/Supriya4530/Scholarly-API",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech:</strong> {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

