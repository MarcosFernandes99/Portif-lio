import React from "react";

export default function NavBar() {
  return (
    <div className="flex min-w-screen min-h-20 bg-cinzaClaro text-white justify-center items-center font-extrabold text-2xl font-thin">
      <button className="mr-8 hover:text-verde duration-500">Início</button>
      <button className="mr-8 hover:text-verde duration-500">Sobre mim</button>
      <button className="mr-8 hover:text-verde duration-500">
        Habilidades
      </button>
      <button className="mr-8 hover:text-verde duration-500">Projetos</button>
      <button className="mr-8 hover:text-verde duration-500">Contato</button>
    </div>
  );
}
