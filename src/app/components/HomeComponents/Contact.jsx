"use client";
import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzFiev8cJlOqkL-OmKAL8qc2m3MzamB9lB7uYc0MXolQk6lb2zmSKYBOF0ZGwBTl50/exec",
        {
          method: "POST",
          body: JSON.stringify(fromData),
        },
      );

      const data = await res.json();
      if (data.status == "success") {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="max-w-full w-full py-14 px-4 bg-[#F9F6F2]">
      <div className="max-w-7xl mx-auto relative">
        {/* image background
        <div className="h-52 w-44 absolute bottom-4 left-0">
          <img
            src="/justice-bg2.png"
            alt=""
            className="h-full w-full object-center object-cover opacity-30"
          />
        </div> */}
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#525E75] font-light mb-3">
            Feel Free To Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1610] mb-5">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#525E75]" />
            <span className="block w-2 h-2 rotate-45 bg-[#525E75]" />
            <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#525E75]" />
          </div>
        </div>

        {/* Two col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
          {/* Left — Form */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#525E75]" />
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#525E75] font-medium">
                Send a Message
              </p>
              <div className="flex-1 h-px bg-linear-to-r from-[#525E75]/30 to-transparent" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 flex-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#525E75] font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={fromData.name}
                    onChange={handleFormChange}
                    placeholder="Enter Your Name"
                    className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#d79f49] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#525E75] font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={fromData.email}
                    onChange={handleFormChange}
                    placeholder="Enter Your Email"
                    className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#d79f49] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#525E75] font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={fromData.phone}
                    onChange={handleFormChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Enter Your Phone Number"
                    className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#d79f49] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#525E75] font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={fromData.subject}
                    onChange={handleFormChange}
                    placeholder="Legal Consultation"
                    className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#d79f49] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs uppercase tracking-wider text-[#525E75] font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={fromData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about your legal matter..."
                  className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#d79f49] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400 resize-none flex-1 min-h-32"
                />
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  value={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  required
                  className="cursor-pointer"
                />
                <label className="text-xs tracking-wider text-[#525E75] font-medium">
                  I Understand This Does Not Create a Lawyer–Client Relationship
                </label>
              </div>

              <button
                type="submit"
                disabled={!checked}
                className={`mt-2 self-start px-8 py-3 bg-[#525E75] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#3f4d63] transition-colors duration-300 rounded-sm ${!checked ? "opacity-50 cursor-not-allowed" : " cursor-pointer"}`}
              >
                {loading && !checked ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right — Image same height as form */}
          <div className="hidden md:block bg-[#F9F6F2] p-10">
            <img
              src="/lawyer.jpeg"
              alt="Kurja Law Office"
              className="w-full h-full object-cover rounded-sm opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
