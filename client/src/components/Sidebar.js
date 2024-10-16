// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">NEXUS</div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className="sidebar-link">
          Dashboard
        </Link>
        <Link to="/schedule" className="sidebar-link">
          Schedule
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
