"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { GiEagleEmblem } from "react-icons/gi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button";
import Button2 from "../Button2";

const slides = [
  {
    img: "/Slider-1.png",
    tag: "Trusted Legal Counsel",
    h1: "Justice Starts Here",
    h2: "Your Case. Our Commitment.",
    p: "With years of courtroom experience and a client-first approach, we deliver legal solutions that protect what matters most to you.",
    btn: "EXPLORE OUR EXPERTISE",
  },
  {
    img: "/Slider-2.jpeg",
    tag: "Expert Representation",
    h1: "Comprehensive Legal Solutions",
    h2: "One Firm. Every Legal Need.",
    p: "From corporate disputes to personal legal matters — we bring sharp legal minds and proven strategies to every case we take on.",
    btn: "VIEW PRACTICE AREAS",
  },
  {
    img: "/Slider-3.png",
    tag: "Client First Approach",
    h1: "Your Legal Journey Begins Today",
    h2: "Bold Representation. Real Results.",
    p: "Don't face legal challenges alone. Our team is ready to listen, advise, and fight for the outcome you deserve — every step of the way.",
    btn: "BOOK CONSULTATION",
  },
  {
    img: "/Slider-4.jpeg",
    tag: "Confidential Consultation",
    h1: "Legal Help You Can Trust",
    h2: "Clarity in Complex Situations.",
    p: "Navigating the legal system can be overwhelming. Let our experts simplify the process and guide you toward the best possible outcome.",
    btn: "BOOK CONSULTATION",
  },
];

