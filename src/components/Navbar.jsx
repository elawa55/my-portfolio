import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white backdrop-blur-md bg-black/10"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        <a href="#home" className="text-4xl font-bold italic text-white">
          Portfolio
        </a>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-8 h-8 text-white" />
        </button>

        <nav className="hidden md:flex items-center space-x-7">
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-purple-300 text-lg transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex text-white border-2 border-purple-500 py-2 px-4 focus:outline-none hover:bg-purple-800 rounded-full text-lg transition-all duration-300"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-white hover:text-gray-300 text-xl"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="inline-flex text-white border-2 border-white py-2 px-4 focus:outline-none hover:bg-purple-800 rounded-full text-lg"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
