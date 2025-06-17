import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authUser");
    setTimeout(() => navigate("/login"), 1500); // Optional delay to show animation
  }, [navigate]);

  return (
    <div className="logout-container">
      <p className="logout-text">Logging out...</p>
    </div>
  );
}

export default Logout;
