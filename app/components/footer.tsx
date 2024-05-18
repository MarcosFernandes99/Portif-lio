"use client";

import React from "react";
import endereco from "../../public/endereco.png";
import iconEmail from "../../public/email.png";
import iconTelefone from "../../public/telefone.png";
import Image from "next/image";
import setaCima from "../../public/pra-cima.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default function Footer() {
  return (
    <>
      <section className="flex min-w-screen bg-black min-h-[10rem] justify-center">
        <div className="flex flex-col w-full justify-center items-center">
          <span className="text-white text-2xl font-bold">Endereço</span>
          <div className="flex items-center mt-6 w-[80%] justify-evenly flex-wrap">
            <div className="flex">
              <span className="bg-verde w-5 h-5 rounded-full">
                <Image src={endereco} alt="Endereço" className="p-1"></Image>
              </span>
              <span className="text-cinzaMedio text-base ml-2">
                São Paulo - SP
              </span>
            </div>
            <div className="flex">
              <span className="bg-verde w-5 h-5 rounded-full ml-2">
                <Image src={iconEmail} alt="Email" className="p-1"></Image>
              </span>
              <span className="text-cinzaMedio text-base ml-2">
                marcosdev@zohomail.com
              </span>
            </div>
            <div className="flex">
              <span className="bg-verde w-5 h-5 rounded-full ml-2">
                <Image
                  src={iconTelefone}
                  alt="Telefone"
                  className="p-1"
                ></Image>
              </span>
              <span className="text-cinzaMedio text-base ml-2">
                11 98859-1854
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-w-screen bg-cinzaClaro min-h-[5rem] justify-around">
        <div className="text-white text-xl flex w-[40%] justify-around items-center flex-wrap">
          <a
            href="https://www.instagram.com/dev.marcosjr/?hl=pt"
            target="_blank"
            className="hover:scale-110 duration-500 ml-2"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/"
            target="_blank"
            className="hover:scale-110 duration-500 ml-2"
          >
            Linkedin
          </a>
          <a
            href="mailto:marcosdev@zohomail.com"
            target="_blank"
            className="hover:scale-110 duration-500 ml-2"
          >
            E-mail
          </a>
          <a
            href="https://github.com/MarcosFernandes99"
            target="_blank"
            className="hover:scale-110 duration-500 ml-2"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center min-w-[40%] justify-end">
          <span className="text-xl text-white">Voltar ao topo</span>
          <button className="ml-4 bg-verde h-9 w-8 rounded-md hover:scale-110 duration-200">
            <Image
              src={setaCima}
              alt="Seta para cima"
              className="p-2"
              onClick={scrollToTop}
            ></Image>
          </button>
        </div>
      </section>
    </>
  );
}
