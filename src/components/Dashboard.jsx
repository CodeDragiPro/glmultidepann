// src/components/Dashboard.js
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Bienvenue, Administrateur</h1>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Dashboard;