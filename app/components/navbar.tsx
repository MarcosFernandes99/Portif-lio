"use client";

import React from "react";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

export default function NavBar() {
  return (
    <div className="flex min-w-full min-h-20 bg-cinzaClaro text-white justify-center items-center font-extrabold text-2xl font-thin fixed z-50">
      <button
        className="mr-8 hover:text-verde duration-500"
        onClick={() => scrollToSection("inicio")}
      >
        Início
      </button>
      <button
        className="mr-8 hover:text-verde duration-500"
        onClick={() => scrollToSection("sobre")}
      >
        Sobre mim
      </button>
      <button
        className="mr-8 hover:text-verde duration-500"
        onClick={() => scrollToSection("habilidades")}
      >
        Habilidades
      </button>
      <button
        className="mr-8 hover:text-verde duration-500"
        onClick={() => scrollToSection("projetos")}
      >
        Projetos
      </button>
      <button
        className="mr-8 hover:text-verde duration-500"
        onClick={() => scrollToSection("contato")}
      >
        Contato
      </button>
    </div>
  );
}