export default function HeroSlider() {
  const [desOpen, setDesOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const progressRef = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressRef.current) {
      progressRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimer");
    if (accepted) setDesOpen(false);
    else setDesOpen(true);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDesOpen(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = desOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [desOpen]);

  const handleClose = () => {
    localStorage.setItem("disclaimer", "true");
    setVisible(false);
    setTimeout(() => setDesOpen(false), 600);
  };

  return (
    <>
      <style>{`
        .disclaimer-box {
          transform: translateY(-40px);
          opacity: 0;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1), opacity 0.55s ease;
        }
        .disclaimer-box.open { transform: translateY(0); opacity: 1; }

        .disclaimer-child {
          opacity: 0;
          transform: translateY(-14px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .disclaimer-box.open .disclaimer-child:nth-child(1)  { transition-delay:0.15s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(2)  { transition-delay:0.22s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(3)  { transition-delay:0.29s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(4)  { transition-delay:0.36s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(5)  { transition-delay:0.43s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(6)  { transition-delay:0.50s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(7)  { transition-delay:0.57s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(8)  { transition-delay:0.64s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(9)  { transition-delay:0.71s; opacity:1; transform:translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(10) { transition-delay:0.78s; opacity:1; transform:translateY(0); }

        /* Light scrollbar */
        .disclaimer-scroll::-webkit-scrollbar { width: 4px; }
        .disclaimer-scroll::-webkit-scrollbar-track { background: #f5f0e8; }

        /* Slide animations */
        .swiper-slide-active .anim-badge {
          animation: fadeDown 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }
        .swiper-slide-active .anim-divider-top {
          animation: fadeDown 0.5s cubic-bezier(0.22,1,0.36,1) 0.2s both;
        }
        .swiper-slide-active .anim-h1 {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.25s both;
        }
        .swiper-slide-active .anim-h2 {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s both;
        }
        .swiper-slide-active .anim-divider-bot {
          animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.42s both;
        }
        .swiper-slide-active .anim-p {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s both;
        }

        @keyframes fadeDown {
          from { opacity:0; transform:translateY(-16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5) !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #c9a84c !important;
          width: 22px !important;
          border-radius: 4px !important;
        }
      `}</style>

      <section className="relative bg-[#ffffffd6]">
        {/* Disclaimer */}
        {desOpen && (
          <>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

            {/* Modal */}
            <div
              className={`disclaimer-box${visible ? " open" : ""}
                absolute max-w-2xl w-[calc(100%-2rem)]
                h-[82vh] md:h-[570px] lg:h-[510px]
                left-1/2 -translate-x-1/2 top-4
                bg-white border border-[#c9a84c]/30
                rounded-lg shadow-2xl z-20
                flex flex-col overflow-hidden`}
            >
              {/* Top gold accent line */}
              <div className="w-full h-1 bg-linear-to-r from-transparent via-[#c9a84c] to-transparent shrink-0" />

              {/* Fixed Header */}
              <div className="disclaimer-child shrink-0 px-8 pt-5 pb-4 bg-white">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-[#8B6D38] text-xl">
                    <GiEagleEmblem />
                  </span>
                  <h2 className="text-2xl font-semibold text-[#2C1F0E] tracking-wide font-serif">
                    Disclaimer
                  </h2>
                  <span className="text-[#8B6D38] text-xl">
                    <GiEagleEmblem />
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="block flex-1 h-px bg-linear-to-r from-transparent to-[#c9a84c]/50" />
                  <span className="block w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
                  <span className="block flex-1 h-px bg-linear-to-l from-transparent to-[#c9a84c]/50" />
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="disclaimer-scroll flex-1 overflow-y-auto px-8 py-3 min-h-0">
                <p className="disclaimer-child text-sm text-gray-700 mb-4 leading-relaxed">
                  The purpose of this website is solely to provide general
                  information about{" "}
                  <span className="font-semibold italic text-[#2C1F0E]">
                    Kurja Law
                  </span>{" "}
                  and its areas of practice. This website is not intended to
                  solicit clients or to advertise legal services in any manner
                  prohibited under the rules of the Bar Council of India or any
                  other applicable laws.
                </p>

                <p className="disclaimer-child text-sm text-gray-700 mb-3 leading-relaxed">
                  By accessing this website, the user acknowledges and confirms
                  that:
                </p>

                <ul className="disclaimer-child list-decimal pl-5 text-sm text-gray-700 space-y-2.5 leading-relaxed mb-4">
                  <li>
                    The user is seeking information of their own accord and
                    there has been no form of solicitation, advertisement, or
                    inducement by Kurja Law or any of its members.
                  </li>
                  <li>
                    The information provided on this website is for
                    informational purposes only and does not constitute legal
                    advice, opinion, or recommendation.
                  </li>
                  <li>
                    Any transmission, receipt, or use of this website does not
                    create a lawyer-client relationship between the user and
                    Kurja Law.
                  </li>
                  <li>
                    Kurja Law shall not be liable for any consequences arising
                    from any action taken by the user relying on the information
                    provided on this website.
                  </li>
                  <li>
                    The contents of this website are the intellectual property
                    of Kurja Law and are protected by applicable laws. No
                    material from this website may be reproduced, distributed,
                    or published without prior written consent.
                  </li>
                </ul>

                <p className="disclaimer-child text-sm text-gray-700 leading-relaxed">
                  By continuing to browse this website, the user confirms that
                  they have read and understood the above disclaimer and agree
                  to its terms and conditions.
                </p>
              </div>

              {/* Fixed Footer — always at bottom */}
              <div className="disclaimer-child shrink-0 px-8 pt-4 pb-6 bg-white">
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent mb-5" />
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleClose} name={"Accept"} />
                  <Button2
                    name={"Decline"}
                    onClick={() =>
                      (window.location.href = "https://google.com")
                    }
                  />
                </div>
              </div>

              {/* Bottom gold accent line */}
              <div className="w-full h-1 bg-linear-to-r from-transparent via-[#c9a84c] to-transparent shrink-0" />
            </div>
          </>
        )}

        {/* Hero — Single Swiper */}
        <div className="relative w-full h-[530px] overflow-hidden font-sans">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20 z-20">
            <div
              ref={progressRef}
              className="h-full bg-[#c9a84c] transition-all duration-200"
              style={{ width: "0%" }}
            />
          </div>

          {/* Corner decorations */}
          {/* <div className="absolute top-2 left-5 w-10 h-10 border-t border-l border-[#c9a84c]/50 z-20 pointer-events-none" />
          <div className="absolute top-2 right-5 w-10 h-10 border-t border-r border-[#c9a84c]/50 z-20 pointer-events-none" />
          <div className="absolute bottom-2 left-5 w-10 h-10 border-b border-l border-[#c9a84c]/50 z-20 pointer-events-none" />
          <div className="absolute bottom-2 right-5 w-10 h-10 border-b border-r border-[#c9a84c]/50 z-20 pointer-events-none" /> */}

          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <img
                  src={slide.img}
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/65 flex items-center justify-center px-6">
                  <div className="max-w-4xl w-full flex flex-col items-center gap-4 text-center text-white">
                    <div className="anim-badge flex items-center gap-2 border border-[#8B6D38]/60 bg-[#8B6D38]/10 px-4 py-1 rounded-sm">
                      <span className="text-[#c9a84c] text-xs">
                        <GiEagleEmblem />
                      </span>
                      <span className="text-[#c9a84c] text-xs uppercase tracking-widest font-medium">
                        {slide.tag}
                      </span>
                      <span className="text-[#c9a84c] text-xs">
                        <GiEagleEmblem />
                      </span>
                    </div>

                    <div className="anim-divider-top flex items-center gap-3">
                      <span className="block w-12 h-px bg-linear-to-r from-transparent to-[#c9a84c]" />
                      <span className="block w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
                      <span className="block w-12 h-px bg-linear-to-l from-transparent to-[#c9a84c]" />
                    </div>

                    <h1 className="anim-h1 font-serif text-4xl md:text-6xl font-bold leading-tight tracking-wide drop-shadow-lg">
                      {slide.h1}
                    </h1>

                    <h2 className="anim-h2 font-serif text-2xl md:text-4xl font-semibold text-[#F1DDBF] leading-snug">
                      {slide.h2}
                    </h2>

                    <div className="anim-divider-bot flex items-center gap-3">
                      <span className="block w-16 h-px bg-linear-to-r from-transparent to-[#c9a84c]" />
                      <span className="block w-2 h-2 rotate-45 border border-[#c9a84c]" />
                      <span className="block w-16 h-px bg-linear-to-l from-transparent to-[#c9a84c]" />
                    </div>

                    <p className="anim-p text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans font-light tracking-wide">
                      {slide.p}
                    </p>
                    <Button name={`${slide.btn}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
