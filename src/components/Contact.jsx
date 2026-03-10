"use client";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzdjezwp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast.success("Message sent successfully!", {
        style: {
          borderRadius: "8px",
          background: "#1b1b1c",
          color: "#fff",
        },
      });

      form.reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-24 text-white">
      
      {/* TOASTER */}
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="group bg-[#1b1b1c] shadow-md rounded-xl p-8 flex flex-col justify-between">

            <div className="overflow-hidden rounded-lg">
              <img
                src="/Esha-removebg-preview.png"
                alt="contact"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-primary">
                Let's Work Together
              </h3>

              <p className="text-gray-400 mt-3">
                I'm open to discussing new projects or opportunities.
              </p>
            </div>

          

          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1b1b1c] shadow-md rounded-xl p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  required
                  className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/10 outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/10 outline-none"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/10 outline-none"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full p-3 rounded-lg bg-[#191b1e] border border-white/10 outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-white text-black rounded-lg font-semibold cursor-pointer hover:text-primary transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}