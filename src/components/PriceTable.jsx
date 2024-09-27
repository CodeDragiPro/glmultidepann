import React from 'react';

const PriceTable = ({ section, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-teal-700 font-semibold text-center">{section.toUpperCase()}</h3>
      <div className="">
        <p className="px-4 py-2 rounded-full text-center">Lorem ipsum dolor sit amet</p>
        <p className="bg-gray-200 px-4 py-2 rounded-full text-center">Lorem ipsum dolor sit amet</p>
        <p className="px-4 py-2 rounded-full text-center">Lorem ipsum dolor sit amet</p>
        <p className="bg-gray-200 px-4 py-2 rounded-full text-center">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default PriceTable;
