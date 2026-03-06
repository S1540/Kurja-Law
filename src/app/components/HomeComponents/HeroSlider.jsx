"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../Button";
import Button2 from "../Button2";

export default function HeroSlider() {
  const [desOpen, setDesOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const progressRef = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressRef.current) {
      progressRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  // first mount on disclaimer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDesOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (desOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [desOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setDesOpen(false), 600);
  };

  return (
    <>
      <style>{`
        /* ---------- Box slide-in from top ---------- */
        .disclaimer-box {
          transform: translateY(-40px);
          opacity: 0;
          transition:
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.55s ease;
        }
        .disclaimer-box.open {
          transform: translateY(0);
          opacity: 1;
        }

        /* ---------- Staggered children ---------- */
        .disclaimer-child {
          opacity: 0;
          transform: translateY(-18px);
          transition:
            opacity 0.5s ease,
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .disclaimer-box.open .disclaimer-child:nth-child(1)  { transition-delay: 0.15s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(2)  { transition-delay: 0.22s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(3)  { transition-delay: 0.29s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(4)  { transition-delay: 0.36s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(5)  { transition-delay: 0.43s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(6)  { transition-delay: 0.50s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(7)  { transition-delay: 0.57s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(8)  { transition-delay: 0.64s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(9)  { transition-delay: 0.71s; opacity: 1; transform: translateY(0); }
        .disclaimer-box.open .disclaimer-child:nth-child(10) { transition-delay: 0.78s; opacity: 1; transform: translateY(0); }
      `}</style>

      <section className="relative">
        {desOpen && (
          <div
            className={`disclaimer-box${visible ? " open" : ""} absolute max-w-7xl w-full left-1/2 -translate-x-1/2 top-4 bg-white p-8 rounded-lg shadow-2xl text-gray-950 z-40`}
          >
            <h2 className="disclaimer-child text-2xl font-semibold mb-4 text-center">
              Disclaimer
            </h2>
            <hr className="disclaimer-child" />
            <p className="disclaimer-child text-sm text-gray-800 my-4 leading-relaxed">
              The purpose of this website is solely to provide general
              information about{" "}
              <span className="font-semibold italic">Kurja Law</span> and its
              areas of practice. This website is not intended to solicit clients
              or to advertise legal services in any manner prohibited under the
              rules of the Bar Council of India or any other applicable laws.
            </p>

            <p className="disclaimer-child text-sm text-gray-800 mb-3 leading-relaxed">
              By accessing this website, the user acknowledges and confirms
              that:
            </p>

            <ul className="disclaimer-child list-decimal pl-5 text-sm text-gray-800 space-y-2 leading-relaxed">
              <li>
                The user is seeking information of their own accord and there
                has been no form of solicitation, advertisement, or inducement
                by Kurja Law or any of its members.
              </li>
              <li>
                The information provided on this website is for informational
                purposes only and does not constitute legal advice, opinion, or
                recommendation.
              </li>
              <li>
                Any transmission, receipt, or use of this website does not
                create a lawyer-client relationship between the user and Kurja
                Law.
              </li>
              <li>
                Kurja Law shall not be liable for any consequences arising from
                any action taken by the user relying on the information provided
                on this website.
              </li>
              <li>
                The contents of this website are the intellectual property of
                Kurja Law and are protected by applicable laws. No material from
                this website may be reproduced, distributed, or published
                without prior written consent.
              </li>
            </ul>

            <p className="disclaimer-child text-sm text-gray-800 mt-4 leading-relaxed">
              By continuing to browse this website, the user confirms that they
              have read and understood the above disclaimer and agree to its
              terms and conditions.
            </p>

            <div className="disclaimer-child flex gap-4 justify-center pt-6">
              <Button onClick={handleClose} name={"Accept"} />
              <Button2
                name={"Decline"}
                onClick={() => (window.location.href = "https://google.com")}
              />
            </div>
          </div>
        )}

        {/* Hero Slider with fixed height */}
        <div className="relative w-full h-[450px] md:h-[530px] overflow-hidden font-sans">
          {/* progress bar */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-300 z-20">
            <div
              ref={progressRef}
              className="h-full bg-[#525E75] transition-all duration-200"
              style={{ width: "0%" }}
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="/Slider-1.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/Slider-2.jpeg"
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/Slider-3.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/Slider-4.jpeg"
                className="w-full h-full object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
