import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className=" mt-4 sm:mt-0 self-start px-5 py-3 bg-[#525E75] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#3f4d63] transition-colors duration-300 rounded-sm cursor-pointer"
      >
        {name}
        {/* <span></span> */}
      </button>
    </div>
  );
};

export default Button;
