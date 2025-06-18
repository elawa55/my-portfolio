import React from "react";
import Navbar from "./Navbar";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Gradient */}
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2896] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl opacity-80"></div>

      <Navbar />

      <div className="container mx-auto px-6 pt-20 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="400">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elawa_55
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              I create exceptional digital experiences that combine beautiful
              design with robust functionality. Passionate about turning ideas
              into reality through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div
            className="flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              <span className="text-8xl">E_5</span>
         
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
