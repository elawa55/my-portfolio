import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          data-aos="fade-up"
        >
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate Developer & Designer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a full-stack developer with 5+ years of experience in creating
              web applications that are not only functional but also visually
              appealing. I specialize in React, Node.js, and modern web
              technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech started with a curiosity about how things work
              on the web. Today, I help businesses and individuals bring their
              digital ideas to life with clean code and intuitive design.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-4" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <h4 className="text-white font-semibold mb-2">
                Frontend Development
              </h4>
              <p className="text-gray-400 text-sm">
                React, Vue.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <h4 className="text-white font-semibold mb-2">
                Backend Development
              </h4>
              <p className="text-gray-400 text-sm">
                Node.js, Python, MongoDB, PostgreSQL
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <h4 className="text-white font-semibold mb-2">UI/UX Design</h4>
              <p className="text-gray-400 text-sm">
                Figma, Adobe XD, User Research, Prototyping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
