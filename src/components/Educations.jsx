"use client";

const education = [
  {
    title: "B.Sc in Computer Science & Engineering",
    subtitle: "Military Institute of Science and Technology (MIST)",
    details: "CGPA: 3.08 • Focused on software development, data structures, and AI projects.",
    date: "2021 – Dec 2025",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Adamjee Cantonment College",
    details: "GPA: 5.00",
    date: "2018 – 2020",
  },
];

const experience = [
  {
    title: "Software Engineer Intern",
    subtitle: "BD Funnel Builder",
    details: "Worked with HTML, CSS, Tailwind CSS, JavaScript, and Vue. Used Git/GitHub for version control.",
    date: "Jan 2026 – Present",
  },
  {
    title: "Completed 6-Month Web Development Program",
    subtitle: "Programming Hero by Jankar Mahbub",
    details: "Intensive hands-on training in web development covering HTML, CSS, Tailwind CSS, JavaScript, React JS and Next JS",
    date: "July 2025 – Dec 2025",
  },
  {
    title: "Intern (Software Testing)",
    subtitle: "Bangladesh Computer Council (BCC)",
    details: "Conducted manual and functional testing of web applications to ensure software quality.",
    date: "Jan 2023",
  },
];

export default function EducationExperienceTimeline() {
  return (
    <section id="education" className="py-24 text-secondary">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-20">
          Education & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Education Column */}
          <div className="relative space-y-16">
            {/* Column Title */}
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center md:text-left">
              Education
            </h3>

            {education.map((item, index) => (
              <div
                key={index}
                className="flex items-start relative group"
                data-aos="fade-up"
                data-aos-delay={index * 200} 
              >

                {/* Vertical line */}
                <div className="w-1 bg-black rounded-full h-full absolute left-0 top-0"></div>

                {/* Dot with thick border */}
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full border-4 border-black flex items-center justify-center transition-colors">
                  <div className="w-3 h-3 rounded-full bg-black group-hover:bg-primary transition-colors"></div>
                </div>

                {/* Card */}
                <div className="ml-10 bg-[#1b1b1c] p-6 rounded-lg shadow-md flex-1 max-w-xs text-left transition-colors duration-300 hover:bg-[#2a2a2b] w-full">
                  <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                  <p className="text-gray-500 text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Column */}
          <div className="relative space-y-16">
            {/* Column Title */}
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center md:text-left">
              Experience
            </h3>

            {experience.map((item, index) => (
              <div
                key={index}
                className="flex items-start relative group"
                data-aos="fade-up"
                data-aos-delay={index * 200} 
              >

                {/* Vertical line */}
                <div className="w-1 bg-black rounded-full h-full absolute left-0 top-0"></div>

                {/* Dot with thick border */}
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full border-4 border-black flex items-center justify-center transition-colors">
                  <div className="w-3 h-3 rounded-full bg-black group-hover:bg-primary transition-colors"></div>
                </div>

                {/* Card */}
                <div className="ml-10 bg-[#1b1b1c] p-6 rounded-lg shadow-md flex-1 max-w-xs text-left transition-colors duration-300 hover:bg-[#2a2a2b] w-full">
                  <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.subtitle}</p>
                  <p className="text-gray-500 text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}