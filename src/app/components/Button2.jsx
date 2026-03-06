import React from "react";

const Button2 = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={onClick} class="animated-button-2">
        <span>{name}</span>
        <span></span>
      </button>
    </div>
  );
};

export default Button2;
