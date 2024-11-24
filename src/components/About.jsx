import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-white px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-serif text-white mb-8">About Me</h2>
            
            <p className="text-xl text-white/80 max-w-2xl">
              I'm a passionate software developer with experience building impactful solutions 
              across web, mobile and cloud platforms. My focus is on creating elegant, 
              user-centric applications that solve real-world problems!
            </p>

            <p className="text-xl text-white/80 max-w-2xl">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source, or mentoring other developers.
            </p>

            <p className="text-xl text-white/80 max-w-2xl">
              I have a strong interest in day trading in the stock market and am particularly passionate about developing AI-powered tools. 
              By integrating these tools with key indicators, I aim to enhance decision-making and improve trading outcomes!
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
              <li>MS Computer Science at University of Southern California</li>
              <li>BS Computer Science at Worcester Polytechnic Institute</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <ul className="space-y-4 text-white/80">
              <li>CEO & Co-founder @ JimooSoftware</li>
              <li>Software Engineer Intern@ Amazon</li>
              <li>Software Engineer @ Joblogic-X</li>
              <li>Software Developer @ ASSISTments</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
            <ul className="space-y-4 text-white/80">
              <li>CalBite - AI-powered iOS Fine Dining App</li>
              <li>ASIN Forecast Portal - Amazon Fresh Sales Data Web App</li>
              <li>Smart Trip - Travel Planning Web App</li>
              <li>Similar But Not the Same - Math problems recommendation system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;