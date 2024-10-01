import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Import de l'icône d'étoile
import { listTestimonials, addTestimonial } from '../utils/firebaseUtils'; // Importer les fonctions nécessaires
import TestimonialModal from './TestimonialModal'; // Importer le nouveau composant

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]); // État pour les témoignages
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale
  const [name, setName] = useState(""); // État pour le nom
  const [comment, setComment] = useState(""); // État pour le commentaire
  const [rating, setRating] = useState(0); // État pour la note

  // Fonction pour charger les témoignages
  const fetchTestimonials = async () => {
    const testimonials = await listTestimonials();
    setTestimonialsData(testimonials);
  };

  useEffect(() => {
    fetchTestimonials(); // Récupérer les témoignages au chargement du composant
  }, []); // Ne pas dépendre de testimonialsData ici

  // Filtrer les témoignages pour afficher seulement ceux ayant entre 3 et 5 étoiles
  const filteredTestimonials = testimonialsData.filter(
    testimonial => testimonial.rating >= 3
  );

  // Limiter le nombre de témoignages affichés à 5
  const displayedTestimonials = filteredTestimonials.slice(0, 5);

  // Si aucun témoignage n'est disponible, afficher un message ou un loader
  if (displayedTestimonials.length === 0) {
    return <p className="text-center text-gray-600">Aucun témoignage à afficher...</p>;
  }

  const currentTestimonial = displayedTestimonials[currentTestimonialIndex];

  const handleSubmit = async () => {
    // On peut envoyer le témoignage même si la note est inférieure à 3
    if (name && comment) {
      await addTestimonial({ name, comment, rating });
      setName("");
      setComment("");
      setRating(0);
      setIsModalOpen(false); // Fermer la modale après l'envoi
      fetchTestimonials(); // Recharger les témoignages
    }
  };

  const handleDotClick = (index) => {
    setCurrentTestimonialIndex(index); // Mettre à jour l'index du témoignage courant
  };

  return (
    <section className="bg-gray-100 py-12 px-4" id="testimonials">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">TÉMOIGNAGES</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto transition-transform duration-300 transform hover:scale-105 text-center">
        <h3 className="text-xl font-semibold text-teal-700">{currentTestimonial.name}</h3>
        <div className="flex items-center justify-center mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`text-xl ${index < currentTestimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-lg italic text-gray-600 mb-4">"{currentTestimonial.comment}"</p>
      </div>

      {/* Dots pour navigation */}
      <div className="flex justify-center mt-4">
        {displayedTestimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentTestimonialIndex ? 'bg-teal-700' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)} // Changer le témoignage au clic sur le point
          ></div>
        ))}
      </div>

      {/* Texte pour donner un avis */}
      <div className="text-center mt-4">
        <button
          className="text-teal-700 font-semibold hover:underline"
          onClick={() => setIsModalOpen(true)} // Ouvrir la modale
        >
          Donnez votre avis
        </button>
      </div>

      {/* Affichage de la modale */}
      <TestimonialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
        rating={rating}
        setRating={setRating}
      />
    </section>
  );
};

export default Testimonials;