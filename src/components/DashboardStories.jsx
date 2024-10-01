import React, { useState, useEffect } from "react";
import { addPhoto, listPhotos, deletePhoto } from '../utils/firebaseUtils';

const DashboardStories = ({ selectedStories, toggleStorySelection }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [stories, setStories] = useState([]);
  const [newStories, setNewStories] = useState([]); // État pour stocker les fichiers des nouvelles stories
  const storiesPerPage = 12;

  useEffect(() => {
    const fetchStories = async () => {
      const storiesData = await listPhotos();
      setStories(storiesData);
    };

    fetchStories();
  }, []);

  // Calculer les index de début et de fin pour la pagination
  const startIndex = currentPage * storiesPerPage;
  const endIndex = startIndex + storiesPerPage;
  const currentStories = stories.slice(startIndex, endIndex);
  const totalPages = Math.ceil(stories.length / storiesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction pour supprimer les stories sélectionnées
  const handleDeleteSelected = async () => {
    for (const index of selectedStories) {
      const storyToDelete = stories[index];
      await deletePhoto(storyToDelete.id, storyToDelete.url);
    }
    // Mettre à jour la liste après suppression
    const updatedStories = stories.filter((_, index) => !selectedStories.includes(index));
    setStories(updatedStories);
  };

  // Fonction pour ajouter de nouvelles stories
  const handleAddStories = async () => {
    for (const story of newStories) {
      await addPhoto(story);
    }
    // Rafraîchir la liste des stories après l'ajout
    const updatedStories = await listPhotos();
    setStories(updatedStories);
    setNewStories([]); // Réinitialiser les fichiers sélectionnés
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">Stories</h2>
      <div className="flex flex-wrap justify-center items-center">
        {currentStories.map((story, index) => (
          <div
            key={story.id} // Utiliser l'ID unique pour la clé
            className={`relative m-2 rounded overflow-hidden cursor-pointer ${selectedStories.includes(index + startIndex) ? 'border-2 border-teal-700' : ''}`}
            onClick={() => toggleStorySelection(index + startIndex)}
          >
            <img
              src={story.url}
              alt={`Story ${index + 1}`}
              className="w-32 h-48 object-cover md:w-40 md:h-60" // Ajuster la largeur et la hauteur
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="mt-4 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
        >
          Précédent
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="mt-4 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
        >
          Suivant
        </button>
      </div>

      <div className="flex justify-between mt-4">
        {/* Champ pour sélectionner plusieurs fichiers */}
        <input
          type="file"
          accept="image/*"
          multiple // Accepter plusieurs fichiers
          onChange={(e) => setNewStories(Array.from(e.target.files))} // Mettre à jour avec un tableau de fichiers
          className="mt-4 border border-teal-700 rounded py-2 px-4"
        />
        <div className="mt-4">
          <button
            onClick={handleAddStories}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter des Stories
          </button>
        </div>
        {selectedStories.length > 0 && (
          <div className="mt-4">
            <button
              onClick={handleDeleteSelected}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Supprimer la sélection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardStories;