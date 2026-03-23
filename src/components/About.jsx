"use client";

import React from "react";

const ABOUT = () => {
  return (
    <section id="about" className="py-24 text-secondary" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-3 flex flex-col gap-12">

        {/* Title */}
        <div className="text-center">
          <p className="text-secondary tracking-widest">Features</p>
          <h2 className="text-4xl font-bold text-primary mt-2">What I Do</h2>
        </div>

        {/* Cards Section */}
        <div className="flex gap-6 flex-wrap justify-center">
          
          {/* Card 1: Web Development */}
          <div className="bg-[#1b1b1c] shadow-md p-6 rounded-lg flex-1 max-w-xs text-center transition-colors duration-300 hover:bg-[#2a2a2b]">
            {/* SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            <p className="font-semibold text-primary text-2xl">Web Development</p>
            <p className="text-secondary text-sm mt-2">
              I build responsive and dynamic web applications using modern frameworks. Focused on clean code, performance, and user-friendly interfaces.
            </p>
          </div>

          {/* Card 2: Backend & APIs */}
          <div className="bg-[#1b1b1c] shadow-md p-6 rounded-lg flex-1 max-w-xs text-center transition-colors duration-300 hover:bg-[#2a2a2b]">
            {/* SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.05 6.05l-1.414-1.414m0 12.728l1.414-1.414M17.314 6.686l1.414-1.414" />
            </svg>
            <p className="font-semibold text-primary text-2xl">Backend & APIs</p>
            <p className="text-secondary text-sm mt-2">
              Designing backend systems and APIs. Ensure data consistency, security, and seamless integration between services.
            </p>
          </div>

          {/* Card 3: Data & Analytics */}
          <div className="bg-[#1b1b1c] shadow-md p-6 rounded-lg flex-1 max-w-xs text-center transition-colors duration-300 hover:bg-[#2a2a2b]">
            {/* SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 3v18M15 3v18" />
            </svg>
            <p className="font-semibold text-primary text-2xl">Data & Analytics</p>
            <p className="text-secondary text-sm mt-2">
              I analyze data to derive insights, visualize trends, and optimize performance using tools and frameworks to support smart decision-making.
            </p>
          </div>

        </div>

        {/* Download CV Button */}
        <div className="text-center mt-8">
          <a
            href="/Shumin_Nahar_Esha_CV.pdf"
            download
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 hover:text-primary transition-transform transform hover:scale-105 shadow-md"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default ABOUT;