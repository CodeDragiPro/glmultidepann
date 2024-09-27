import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 my-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-full bg-white hover:bg-[#f7f3ee] transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;