import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yang Lyu</h1>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/about" className="px-4">About</Link>
          <Link to="/projects" className="px-4">Projects</Link>
          <Link to="/contact" className="px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;