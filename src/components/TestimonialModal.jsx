import React from "react";

const TestimonialModal = ({ isOpen, onClose, onSubmit, name, setName, comment, setComment, rating, setRating }) => {
  if (!isOpen) return null; // Si la modale n'est pas ouverte, ne rien rendre

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      onSubmit(); // Appeler la fonction de soumission passée en props
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Donnez votre avis</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Commentaire</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Note</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="" disabled>Choisissez votre note</option>
              <option value="1">1 étoile</option>
              <option value="2">2 étoiles</option>
              <option value="3">3 étoiles</option>
              <option value="4">4 étoiles</option>
              <option value="5">5 étoiles</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-teal-800 transition duration-200"
          >
            Envoyer
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;