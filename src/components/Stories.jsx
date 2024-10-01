import React, { useEffect, useState } from "react";
import { listPhotos } from '../utils/firebaseUtils'; // Importer la fonction pour lister les photos
import { FaChevronRight } from 'react-icons/fa'; // Importer l'icône de flèche

const Stories = () => {
  const [storiesData, setStoriesData] = useState([]); // État pour stocker les vraies histoires
  const [visibleCount, setVisibleCount] = useState(10); // Nombre d'histoires visibles

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await listPhotos();
      const formattedStories = stories.map((story, index) => ({
        id: story.id,  // Utiliser l'ID du document
        image: story.url, // Utiliser l'URL récupérée
        name: `Story ${index + 1}` // Nom par défaut, peut être ajusté
      }));
      setStoriesData(formattedStories);
    };

    fetchStories();
  }, []);

  // Fonction pour charger plus d'histoires
  const loadMoreStories = () => {
    setVisibleCount(prevCount => prevCount + 10); // Augmente le nombre d'histoires visibles
  };

  return (
    <div className="flex flex-col items-center" id="story">
      <h2 className="text-3xl font-bold text-center pt-4 text-teal-700">STORIES</h2>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 items-center w-full">
        {storiesData.slice(0, visibleCount).map((story) => (
          <div
            key={story.id}
            className="relative min-w-[180px] md:min-w-[220px] h-[300px] md:h-[400px] bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-full object-cover"
            />
            
          </div>
        ))}
        
        {/* Vérifie si d'autres histoires sont disponibles et ajoute le cercle avec l'icône "Charger plus" */}
        {visibleCount < storiesData.length && (
          <div className="flex items-center justify-center min-w-[180px] md:min-w-[220px] h-[300px] md:h-[400px] bg-transparent  cursor-pointer hover:scale-105 transition-transform duration-200" onClick={loadMoreStories}>
            <div className="flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full">
              <FaChevronRight size={24} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;