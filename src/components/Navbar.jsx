import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link to="/appointments">Appointments</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;