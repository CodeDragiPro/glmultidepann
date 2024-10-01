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
import Testimonials from './components/Testimonials';

import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import de HelmetProvider

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
    return <div>Chargement...</div>; 
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div>
          {/* Helmet pour SEO global */}
          <Helmet>
            <title>GL MULTI DEPANN - Services Multi-Services</title>
            <meta
              name="description"
              content="GL MULTI DEPANN vous offre une large gamme de services de dépannage multi-services, pour tous vos besoins."
            />
            <meta
              name="keywords"
              content="dépannage, multi-services, GL MULTI DEPANN, services"
            />
            <meta
              property="og:title"
              content="GL MULTI DEPANN - Votre spécialiste en dépannage multi-services"
            />
            <meta
              property="og:description"
              content="Nous vous proposons des services de qualité dans le dépannage multi-services."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.votre-site.com" />
            <meta property="og:image" content="https://www.votre-site.com/images/logo.png" />
          </Helmet>
          
          <Navbar />
          
          <Routes>
            {/* Route par défaut pour les sections du site */}
            <Route path="/" element={
              <>
                {/* Helmet spécifique pour la page d'accueil */}
                <Helmet>
                  <title>Accueil - GL MULTI DEPANN</title>
                  <meta
                    name="description"
                    content="Bienvenue chez GL MULTI DEPANN, votre spécialiste en dépannage multi-services."
                  />
                  <meta
                    property="og:title"
                    content="Accueil - GL MULTI DEPANN"
                  />
                  <meta
                    property="og:description"
                    content="GL MULTI DEPANN propose une large gamme de services pour vous dépanner au quotidien."
                  />
                </Helmet>

                <Hero />
                <MissionComponent />
                <PriceSection />
                <Stories />
                <Contact />
                <Testimonials/>
                <Footer />
              </>
            } />

            {/* Route de connexion */}
            <Route path="/login" element={
              <>
                <Helmet>
                  <title>Connexion - GL MULTI DEPANN</title>
                  <meta name="description" content="Connectez-vous à votre compte GL MULTI DEPANN pour accéder à nos services personnalisés." />
                </Helmet>
                <Login />
              </>
            } />

            {/* Route protégée pour l'admin */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <>
                  <Helmet>
                    <title>Tableau de bord - GL MULTI DEPANN</title>
                    <meta name="description" content="Tableau de bord administrateur pour gérer les services et utilisateurs de GL MULTI DEPANN." />
                  </Helmet>
                  <Dashboard />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;