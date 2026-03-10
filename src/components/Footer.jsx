"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-secondary border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Name */}
        <div className="text-lg font-semibold text-white">
          Shumin Esha
        </div>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#education" className="hover:text-primary transition">Education</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs border-t border-gray-800 py-4">
        © {new Date().getFullYear()} Shumin Esha. All rights reserved.
      </div>
    </footer>
  );
}