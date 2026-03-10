"use client";

const projects = [
  {
    title: "DropBlood",
    description:
      "Built a blood donation platform connecting donors and recipients with secure JWT authentication. Streamlined donation requests and management for efficient coordination.",
    tech: "MERN Stack, JWT Authentication",
    image:
      "/blooddonation.png",
    github: "https://github.com/esha8di/Blood-Donation-App",
    live: "https://blooddonationappa11.netlify.app",
  },
  {
    title: "PetPaw",
    description:
      "Developed a pet adoption platform with features for browsing pets, food, and accessories. Designed responsive UI and smooth navigation.",
    tech: "MERN Stack",
    image:
      "/petpaw.png",
    github: "https://github.com/esha8di/petpaw-A10",
    live: "https://petcarea10.netlify.app",
  },
  {
    title: "Hero App",
    description:
      "Created a dynamic React application using reusable components, state, and props. Implemented search and filter functionality.",
    tech: "React JS",
    image:
      "/heroapp.png",
    github: "https://github.com/esha8di/heroAppOk",
    live: "https://heroappesha.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1b1b1c] rounded-xl shadow-md overflow-hidden w-full transition-all duration-300 hover:bg-[#2a2a2b]"
            >
              {/* Image container */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2 text-left">
                <h3 className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">{project.description}</p>

                <p className="text-sm text-secondary">{project.tech}</p>

                <div className="flex gap-4 pt-2">
                  <a
                   target="_blank"
                    href={project.github}
                    className="px-4 py-2 bg-[#2a2a2b] rounded-lg text-sm hover:bg-[#3a3a3a] transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                     target="_blank"
                    className="px-4 py-2 bg-[#ff014f] rounded-lg text-sm hover:bg-[#e60045] transition"
                  >
                    Live App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}