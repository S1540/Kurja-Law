"use client";
import React, { useState } from "react";
import { GiInjustice } from "react-icons/gi";

const About = () => {
  const [expendAbout, setExpendAbout] = useState(false);

  const fullText = `Kurja is the regional name for the Demoiselle Crane, a migratory bird revered across parts of North and Western India, particularly in Rajasthan. Known for its grace, resilience, and extraordinary endurance, the Kurja undertakes one of the most demanding migratory journeys in the world, crossing vast deserts and mountain ranges with discipline and collective strength. In regional folklore, the Kurja is a symbol of trust, loyalty, commitment, and emotional intelligence. It is often associated with devotion and steadfastness — returning season after season with precision and purpose. The name Kurja reflects our philosophy of legal practice. Like the bird, we believe in navigating complex terrains with foresight and preparation. We approach each matter with resilience, strategic alignment, and unwavering commitment to our clients' objectives. Our work is grounded in discipline, persistence, and the ability to travel the full distance — from advisory and risk assessment to final adjudication — without losing sight of the larger goal. Kurja represents clarity in complexity, strength in adversity, and the assurance that no matter how challenging the journey, it will be undertaken with purpose and precision.`;

  const founderText = `Ishan Harlalka is a dispute resolution lawyer with experience in complex civil, commercial, regulatory, and intellectual property matters across diverse forums. He regularly appears before the Supreme Court of India, the Delhi High Court, specialist tribunals, national consumer fora, and district courts across Delhi & NCR. Before founding Kurja Law, Ishan served as a Senior Associate at a Delhi-based litigation practice, where he led teams, briefed senior counsel, and represented individuals, startups, MSMEs, FMCG companies, defence sector entities, pharmaceutical companies, and real estate developers. His practice spans civil and commercial litigation, domestic and international arbitration, intellectual property disputes and taxation litigation. He has advised and represented clients in arbitrations administered by institutions such as the Delhi International Arbitration Centre, the London Court of International Arbitration, and the Singapore International Arbitration Centre. His approach combines strategic clarity with commercial pragmatism, ensuring that legal solutions align with clients' long-term objectives. Beyond the courtroom, Ishan values balance and perspective. He enjoys playing football, is an avid reader, a music and theatre enthusiast, and spends his free time singing and learning musical instruments. At Kurja Law, he is committed to delivering clear, honest, and result-oriented counsel while building lasting client relationships founded on trust and transparency.`;

  return (
    <>
      <style>{`
        .about-text {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 3;
          max-height: 80px;
          transition: max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .about-text.expanded {
          -webkit-line-clamp: unset;
          max-height: 1000px;
        }
        .read-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0%;
          height: 1.5px;
          background-color: #525E75;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .read-btn:hover::after { width: 100%; }
      `}</style>

      <section
        id="about"
        className="bg-[#F9F6F2] text-black font-sans px-4 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#525E75] font-light mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1610] mb-5">
              About Us
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#525E75]" />
              <span className="block w-2 h-2 rotate-45 bg-[#525E75]" />
              <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#525E75]" />
            </div>
          </div>

          {/* Our Name Section */}
          <div className="mb-7 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#525E75]" />
              <span className="text-[#525E75]">
                <GiInjustice size={18} />
              </span>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#525E75] font-medium">
                Our Name
              </p>
              <div className="flex-1 h-px bg-gradient-to-r from-[#525E75]/40 to-transparent" />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2C1F0E] mb-4">
              The Demoiselle Crane
            </h3>

            <p
              className={`about-text text-sm md:text-base text-gray-600 leading-relaxed ${expendAbout ? "expanded" : ""}`}
            >
              {fullText}
            </p>

            <button
              onClick={() => setExpendAbout(!expendAbout)}
              className="read-btn relative mt-4 flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#525E75] transition-colors duration-300 hover:text-[#2C1F0E] pb-0.5 cursor-pointer"
            >
              <span>{expendAbout ? "Read Less" : "Read More"}</span>
              <span
                className={`transition-transform duration-300 text-sm ${expendAbout ? "-rotate-90" : "rotate-90"}`}
              >
                ›
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="items-center gap-4 mb-14 hidden md:flex">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#525E75]/20" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-[#525E75]/50" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#525E75]/20" />
          </div>

          {/* Our Founder Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
            {/* Left — founder text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#525E75]" />
                <span className="text-[#525E75]">
                  <GiInjustice size={18} />
                </span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#525E75] font-medium">
                  Our Founder
                </p>
                <div className="flex-1 h-px bg-linear-to-r from-[#525E75]/40 to-transparent" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2C1F0E] mb-1">
                Ishan Harlalka
              </h3>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#525E75]/70 font-light mb-5">
                Dispute Resolution Lawyer
              </p>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {founderText}
              </p>

              {/* Court tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Supreme Court",
                  "Delhi High Court",
                  "DIAC",
                  "LCIA",
                  "SIAC",
                ].map((court) => (
                  <span
                    key={court}
                    className="text-[10px] uppercase tracking-wider text-[#525E75] border border-[#525E75]/30 px-3 py-1 rounded-sm"
                  >
                    {court}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute hidden md:block -bottom-16 -left-3 w-14 h-14 border-b-2 border-l-2 border-[#525E75]/25 pointer-events-none z-0" />
                <div className="absolute hidden md:block -bottom-16 -right-3 w-14 h-14 border-b-2 border-r-2 border-[#525E75]/25 pointer-events-none z-0" />
                <div className="absolute hidden md:block top-10 -left-3 w-14 h-14 border-t-2 border-l-2 border-[#525E75]/25 pointer-events-none z-0" />
                <div className="absolute hidden md:block top-10 -right-3 w-14 h-14 border-t-2 border-r-2 border-[#525E75]/25 pointer-events-none z-0" />

                {/* Image */}
                <div className="relative top-6 md:top-12 z-10 overflow-hidden shadow-lg">
                  <img
                    src="/kurja-founder.png"
                    alt="Ishan Harlalka — Founder"
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#525E75]/60 to-transparent" />

                  {/* Name plate */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="border-l-2 border-white/60 pl-3">
                      <p className="font-serif text-sm font-semibold text-white">
                        Ishan Harlalka
                      </p>
                      <p className="text-[10px] tracking-widest uppercase text-white/70">
                        Founder, Kurja Law
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
