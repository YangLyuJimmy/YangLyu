import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-white px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-serif text-white mb-8">About Me</h2>
            
            <p className="text-xl text-white/90 max-w-2xl">
              I'm a passionate software developer with experience building impactful solutions 
              across web, mobile and cloud platforms. My focus is on creating elegant, 
              user-centric applications that solve real problems.
            </p>

            <p className="text-xl text-white/80 max-w-2xl">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source, or mentoring other developers.
            </p>
          </div>

          <img 
            src={require("../images/person.jpeg")}
            alt="Profile" 
            className="w-64 h-64 rounded-full object-cover border-4 border-white/20"
          />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <ul className="space-y-4 text-white/80">
              <li>MS Computer Science</li>
              <li>BS Software Engineering</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <ul className="space-y-4 text-white/80">
              <li>Senior Developer @ Company</li>
              <li>Software Engineer @ Google</li>
              <li>Mobile Developer @ Projects</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
            <ul className="space-y-4 text-white/80">
              <li>Personal Website</li>
              <li>Mobile App</li>
              <li>Cloud Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;