import React, { useState } from "react";
import Logo from "./logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-teal-900">
      {/* Conteneur pour le logo à gauche */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Conteneur central pour le menu */}
      <div className="flex-grow">
        <Menu />
      </div>

      {/* Mobile menu à droite */}
      <div className="flex-shrink-0">
        <MobileMenu isOpen={isOpen} toggle={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;
