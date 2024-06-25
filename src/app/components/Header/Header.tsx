"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className="fixed z-10 top-10 right-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <img src="menu-icon.svg" alt="burger" />
      </div>

      <div
        className={`fixed inset-0 z-20 bg-black text-white flex flex-col justify-center transition-opacity ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button className="fixed top-10 right-10 text-2xl" onClick={toggleMenu}>
          X
        </button>
        <nav>
          <ul className="space-y-8 text-4xl ml-10 font-oswald">
            <li
              className="cursor-pointer hover:text-gray-500 transition-transform transform hover:translate-x-4"
              onClick={toggleMenu}
            >
              <Link href="#home">ACCUEIL</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-500 transition-transform transform hover:translate-x-4"
              onClick={toggleMenu}
            >
              <Link href="#about">A PROPOS DE NOUS</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-500 transition-transform transform hover:translate-x-4"
              onClick={toggleMenu}
            >
              <Link href="#quotes">CITATIONS</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-500 transition-transform transform hover:translate-x-4"
              onClick={toggleMenu}
            >
              <Link href="#jobs">METIERS</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-500 transition-transform transform hover:translate-x-4"
              onClick={toggleMenu}
            >
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
