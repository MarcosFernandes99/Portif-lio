import React from "react";
import endereco from "../../public/endereco.png";
import iconEmail from "../../public/email.png";
import iconTelefone from "../../public/telefone.png";
import Image from "next/image";
import setaCima from "../../public/pra-cima.png";

export default function Footer() {
  return (
    <>
      <section className="flex min-w-screen bg-black min-h-[10rem] justify-around">
        <div className="flex flex-col items-center w-[40%] justify-center">
          <span className="text-white font-bold text-2xl">Link rápido</span>
          <div className="flex justify-around text-cinzaMedio text-xl mt-6">
            <button className="hover:text-verde">Início</button>
            <button className="ml-6 hover:text-verde">Sobre mim</button>
            <button className="ml-6 hover:text-verde">Habilidades</button>
            <button className="ml-6 hover:text-verde">Projetos</button>
            <button className="ml-6 hover:text-verde">Contato</button>
          </div>
        </div>
        <div className="flex flex-col w-[40%] justify-center items-center">
          <span className="text-white text-2xl font-bold">Endereço</span>
          <div className="flex items-center mt-6">
            <span className="bg-verde w-7 h-7 rounded-full">
              <Image src={endereco} alt="Endereço" className="p-1"></Image>
            </span>
            <span className="text-cinzaMedio text-xl ml-2">São Paulo - SP</span>
            <span className="bg-verde w-7 h-7 rounded-full ml-8">
              <Image src={iconEmail} alt="Email" className="p-1"></Image>
            </span>
            <span className="text-cinzaMedio text-xl ml-2">
              marcosdev@zohomail.com
            </span>
            <span className="bg-verde w-7 h-7 rounded-full ml-8">
              <Image src={iconTelefone} alt="Telefone" className="p-1"></Image>
            </span>
            <span className="text-cinzaMedio text-xl ml-2">11 98859-1854</span>
          </div>
        </div>
      </section>

      <section className="flex min-w-screen bg-cinzaClaro min-h-[5rem] justify-around">
        <div className="text-white text-xl flex min-w-[40%] justify-around">
          <button className="hover:scale-110 duration-500">Instagram</button>
          <button className="hover:scale-110 duration-500">Linkedin</button>
          <button className="hover:scale-110 duration-500">Gmail</button>
          <button className="hover:scale-110 duration-500">GitHub</button>
        </div>
        <div className="flex items-center min-w-[40%] justify-end">
          <span className="text-xl text-white">Voltar ao topo</span>
          <button className="ml-4 bg-verde h-9 w-8 rounded-md hover:scale-110 duration-200">
            <Image src={setaCima} alt="Seta para cima" className="p-2"></Image>
          </button>
        </div>
      </section>
    </>
  );
}
