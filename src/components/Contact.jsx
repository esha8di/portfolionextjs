"use client";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT CARD */}
          <div className="bg-[#1b1b1c] shadow-[0_0_15px_5px_rgba(255,255,255,0.04)] p-10 rounded-2xl flex flex-col justify-between">

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800"
                alt="contact"
                className="w-full h-[260px] object-cover transition duration-500 hover:scale-110"
              />
            </div>

            {/* Intro */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-primary">
                Let's Work Together
              </h3>

              <p className="text-secondary mt-3">
                I'm open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-[50px] space-y-4">
              <p className="text-secondary">FIND WITH ME</p>

              <div className="flex gap-6">

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/YOUR_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center
                  bg-[#1b1b1c] hover:bg-[#2a2a2b]
                  rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <FaLinkedinIn className="text-white text-xl" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center
                  bg-[#1b1b1c] hover:bg-[#2a2a2b]
                  rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <FaGithub className="text-white text-xl" />
                </a>

                {/* Email */}
                <a
                  href="mailto:shuminnahar8di@gmail.com"
                  className="w-14 h-14 flex items-center justify-center
                  bg-[#1b1b1c] hover:bg-[#2a2a2b]
                  rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <FaEnvelope className="text-white text-xl" />
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1b1b1c] shadow-[0_0_15px_5px_rgba(255,255,255,0.04)] p-10 rounded-2xl flex items-center">

            <form className="w-full space-y-6">

              {/* First Name + Phone */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-secondary text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/20 outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-secondary text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/20 outline-none focus:border-white/40"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="block text-secondary text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/20 outline-none focus:border-white/40"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-secondary text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/20 outline-none focus:border-white/40"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-bold py-3 bg-white rounded-lg text-primary hover:bg-[#2a2a2b] transition"
              >
                Submit Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}