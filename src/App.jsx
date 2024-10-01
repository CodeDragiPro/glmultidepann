import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';  // Assurez-vous que Firebase est correctement configuré
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionComponent from './components/MissionComponent';
import PriceSection from './components/PriceSection';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Le panneau admin après connexion

// Composant pour protéger les routes
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Chargement...</div>; // Affiche un loader pendant que Firebase vérifie l'authentification
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className=''>
        <Navbar />
        <Routes>
          {/* Route par défaut pour les sections du site */}
          <Route path="/" element={
            <>
              <Hero />
              <MissionComponent />
              <PriceSection />
              <Stories />
              <Contact />
              <Footer />
            </>
          } />

          {/* Route de connexion */}
          <Route path="/login" element={<Login />} />

          {/* Route protégée pour l'admin */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;