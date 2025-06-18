import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
          data-aos="fade-up"
        >
          Let&apos;s Work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can bring your ideas to life!
        </p>

        <div
          className="flex justify-center gap-6 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Email */}
          <a
            href="mailto:aliwaa678@gmail.com"
            aria-label="Send email to Aliwaa"
            className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500"
          >
            <Mail className="w-5 h-5 text-purple-400" />
            <span className="text-white">Email Me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aliwa-aliwa-3549a336a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500"
          >
            <Linkedin className="w-5 h-5 text-purple-400" />
            <span className="text-white">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/elawa55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="flex items-center gap-2 bg-gray-800 hover:bg-purple-600 px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500"
          >
            <Github className="w-5 h-5 text-purple-400" />
            <span className="text-white">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
