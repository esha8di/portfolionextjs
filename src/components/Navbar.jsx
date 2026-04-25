"use client";

import React, { useEffect, useState } from "react";
import NavLink from "./Navlink";

const Navbar = () => {

  const [activeSection, setActiveSection] = useState("banner");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // // Fallback: scrolled to very top → always HOME
    // const handleScroll = () => {
    //   if (window.scrollY < 50) setActiveSection("banner");
    // };
    // window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <div className="space-x-8">
        <NavLink href="#banner" active={activeSection === "banner"}>HOME</NavLink>
        <NavLink href="#about" active={activeSection === "about"}>ABOUT</NavLink>
        <NavLink href="#education" active={activeSection === "education"}>EDUCATION&EXPERIENCE</NavLink>
        <NavLink href="#techskills" active={activeSection === "techskills"}>TECHSKILLS</NavLink>
        <NavLink href="#projects" active={activeSection === "projects"}>PROJECTS</NavLink>
        <NavLink href="#contact" active={activeSection === "contact"}>CONTACT</NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar text-secondary shadow-sm h-[70px] z-50 fixed bg-[#1b1b1c] shadow-[0_0_15px_5px_rgba(255,255,255,0.04)] w-full">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#212223] text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full border-2 border-secondary"
              src="/Esha-removebg-preview.png"
              alt="Esha"
            />
            <h2 className="text-4xl">Esha</h2>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;