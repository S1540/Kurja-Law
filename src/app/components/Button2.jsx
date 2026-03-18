import React from "react";

const Button2 = ({ name, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="mt-4 sm:mt-0 self-start px-5 py-3 bg-[#cf1625] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#3f4d63] transition-colors duration-300 rounded-sm cursor-pointer"
      >
        <span>{name}</span>
        <span></span>
      </button>
    </div>
  );
};

export default Button2;
