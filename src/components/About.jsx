"use client";

import React from "react";
import { FaBriefcase, FaProjectDiagram, FaHeadset } from "react-icons/fa"; // icons

const ABOUT = () => {
  return (
    <section id="about" className="py-24 text-secondary">
      <div className="max-w-6xl mx-auto px-3 flex flex-col gap-12">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-primary">About</h2>
          <p className="text-gray-400  mt-2">My Introduction</p>
        </div>

        {/* Cards Section */}
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="bg-[#1b1b1c] hover:bg-[#2a2a2b] shadow-[0_0_15px_5px_rgba(255,255,255,0.15)] p-6 rounded-lg flex-1 max-w-xs text-center  transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
            <FaBriefcase className="text-3xl mx-auto mb-2 text-primary" />
            <p className="font-semibold text-primary text-2xl">Experience</p>
            <p className="text-white text-sm mt-1">5+ Years Working</p>
          </div>

          <div className=" p-6 rounded-lg flex-1 max-w-xs text-center  transition-transform duration-300 ease-in-out hover:-translate-y-2
          bg-[#1b1b1c] hover:bg-[#2a2a2b] shadow-[0_0_15px_5px_rgba(255,255,255,0.15)]">
            <FaProjectDiagram className="text-3xl mx-auto mb-2 text-primary" />
            <p className="font-semibold text-primary text-2xl">Completed</p>
            <p className="text-white text-sm mt-1">10+ Projects</p>
          </div>

          <div className=" p-6 rounded-lg flex-1 max-w-xs text-center  transition-transform duration-300 ease-in-out hover:-translate-y-2
          bg-[#1b1b1c] hover:bg-[#2a2a2b] shadow-[0_0_15px_5px_rgba(255,255,255,0.15)]">
            <FaHeadset className="text-3xl mx-auto mb-2 text-primary" />
            <p className="font-semibold text-primary text-2xl">Support</p>
            <p className="text-white text-sm mt-1">Online 24/7</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto tracking-widest">
          Proficient in React.js, Next.js, Redux, Node.js, and Docker. I build scalable, high-performance applications. Skilled in Prisma, Socket.IO, and Kubernetes, with expertise in MongoDB, PostgreSQL, and CI/CD pipelines. I design interactive real-time systems and impactful solutions.
        </p>

        {/* Centered Download Resume Button */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-white text-black hover:text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-md"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default ABOUT;