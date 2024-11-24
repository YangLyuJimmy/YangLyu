import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-600 via-purple-600 to-white px-20 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-7xl font-serif text-white">
            Hello, I'm Yang.
            <br />
            I'm a Software Engineer.
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl">
            I love to create impactful solutions at Amazon, ASSISTments, ReadyAI, Joblogic-X,
            and elsewhere.
          </p>

          <p className="text-xl text-white/80 max-w-2xl">
            I value clarity, empathy, and integrity above all else. These
            principles guide my approach to product building and life in general.
          </p>

          <div className="pt-4">
            <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/yang-lyu-171237166/" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6 mr-2" />
                LinkedIn
              </a>
              <a href="https://github.com/YangLyuJimmy" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors">
                <FaGithub className="w-6 h-6 mr-2" />
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Featured Work</h3>
            <div className="aspect-video bg-white/5 rounded-lg"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Latest Project</h3>
            <div className="aspect-video bg-white/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;