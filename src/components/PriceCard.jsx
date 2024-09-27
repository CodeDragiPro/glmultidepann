import React from 'react';

const PriceCard = ({ title, toggleVisibility }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center max-w-xs mx-auto md:max-w-m">
      <div className="bg-teal-700 text-white px-4 py-1 rounded-full text-lg font-semibold">
        {title}
      </div>

      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button
        onClick={toggleVisibility}
        className="bg-teal-700 text-white px-4 py-2 mt-4 rounded-full hover:bg-teal-800 text-sm"
      >
        VOIR PLUS
      </button>
    </div>
  );
};

export default PriceCard;
