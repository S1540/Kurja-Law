"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { MdOutlineAddIcCall, MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PopupButton } from "react-calendly";
import CalendlyButton from "./CalendlyButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "About Us",
      href: "#about",
    },
    {
      id: 3,
      title: "Expertise",
      href: "/expertise",
    },
    {
      id: 4,
      title: "Blog",
      href: "/blog",
    },
  ];

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowX = "visible";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Placeholder */}
      <div
        style={{ height: isSticky ? headerHeight : 0 }}
        className="transition-all duration-300"
      />

      <div
        ref={headerRef}
        className={`w-full bg-[#F1DDBF] z-50 transition-all duration-500 
          ${
            isSticky
              ? "fixed top-0 left-0 shadow-[0_4px_20px_rgba(0,0,0,0.10)] border-b border-[#8765397a]"
              : "relative"
          }`}
        style={{
          animation: isSticky
            ? "slideDown 0.4s cubic-bezier(0.22,1,0.36,1) both"
            : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Mobile Menu — fixed,*/}
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
              <Link
                href={item.href}
                key={item.id}
                className={`text-[0.9rem] font-bold text-black py-3 border-b border-black/10
                transform transition-all duration-500
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {item.title}
              </Link>
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
            className={`flex gap-4 mt-6 transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
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
          <CalendlyButton />
        </div>

        {/* Header */}
        <header className="max-w-7xl mx-auto w-full px-4 py-2 flex items-center justify-between text-zinc-900 font-sans ">
          <div className=" h-13 w-13 md:h-16 md:w-16">
            <Link href={"/"}>
              <img
                src="/kurja-logo.png"
                alt=""
                className="object-cover h-full w-full"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center font-semibold">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <li className="relative group cursor-pointer pb-1">
                    {item.title}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 w-full bg-black
                    origin-left scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 ${pathname === item.href ? "scale-x-100" : ""}`}
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <CalendlyButton />
          </div>

          {/* Hamburger */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.25 md:hidden cursor-pointer z-50"
          >
            <span
              className={`w-6.5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
            />
            <span
              className={`w-6.5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`w-6.5 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
            />
          </div>
        </header>
      </div>

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0.6; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Header;
