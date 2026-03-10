"use client";

const timeline = [
  {
    title: "B.Sc in Computer Science & Engineering",
    subtitle: "Military Institute of Science and Technology (MIST)",
    details: "Focused on software development, data structures, and AI projects.",
    date: "2021 – Dec 2025",
  },
  {
    title: "Internship / Project Experience",
    subtitle: "Your Company / Organization",
    details: "Worked on web development projects and data analytics.",
    date: "2023 – 2025",
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24  text-secondary" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-20">
          Education & Experience
        </h2>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white -translate-x-1/2"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-2 gap-12 items-start group"
              >

                {/* DOT (proper position) */}
                <div className="absolute left-1/2 top-2 -translate-x-[30px] w-4 h-4 rounded-full bg-white group-hover:bg-primary transition"></div>

                {/* DATE */}
                <div className="text-right text-3xl text-bold pr-10 text-secondary">
                  {item.date}
                </div>

                {/* CONTENT */}
                <div className="pl-5">
                  <div className="bg-[#39393b] p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.details}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}