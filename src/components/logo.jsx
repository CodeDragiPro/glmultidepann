import React from 'react';
import logo from '../assets/logoblanc.png'

const Logo = () => {
  return <div className='flex space-x-2 w-auto'>
  <img src={logo} alt="Logo" className='w-10' />
  <h1 className='text-white'>GL MULTI DEPANN</h1>
  </div>
};

export default Logo;
