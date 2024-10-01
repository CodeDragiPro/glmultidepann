import React from "react";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Import des icônes de react-icons

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-gray-100" id="contact">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">CONTACT</h1>

      {/* Container for the two sections */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Contact Information */}
        <div className="lg:w-1/2 bg-teal-700 text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">INFORMATIONS DE CONTACT</h2>
          <p className="mb-6 text-sm">
            Pour toute question ou demande, n’hésitez pas à nous contacter.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FiPhone className="text-white text-2xl" />
              <span className="ml-4 text-lg">00.00.00.00.00</span>
            </li>
            <li className="flex items-center">
              <FiMail className="text-white text-2xl" />
              <span className="ml-4 text-lg">blablablablabla@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FiMapPin className="text-white text-2xl" />
              <span className="ml-4 text-lg">7 rue machinchouette, 76700 Gonfreville l’Orcher</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-4 text-teal-700">NOUS CONTACTER</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="John"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="JohnDoe@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Objet</label>
              <input
                type="text"
                id="subject"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="Devis"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="5"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                placeholder="Entrez votre message ici..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-800 transition duration-200"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;