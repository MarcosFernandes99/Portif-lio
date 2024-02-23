import React from "react";
import Image from "next/image";
import setaDireita from "../public/seta-direita.png";
import fotoInicio from "../public/foto-inicio.png";

export default function Home() {
  return (
    <>
      <div className="flex min-w-screen min-h-20 bg-cinzaClaro text-white justify-center items-center font-extrabold text-2xl font-thin">
        <button className="mr-8 hover:text-verde duration-500">Início</button>
        <button className="mr-8 hover:text-verde duration-500">
          Sobre mim
        </button>
        <button className="mr-8 hover:text-verde duration-500">
          Habilidades
        </button>
        <button className="mr-8 hover:text-verde duration-500">Projetos</button>
        <button className="mr-8 hover:text-verde duration-500">Contato</button>
      </div>
      <section className="bg-cinzaEscuro min-w-screen min-h-screen flex">
        <div className="flex flex-col min-h-screen w-[50%] ml-12">
          <span className="text-cinzaMedio text-2xl mt-48">Olá eu sou,</span>
          <span className="text-verde text-5xl">Marcos Fernandes</span>
          <span className="text-white text-5xl">Desenvolvedor Front End</span>
          <span className="text-cinzaMedio text-lg mt-12">
            We denounce with righteous indignation dislike demoralized by the
            charms of pleasure
          </span>
          <div className="div flex mt-12">
            <button className="bg-verde text-2xl p-2 rounded-2xl hover:bg-black hover:text-white font-bold duration-500">
              Contate-Me
            </button>
            <button className="text-white ml-16 text-2xl transition-transform transform hover:scale-110 font-bold flex items-center">
              Download CV
              <Image
                src={setaDireita}
                alt="Seta Direita"
                className="w-4 h-4 ml-3 filter brightness-0 invert duration-500"
              ></Image>
            </button>
          </div>
        </div>
        <div className="rounded-full bg-black mt-10 w-[40%] h-[80vh]">
          <Image
            src={fotoInicio}
            alt="Foto Inicio"
            className="object-contain mt-8"
          ></Image>
        </div>
      </section>
    </>
  );
}
