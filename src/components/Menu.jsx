import React from "react";
import { useLocation } from "react-router-dom"; // Importer useLocation pour obtenir la route actuelle
import { Link } from "react-router-dom";
const Menu = () => {
  const location = useLocation(); // Obtenir l'emplacement actuel

  // Vérifier si l'URL actuelle est /admin ou /login
  const isAdminOrLoginPage =
    location.pathname === "/admin" || location.pathname === "/login";

  return (
    <ul className="hidden md:flex space-x-8 items-center justify-center text-white text-lg">
      {isAdminOrLoginPage ? ( // Si sur /admin ou /login, afficher seulement Accueil
        <li>
          <Link to="/">Accueil</Link>
        </li>
      ) : (
        <>
          <Link to="/">Accueil</Link>

          <li>
            <a href="#notremission">Notre Mission</a>
          </li>
          <li>
            <a href="#story">Story</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#testimonials">Témoignages</a>
          </li>
        </>
      )}
    </ul>
  );
};

export default Menu;
