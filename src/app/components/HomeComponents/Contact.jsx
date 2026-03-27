"use client";
import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzFiev8cJlOqkL-OmKAL8qc2m3MzamB9lB7uYc0MXolQk6lb2zmSKYBOF0ZGwBTl50/exec",
        {
          method: "POST",
          body: JSON.stringify(fromData),
        },
      );
      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
        setChecked(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          />

          {/* Modal */}
          <div className="relative z-10 bg-white w-full max-w-md mx-auto rounded-sm shadow-2xl overflow-hidden">
            {/* Top gold line */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#525E75] to-transparent" />

            {/* Close btn */}
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200 text-sm font-semibold"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex flex-col items-center gap-5 px-8 py-10 text-center">
              {/* Check icon */}
              <div className="w-16 h-16 rounded-full bg-[#525E75]/10 border border-[#525E75]/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#525E75"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#525E75]/40" />
                <span className="block w-1 h-1 rotate-45 bg-[#525E75]/40" />
                <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#525E75]/40" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#525E75] font-medium">
                  Message Received
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1a1610]">
                  Thank You for Contacting Us
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mt-1">
                  Your response has been submitted. Our team will connect with
                  you shortly.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#525E75]/40" />
                <span className="block w-1 h-1 rotate-45 bg-[#525E75]/40" />
                <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#525E75]/40" />
              </div>

              {/* Close button */}
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-2.5 bg-[#525E75] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#3f4d63] transition-colors duration-300 rounded-sm"
              >
                Close
              </button>
            </div>

            {/* Bottom gold line */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#525E75] to-transparent" />
          </div>
        </div>
      )}

      <section
        id="contact"
        className="max-w-full w-full py-14 px-4 bg-[#F9F6F2]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#525E75] font-light mb-3">
              Feel Free To Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1610] mb-5">
              Contact Us
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#525E75]" />
              <span className="block w-2 h-2 rotate-45 bg-[#525E75]" />
              <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#525E75]" />
            </div>
          </div>

          {/* Two col layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
            {/* Left — Form */}
            <div className="flex flex-col order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#525E75]" />
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#525E75] font-medium">
                  Send a Message
                </p>
                <div className="flex-1 h-px bg-gradient-to-r from-[#525E75]/30 to-transparent" />
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
                      className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#525E75] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
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
                      className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#525E75] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
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
                      className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#525E75] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
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
                      className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#525E75] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400"
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
                    className="px-3 py-2.5 text-sm border border-gray-400 bg-white outline-none focus:border-[#525E75] transition-colors duration-300 rounded-sm text-gray-700 placeholder:text-gray-400 resize-none flex-1 min-h-32"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    required
                    className="cursor-pointer mt-0.5"
                  />
                  <label
                    htmlFor="agreement"
                    className="text-xs tracking-wider text-[#525E75] font-medium leading-relaxed cursor-pointer"
                  >
                    I Understand This Does Not Create a Lawyer–Client
                    Relationship
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!checked || loading}
                  className={`mt-2 self-start px-8 py-3 bg-[#525E75] text-white text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-sm
                    ${!checked || loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3f4d63] cursor-pointer"}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right — Image */}
            <div className="hidden order-1 md:block bg-[#F9F6F2] p-10">
              <img
                src="/justice-bg2.png"
                alt="Kurja Law Office"
                className="w-full h-full object-cover rounded-sm scale-110 opacity-80 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
