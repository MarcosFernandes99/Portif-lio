"use client";

import { MenuSectedProps } from "@/types/projects.interface";
import React from "react";

export default function Nav({ scrollToSection }: MenuSectedProps) {
  return (
    <div className="min-w-full min-h-20 bg-cinzaClaro text-white justify-center items-center font-extrabold text-xl fixed z-50 hidden sm:flex">
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
