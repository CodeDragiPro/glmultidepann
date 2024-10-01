import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import des icônes des réseaux sociaux
import Logo from "./Logo"; // Assurez-vous que le chemin est correct

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Logo />
        </div>

        {/* Menu Section */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition duration-200"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition duration-200"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-300 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons & Copyright Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="flex items-center justify-center">
          <p className="text-sm mt-4 text-center md:text-right">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.codedragi.fr"
              className="text-pink-500 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.codedragi.fr
            </a>
            . Tous droits réservés.
          </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;