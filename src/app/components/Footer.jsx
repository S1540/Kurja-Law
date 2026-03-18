"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  MdOutlineAddIcCall,
  MdOutlineMail,
  MdLocationOn,
} from "react-icons/md";
import { FaAnglesUp } from "react-icons/fa6";
import expertise from "../data/expertise.json";
import Link from "next/link";

const Footer = () => {
  const QuickLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Expertise", path: "/expertise" },
    { id: 4, title: "Blog", path: "/blog" },
    { id: 5, title: "Careers", path: "/careers" },
    { id: 6, title: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#525E75] max-w-full w-full text-white relative">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-12 right-10 cursor-pointer "
      >
        <div className="h-10 w-10 bg-[#f1ddbf62] rounded-full flex items-center justify-center animate-bounce">
          <FaAnglesUp color="white" />
        </div>
      </div>
      {/* Main footer */}
      <div className="max-w-7xl w-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5">
          <img
            src="/kurja-logo.png"
            alt="Kurja Law"
            className="w-16 h-16 object-contain"
          />
          <div className="w-8 h-px bg-white/30" />
          <p className="text-sm text-white/70 leading-relaxed">
            At Kurja Law, we are more than just a law firm — we are your trusted
            legal partners, dedicated to guiding you through the complexities of
            law with clarity, compassion, and expertise.
          </p>
          <div>
            <p className="text-sm font-semibold tracking-widest text-white/50 mb-3">
              Follow Us
            </p>
            <a
              href="https://www.linkedin.com/company/kurja-law/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={22} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Col 2 — Expertise */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-white/50 mb-4">
            Our Expertise
          </h2>
          <div className="w-6 h-px bg-white/30 mb-4" />
          <ul className="flex flex-col gap-2.5">
            {expertise?.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/expertise/${item.slug}`}
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-white transition-all duration-300" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Links */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-white/50 mb-4">
            Quick Links
          </h2>
          <div className="w-6 h-px bg-white/30 mb-4" />
          <ul className="flex flex-col gap-2.5">
            {QuickLinks?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-white transition-all duration-300" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-white/50 mb-4">
            Contact Us
          </h2>
          <div className="w-6 h-px bg-white/30 mb-4" />
          <ul className="flex flex-col gap-4">
            {/* Phone */}
            <li>
              <a
                href="tel:+919654656822"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <MdOutlineAddIcCall
                  size={17}
                  className="mt-0.5 shrink-0 group-hover:text-white"
                />
                +91 9654656822
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:contact@kurjalaw.com"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <MdOutlineMail
                  size={17}
                  className="mt-0.5 shrink-0 group-hover:text-white"
                />
                contact@kurjalaw.com
              </a>
            </li>

            {/* Delhi Address */}
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MdLocationOn
                size={17}
                className="mt-0.5 shrink-0 text-white/50"
              />
              <span className="leading-relaxed">
                216, Second Floor, RG Complex - 2,
                <br />
                Prashant Vihar, Sector - 14,
                <br />
                Rohini, Delhi – 110085
              </span>
            </li>

            {/* Also at */}
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MdLocationOn
                size={17}
                className="mt-0.5 shrink-0 text-white/50"
              />
              <span className="leading-relaxed">
                E-48, 2nd Floor, Prashant Vihar,
                <br />
                New Delhi – 110085
              </span>
            </li>

            {/* Haryana */}
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MdLocationOn
                size={17}
                className="mt-0.5 shrink-0 text-white/50"
              />
              <span className="leading-relaxed">
                B-27A, Roman Court, Ansal Sushant City,
                <br />
                Kundli, Sonipat, Haryana – 131029
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kurja Law. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed with precision & purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
