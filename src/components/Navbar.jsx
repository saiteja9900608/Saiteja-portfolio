import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-50">
      <ul className="flex justify-center space-x-8 text-lg font-semibold">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#certifications" className="hover:text-blue-600">Certifications</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;

