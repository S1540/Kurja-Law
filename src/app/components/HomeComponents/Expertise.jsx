"use client";
import React, { useEffect, useRef, useState } from "react";
import expertise from "../../data/expertise.json";

const Expertise = () => {
  const [visible, setVisible] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          expertise.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => [...prev, i]);
            }, i * 150);
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
    <section ref={sectionRef} className="bg-[#F1DDBF] py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#8B6D38] font-light mb-3">
          Practice Areas
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1610] mb-5">
          Our Expertise
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#8B6D38]" />
          <span className="block w-2 h-2 rotate-45 bg-[#8B6D38]" />
          <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#8B6D38]" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {expertise.map((item, i) => (
          <div
            key={item.id}
            style={{
              transition:
                "opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, background-color 0.35s ease, border-color 0.35s ease",
            }}
            className={`
              group relative overflow-hidden
              bg-[#f9f6f2] border border-[#8B6D38]/20 rounded-xl cursor-pointer
              flex flex-col items-center justify-start gap-3 px-5 py-7
              hover:bg-[#2C1F0E] hover:border-[#2C1F0E]
              hover:shadow-[0_20px_50px_rgba(44,31,14,0.28)]
              ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
            `}
          >
            {/* Corner accent */}
            <span className="absolute top-0 right-0 w-14 h-14 bg-[#8B6D38]/5 rounded-bl-full group-hover:bg-white/5 transition-colors duration-300" />
            <span className="absolute bottom-0 left-0 w-10 h-10 bg-[#8B6D38]/5 rounded-tr-full group-hover:bg-white/5 transition-colors duration-300" />

            {/* Icon circle */}
            <div
              style={{
                transition:
                  "background-color 0.35s ease, border-color 0.35s ease",
              }}
              className="w-22 h-22 rounded-full bg-[#F8F2E8] border border-[#8B6D38]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-[#C9A84C]/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[1]"
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
              className="block h-px w-8 bg-[#8B6D38]/30 group-hover:w-12 group-hover:bg-[#C9A84C]"
            />

            {/* Sub-label */}
            <p
              style={{ transition: "color 0.35s ease" }}
              className="text-[10px] tracking-[0.2em] uppercase text-[#8B6D38]/55 group-hover:text-[#C9A84C]/75 font-light"
            >
              Legal Service
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
