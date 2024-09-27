import React from "react";

const storiesData = [
  { id: 1, image: "https://via.placeholder.com/150x250", name: "Story 1" },
  { id: 2, image: "https://via.placeholder.com/150x250", name: "Story 2" },
  { id: 3, image: "https://via.placeholder.com/150x250", name: "Story 3" },
  { id: 4, image: "https://via.placeholder.com/150x250", name: "Story 4" },
  { id: 5, image: "https://via.placeholder.com/150x250", name: "Story 5" },
  { id: 6, image: "https://via.placeholder.com/150x250", name: "Story 6" },
  { id: 7, image: "https://via.placeholder.com/150x250", name: "Story 7" },
  { id: 8, image: "https://via.placeholder.com/150x250", name: "Story 8" },
  { id: 9, image: "https://via.placeholder.com/150x250", name: "Story 9" },
  { id: 10, image: "https://via.placeholder.com/150x250", name: "Story 10" },
];

const Stories = () => {
  return (
    <div>

<h2 className="text-3xl font-bold text-center pt-4 text-teal-700">STORIES</h2>
    <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4 items-center md:justify-center">
      
      {storiesData.map((story) => (
        <div
          key={story.id}
          className="min-w-[150px] h-[250px] bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <img
            src={story.image}
            alt={story.name}
            className="w-[150px] h-[250px] object-cover"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Stories;
