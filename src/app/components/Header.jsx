"use client";
import React, { useState } from "react";
import Button from "./Button";
import { MdOutlineAddIcCall, MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About Us", "Expertise", "Blog"];

  return (
    <div className="w-full bg-[#F1DDBF]">
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[320px] bg-[#F1DDBF] z-50 shadow-[-8px_0_30px_rgba(0,0,0,0.1)]
        flex flex-col px-8 pt-10 pb-10 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`pb-6 transform transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "-translate-y-6 opacity-0"}`}
          style={{ transitionDelay: "130ms" }}
        >
          <h1 className="text-2xl font-bold text-black">Kurja Law</h1>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col">
          {navItems.map((item, i) => (
            <a
              key={item}
              className={`text-[0.9rem] font-bold text-black py-3 border-b border-black/10
      transform transition-all duration-500
      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 pt-5">
          <a
            href="mailto:info@unnityDev.com"
            className={`flex items-center gap-3 text-sm font-medium text-zinc-800 hover:text-zinc-500 transition ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            }`}
            style={{ transitionDelay: "580ms" }}
          >
            <MdOutlineMail size={18} />
            info@unnityDev.com
          </a>
          <a
            href="tel:+911234567890"
            className={`flex items-center gap-3 text-sm font-medium text-zinc-800 hover:text-zinc-500 transition ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            }`}
            style={{ transitionDelay: "630ms" }}
          >
            <MdOutlineAddIcCall size={18} />
            +91 1234567890
          </a>
        </div>

        {/* Social */}
        <div
          className={`flex gap-4 mt-6 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "750ms" }}
        >
          <a className="text-zinc-800 hover:text-blue-600 transition">
            <FaFacebookSquare size={22} />
          </a>
          <a className="text-zinc-800 hover:text-blue-500 transition">
            <BsLinkedin size={20} />
          </a>
          <a className="text-zinc-800 hover:text-pink-500 transition">
            <BsInstagram size={20} />
          </a>
        </div>

        {/* Button */}
        <div
          className={`mt-8 ${menuOpen ? "opacity-100 translate-y-6" : "-tramslate-y-6 opacity-0"}`}
          style={{ transitionDelay: "870ms" }}
        >
          <Button />
        </div>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-4 py-4 flex items-center justify-between text-zinc-900">
        {/* Logo */}
        <h1 className="text-2xl font-semibold uppercase">Kurja Law</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center font-semibold">
            {navItems.map((item) => (
              <li key={item} className="relative group cursor-pointer pb-1">
                {item}

                {/* underline animation */}
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-black
                  origin-left scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300"
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] md:hidden cursor-pointer z-[100]"
        >
          <span
            className={`w-[26px] h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-[26px] h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-[26px] h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
