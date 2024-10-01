import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { auth } from '../firebase'; // Assurez-vous que ce chemin est correct
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, toggle, isAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtenir l'emplacement actuel

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
      auth.signOut().then(() => {
        navigate("/"); // Redirige vers la page d'accueil après déconnexion
        toggle(); // Ferme le menu
      });
    } else {
      navigate("/login"); // Redirige vers la page de connexion
      toggle(); // Ferme le menu
    }
  };

  const handleNavigation = (section) => {
    navigate(section); // Navigue vers la section
    toggle(); // Ferme le menu
  };

  // Vérifier si l'URL actuelle est /admin ou /login
  const isAdminOrLoginPage =
    location.pathname === "/admin" || location.pathname === "/login";

  return (
    <div className="md:hidden">
      <button onClick={toggle} className="z-50 text-white">
        <FaBars className='w-6 h-6 md:w-8 md:h-8' />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-start space-y-4 text-white p-4">
          <button onClick={toggle} className="self-end text-white">
            <FaTimes className='w-6 h-6 md:w-8 md:h-8' />
          </button>
          <ul className="flex flex-col items-center justify-center w-full h-full space-y-4 text-lg">
            {isAdminOrLoginPage ? ( // Si sur /admin ou /login, afficher seulement Accueil
              <li>
                <Link to="/" onClick={toggle}>Accueil</Link>
              </li>
            ) : (
              <>
                <li>
                <Link to="/" onClick={toggle}>Accueil</Link>
                </li>
                <li>
                  <a href="#notremission" onClick={toggle}>Notre Mission</a>
                </li>
                <li>
                  <a href="#story" onClick={toggle}>Story</a>
                </li>
                <li>
                  <a href="#contact" onClick={toggle}>Contact</a>
                </li>
                <li>
                  <a href="#testimonials" onClick={toggle}>Témoignages</a>
                </li>
              </>
            )}
            <li>
              <button
                onClick={handleAuthButtonClick}
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                {isAuthenticated ? "Déconnexion" : "Connexion"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;