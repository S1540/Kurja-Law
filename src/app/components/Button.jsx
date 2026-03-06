import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={onClick} class="animated-button">
        <span>{name}</span>
        <span></span>
      </button>
    </div>
  );
};

export default Button;
