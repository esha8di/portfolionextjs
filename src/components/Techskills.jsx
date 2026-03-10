"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";

const frontendSkills = ["HTML", "CSS", "Tailwind", "JavaScript", "React", "NextJS"];
const backendSkills = ["NodeJS", "Express"];

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "NextJS", icon: <SiNextdotjs />, color: "text-white" },
  { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" }, // New MongoDB circle
];

const TechSkills = () => {
  return (
    <section id="techskills" className="pb-15 text-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold tracking-wide text-primary my-15">
          Tech Stacks
        </h2>

        {/* Skill Circles */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`w-20 h-20 flex items-center justify-center rounded-full
              border border-gray-700 text-lg ${skill.color}
              hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]
              transition duration-300`}
            >
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Two Boxes with Skill Lists */}
        <h2 className="font-bold text-4xl tracking-wide text-primary my-15">
          Skills
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 text-left">

          
          
          
          {/* Frontend Box */}
          <div className="px-10 py-4  rounded-lg border border-gray-600 text-lg font-medium">
            <strong>Frontend:</strong>
            <ul className="mt-2 text-[15px] list-disc list-inside space-y-1">
              {frontendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Backend Box */}
          <div className="px-10 py-4  rounded-lg border border-gray-600 text-lg font-medium">
            <strong>Backend:</strong>
            <ul className="mt-2 text-[15px] list-disc list-inside space-y-1">
              {backendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechSkills;