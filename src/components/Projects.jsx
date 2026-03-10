"use client";

const projects = [
  {
    title: "DropBlood",
    description:
      "Built a blood donation platform connecting donors and recipients with secure JWT authentication. Streamlined donation requests and management for efficient coordination.",
    tech: "MERN Stack, JWT Authentication",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=1200",
    github: "#",
    live: "#",
  },
  {
    title: "PetPaw",
    description:
      "Developed a pet adoption platform with features for browsing pets, food, and accessories. Designed responsive UI and smooth navigation.",
    tech: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200",
    github: "#",
    live: "#",
  },
  {
    title: "Hero App",
    description:
      "Created a dynamic React application using reusable components, state, and props. Implemented search and filter functionality.",
    tech: "React JS",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>

                <p className="text-sm text-blue-400">{project.tech}</p>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-500"
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