"use client";
import React, { useState } from "react";
import { MdOutlineAddIcCall, MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const InfoBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-[#525E75]">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-between items-center">
          {/* Phone */}
          <a
            href="tel:+911234567890"
            className="flex gap-2 items-center text-white hover:text-gray-200 transition-colors"
          >
            <MdOutlineAddIcCall size={18} />
            <span className="text-sm font-medium tracking-wide">
              +91 1234567890
            </span>
          </a>

          {/* Social Icons - Center */}
          <div className="flex gap-3 items-center">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaFacebookSquare size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/kurja-law/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <BsLinkedin size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <BsInstagram size={18} />
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:info@example.com"
              className="flex gap-2 items-center text-white hover:text-gray-200 transition-colors"
            >
              <MdOutlineMail size={18} />
              <span className="text-sm font-medium tracking-wide">
                info@example.com
              </span>
            </a>
            <button
              onClick={() => setVisible(false)}
              className="ml-4 text-white/80 hover:text-white transition-all hover:rotate-90 duration-300 ease-in-out cursor-pointer"
              aria-label="Close bar"
            >
              <MdClose size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex sm:hidden justify-between items-center">
          {/* Phone */}
          <a
            href="tel:+911234567890"
            className="flex gap-1.5 items-center text-white"
          >
            <MdOutlineAddIcCall size={16} />
            <span className="text-xs font-medium">+91 1234567890</span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-2.5 items-center">
            <a href="#" aria-label="Facebook" className="text-white">
              <FaFacebookSquare size={17} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white">
              <BsLinkedin size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white">
              <BsInstagram size={16} />
            </a>
          </div>

          {/* Mail icon only on mobile */}
          <a href="mailto:info@example.com" className="text-white">
            <MdOutlineMail size={17} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
