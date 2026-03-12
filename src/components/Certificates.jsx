"use client";

const certificates = [
  {
    title: "Career Track Program in Data Analytics",
    organization: "Shikho Technologies Bangladesh Ltd.",
    date: "10 May 2023",
    image: "/dataanalytics.png",
  },
  {
    title: "Web Development With Programming Hero",
    organization: "Programming Hero",
    date: "16 Feb 2026",
    image: "/ph.png",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Certificates</h2>
            <p className="text-secondary">
              Here are some of the certificates I have earned through
              my learning journey. They showcase my dedication to
              mastering new skills and technologies.
            </p>

            
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2 group overflow-hidden rounded-md"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.organization}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}