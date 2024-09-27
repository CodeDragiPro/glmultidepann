import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggle} className="z-50 text-white">
        <FaBars className='w-6 h-6 md:w-8 md:h-8'/>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-start space-y-4 text-white p-4">
          <button onClick={toggle} className="self-end text-white">
            <FaTimes className='w-6 h-6 md:w-8 md:h-8' />
          </button>
          <ul className="flex flex-col items-center justify-center w-full h-full space-y-4 text-lg">
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
