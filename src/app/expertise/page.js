"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Header from "../components/Header";
import InfoBar from "../components/InfoBar";
import expertise from "../data/expertise.json";
import Button from "../components/Button";
import Link from "next/link";
import Footer from "../components/Footer";

const page = () => {
  const [visible, setVisible] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          expertise.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => [...prev, i]);
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F9F6F2]">
      <InfoBar />
      <Header />

      {/* Hero Banner */}
      <div className="max-w-full w-full pb-10 md:pb-16">
        <div className="relative max-w-full w-full h-44">
          <img
            src="./Our Expertise-1.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2c1f0e8b] flex items-center justify-center">
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#8B6D38]/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#8B6D38]/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#8B6D38]/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B6D38]/50" />
            <div className="text-center">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B6D38] font-light mb-3">
                Practice Areas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#8B6D38] mb-5">
                Our Expertise
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#8B6D38]" />
                <span className="block w-2 h-2 rotate-45 bg-[#8B6D38]" />
                <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#8B6D38]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 md:pb-16 px-4"
      >
        {expertise?.map((item, i) => (
          <Link
            key={item.id}
            href={`/expertise/${item.slug}`}
            className={`
              ${i >= 8 ? "lg:col-span-2" : ""}
              group relative overflow-hidden
              bg-[#f9f6f2] border border-[#525E75]/20 rounded-xl cursor-pointer
              flex flex-col items-center justify-start gap-3 px-5 py-7
              hover:bg-[#525E75] hover:border-[#525E75]
              hover:shadow-[0_20px_50px_rgba(82,94,117,0.30)]
              ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
            `}
            style={{
              transition:
                "opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, background-color 0.35s ease, border-color 0.35s ease",
            }}
          >
            {/* Corner accent */}
            <span className="absolute top-0 right-0 w-14 h-14 bg-[#525E75]/5 rounded-bl-full group-hover:bg-white/8 transition-colors duration-300" />
            <span className="absolute bottom-0 left-0 w-10 h-10 bg-[#525E75]/5 rounded-tr-full group-hover:bg-white/8 transition-colors duration-300" />

            {/* Icon circle */}
            <div
              style={{
                transition:
                  "background-color 0.35s ease, border-color 0.35s ease",
              }}
              className="w-22 h-22 rounded-full bg-[#F8F2E8] border border-[#525E75]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:border-white/30"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[1.1]"
              />
            </div>

            {/* Title */}
            <h3
              style={{ transition: "color 0.35s ease" }}
              className="font-serif text-[15px] md:text-[17px] font-semibold text-[#1a1610] text-center leading-snug group-hover:text-white"
            >
              {item.title}
            </h3>

            {/* Animated divider */}
            <span
              style={{
                transition: "width 0.35s ease, background-color 0.35s ease",
              }}
              className="block h-px w-8 bg-[#525E75]/30 group-hover:w-12 group-hover:bg-white/60"
            />

            {/* Sub-label */}
            <p
              style={{ transition: "color 0.35s ease" }}
              className="text-[10px] tracking-[0.2em] uppercase text-[#525E75]/55 group-hover:text-white/70 font-light"
            >
              Legal Service
            </p>
          </Link>
        ))}
      </div>

      {/* Call to action */}
      <div className="max-w-full w-full pb-16">
        <div className="relative max-w-full w-full h-52 md:h-72">
          <img
            src="./Expertise-hero.jpg"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#2c1f0e8b]" />

          {/* Decorative corner borders */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#8B6D38]/50" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#8B6D38]/50" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#8B6D38]/50" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#8B6D38]/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2 md:gap-3 px-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8B6D38]/80 to-transparent" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide drop-shadow-lg">
              We Are Here To Help You
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8B6D38]/80 to-transparent" />
            <p className="font-sans text-base md:text-xl font-medium text-yellow-100/90 uppercase tracking-widest">
              Speak to Kurja Law Today.
            </p>
            <div className="py-3">
              <Button name={"Book Your Schedule"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
