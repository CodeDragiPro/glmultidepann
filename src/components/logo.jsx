import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import logo from '../assets/logoblanc.png';

const Logo = () => {
  return (
    <Link to="/" className='flex space-x-2 w-auto'> {/* Utiliser Link pour rediriger vers l'accueil */}
      <img src={logo} alt="Logo" className='w-10' />
      <h1 className='text-white'>GL MULTI DEPANN</h1>
    </Link>
  );
};

export default Logo;