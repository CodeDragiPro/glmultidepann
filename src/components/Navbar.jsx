import React, { useState, useEffect } from "react";
import { auth } from "../firebase"; // Assurez-vous que ce chemin est correct
import Logo from "./logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Écoutez les changements de l'état d'authentification
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    // Nettoyer l'abonnement
    return () => unsubscribe();
  }, []);

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
      auth.signOut().then(() => {
        navigate("/"); // Redirige vers la page d'accueil après déconnexion
      });
    } else {
      navigate("/login"); // Redirige vers la page de connexion
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-teal-900">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="flex-grow">
        <Menu />
      </div>
      <div className="flex items-center">
        <button
          onClick={handleAuthButtonClick}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded md:block hidden"
        >
          {isAuthenticated ? "Déconnexion" : "Connexion"}
        </button>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;