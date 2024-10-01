import React, { useState, useEffect } from "react";
import { auth } from "../firebase"; // Assurez-vous que ce chemin est correct
import { useNavigate } from "react-router-dom";
import DashboardStories from "./DashboardStories"; 
import DashboardComments from "./DashboardComments"; 
import { db } from '../firebase'; // Assurez-vous que ce chemin est correct
import { collection, getDocs } from 'firebase/firestore'; // Import des fonctions nécessaires

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedStories, setSelectedStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [comments, setComments] = useState([]);

  // Utilisation de useEffect pour récupérer les données depuis Firebase
  useEffect(() => {
    const fetchStories = async () => {
      const storiesCollection = collection(db, 'stories'); // Remplacez 'stories' par le nom de votre collection
      const storiesSnapshot = await getDocs(storiesCollection);
      const storiesList = storiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStories(storiesList);
    };

    const fetchComments = async () => {
      const commentsCollection = collection(db, 'comments'); // Remplacez 'comments' par le nom de votre collection
      const commentsSnapshot = await getDocs(commentsCollection);
      const commentsList = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsList);
    };

    fetchStories();
    fetchComments();
  }, []);

  const toggleStorySelection = (index) => {
    if (selectedStories.includes(index)) {
      setSelectedStories(selectedStories.filter((i) => i !== index));
    } else {
      setSelectedStories([...selectedStories, index]);
    }
  };

  const deleteSelectedStories = () => {
    const newStories = stories.filter((_, index) => !selectedStories.includes(index));
    setStories(newStories);
    setSelectedStories([]);
  };

  const addStory = () => {
    const newStory = prompt("Entrez l'URL de la nouvelle story:");
    if (newStory) {
      setStories([...stories, newStory]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-teal-700">Tableau de bord</h1>
      <DashboardStories
        stories={stories}
        selectedStories={selectedStories}
        toggleStorySelection={toggleStorySelection}
        deleteSelectedStories={deleteSelectedStories}
        addStory={addStory}
      />
      <DashboardComments comments={comments} />
    </div>
  );
};

export default Dashboard;