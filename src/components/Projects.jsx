import React from "react";

function Projects() {
  const projectList = [
    { name: "Project 1", description: "Brief description of project 1", demo: "#", code: "#" },
    { name: "Project 2", description: "Brief description of project 2", demo: "#", code: "#" },
  ];

  return (
    <section className="py-16 bg-gray-800 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <a href={project.demo} className="text-blue-400">View Demo</a> | 
            <a href={project.code} className="text-blue-400">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;