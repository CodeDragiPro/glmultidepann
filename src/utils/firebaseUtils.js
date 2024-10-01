import { db, storage } from '../firebase'; // Importer Firestore et Storage depuis firebase.js
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'; 
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'; 

// Fonction pour ajouter une photo à Firebase Storage et à Firestore
export const addPhoto = async (file) => {
  const storageRef = ref(storage, `stories/${file.name}`);
  
  // Télécharger le fichier dans le Storage
  await uploadBytes(storageRef, file);
  
  // Récupérer l'URL de téléchargement
  const downloadURL = await getDownloadURL(storageRef);
  
  // Ajouter l'URL dans Firestore et retourner l'ID du document
  const docRef = await addDoc(collection(db, "stories"), {
    url: downloadURL,
    createdAt: new Date()
  });
  
  // Retourner l'ID du document pour utilisation future
  return docRef.id;
};

// Fonction pour lister toutes les photos depuis Firestore
export const listPhotos = async () => {
  const querySnapshot = await getDocs(collection(db, "stories"));
  const stories = [];
  
  // Ajouter chaque URL et l'ID dans le tableau stories
  querySnapshot.forEach((doc) => {
    stories.push({ id: doc.id, url: doc.data().url });
  });
  
  return stories;
};

// Fonction pour supprimer une photo de Firebase Storage et de Firestore
export const deletePhoto = async (documentId, photoUrl) => {
  // Extraire le chemin de l'image pour la suppression
  const photoRef = ref(storage, photoUrl);

  // Supprimer l'image du stockage
  try {
    await deleteObject(photoRef);
    console.log("Image supprimée avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression de l'image :", error);
  }

  // Suppression de l'entrée de la base de données Firestore
  try {
    const docRef = doc(db, "stories", documentId); // Utilisez l'ID approprié
    await deleteDoc(docRef);
    console.log("Document supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression du document :", error);
  }
};

// Fonction pour ajouter un témoignage
export const addTestimonial = async (testimonial) => {
  try {
    await addDoc(collection(db, "testimonials"), testimonial);
    console.log("Témoignage ajouté avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout du témoignage :", error);
  }
};

// Fonction pour lister tous les témoignages depuis Firestore
export const listTestimonials = async () => {
  const querySnapshot = await getDocs(collection(db, "testimonials"));
  const testimonials = [];

  querySnapshot.forEach((doc) => {
    testimonials.push({ id: doc.id, ...doc.data() });
  });

  return testimonials;
};

// Nouvelle fonction pour supprimer un témoignage
export const deleteTestimonial = async (testimonialId) => {
  try {
    const docRef = doc(db, "testimonials", testimonialId); // Utilise l'ID du témoignage
    await deleteDoc(docRef); // Supprime le témoignage de Firestore
    console.log("Témoignage supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression du témoignage :", error);
  }
};