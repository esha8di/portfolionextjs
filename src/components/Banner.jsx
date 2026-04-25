"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Banner = () => {
  const titles = ["A PROFESSIONAL CODER", "A DEVELOPER"];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // typing letter by letter
          if (charIndex < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
          }
        } else {
          // deleting letter by letter
          if (charIndex > 0) {
            setDisplayedText(currentTitle.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    ); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <div id="banner" className="md:grid  grid-cols-2   pt-30 ">
      {/* banner text */}
      <div>
        {/* text */}
        <div className="mt-[20px]">
          <p className="text-secondary tracking-widest"></p>

          <h2 className="text-4xl font-bold mt-4 text-white">
            Hi, I'm <span className="text-[#ff014f]">SHUMIN NAHAR ESHA </span>
          </h2>

          <span className="block text-white text-4xl font-semibold mt-2">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>

          <p className="tracking-widest mt-4 text-secondary">I am a software developer passionate about building web applications that help people. My projects, like a blood donation platform and a pet adoption system, showcase my focus on creating practical, user-friendly solutions that make a real impact.</p>
        </div>

        {/* connect */}
        {/* Button above the social icons */}
        <div className="mt-[50px]">
          <a
            href="#contact"
             className="inline-block bg-white text-black hover:text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-md"
          >
            Contact Me
          </a>
        </div>

        {/* connect */}
        <div className="mt-[20px] space-y-4">
          <p className="text-secondary">FIND WITH ME</p>
          <div className="flex gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shumin-nahar-esha-38b78422a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center
 bg-[#1b1b1c] hover:bg-[#2a2a2b] rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/esha8di"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-xl shadow-md 
 bg-[#1b1b1c] hover:bg-[#2a2a2b] hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <FaGithub className="text-white text-xl" />
            </a>

            {/* Email */}
            <a
              href="mailto:shuminnahar8di@gmail.com"
              className="w-14 h-14 flex items-center justify-center
 bg-[#1b1b1c] hover:bg-[#2a2a2b] rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <FaEnvelope className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="relative md:flex justify-center items-end mt-10">
        {/* black card background */}
        {/* <div className="absolute bottom-0 h-[550px] w-[450px]   shadow-[0_0_15px_5px_rgba(255,255,255,0.15)] rounded-2xl"></div> */}

        {/* image */}
        <img
          src="/Esha-removebg-preview.png"
          alt="Esha"
          className="relative  z-10"
        />
      </div>
    </div>
  );
};

export default Banner;
