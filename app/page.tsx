import React from "react";
import Image from "next/image";
import setaDireita from "../public/seta-direita.png";
import fotoInicio from "../public/foto-inicio.png";
import iconTelefone from "../public/telefone.png";
import iconEmail from "../public/email.png";
import check from "../public/check.png";

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
            <button className="text-white ml-16 text-2xl transition-transform transform hover:scale-110 duration-500 font-bold flex items-center">
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

      <section className="flex bg-black min-w-screen min-h-[35rem] justify-around">
        <div className="flex flex-col w-[40%] mt-10">
          <span className="text-cinzaMedio text-2xl">Sobre mim</span>
          <span className="text-white text-5xl mt-4">
            Profissional{" "}
            <span className="text-verde">Desenvolvedor Front End</span>
          </span>
          <span className="text-white mt-8 text-justify">
            Sou Desenvolvedor Front-End com experiência sólida nas últimas e
            mais eficientes tecnologias. Ao longo da minha jornada como
            freelancer, tenho entregue projetos que não apenas atendem às
            expectativas, mas também as superam. Estou comprometido em oferecer
            soluções inovadoras e funcionais para o seu projeto.
          </span>
          <div className="flex justify-around bg-cinzaClaro min-h-28 rounded-3xl mt-10 ">
            <div className="flex items-center transition-transform transform hover:scale-110 duration-500">
              <span className="bg-verde rounded-full w-7 h-7">
                <Image src={iconEmail} alt="icon email" className="p-1"></Image>
              </span>
              <div className="flex flex-col justify-center ml-2">
                <span className="text-cinzaClaro">E-mail</span>
                <button className="text-white font-bold ">
                  marcosdev@zohomail.com
                </button>
              </div>
            </div>
            <div className="flex items-center transition-transform transform hover:scale-110 duration-500">
              <span className="bg-verde rounded-full w-7 h-7">
                <Image
                  src={iconTelefone}
                  alt="icon telefone"
                  className="p-1"
                ></Image>
              </span>
              <div className="flex flex-col justify-center ml-2">
                <span className="text-cinzaClaro">Telefone</span>
                <button className="text-white font-bold ">
                  +55 11 98859-1854
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[40%] mt-10">
          <span className="text-cinzaMedio text-2xl ml-12">Serviços</span>
          <div className="flex items-center mt-10">
            <span className="w-9 h-9 ">
              <Image
                src={check}
                alt="Check"
                className="filter brightness-0 invert duration-500"
              ></Image>
            </span>
            <div className="flex flex-col ml-4">
              <span className="text-white text-3xl">
                Desenvolvimento de Websites responsivos
              </span>
              <span className="text-cinzaMedio text-justify">
                Websites adaptáveis para proporcionar uma experiência
                consistente em diferentes dispositivos.
              </span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-9 h-9 ">
              <Image
                src={check}
                alt="Check"
                className="filter brightness-0 invert duration-500"
              ></Image>
            </span>
            <div className="flex flex-col ml-4">
              <span className="text-white text-3xl">
                Otimização de desempenho do Front End
              </span>
              <span className="text-cinzaMedio text-justify">
                Aprimorar a velocidade e eficiência do seu site, otimizando o
                código e recursos para um carregamento mais rápido.
              </span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-9 h-9 ">
              <Image
                src={check}
                alt="Check"
                className="filter brightness-0 invert duration-500"
              ></Image>
            </span>
            <div className="flex flex-col ml-4">
              <span className="text-white text-3xl">
                Manutenção e atualização de Websites
              </span>
              <span className="text-cinzaMedio text-justify">
                Serviços contínuos para manter seu site seguro, atualizado e
                compatível com as últimas tecnologias.
              </span>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <span className="w-9 h-9 ">
              <Image
                src={check}
                alt="Check"
                className="filter brightness-0 invert duration-500"
              ></Image>
            </span>
            <div className="flex flex-col ml-4">
              <span className="text-white text-3xl">
                Integração de APIs e serviços externos
              </span>
              <span className="text-cinzaMedio text-justify">
                Integrar APIs e serviços externos para enriquecer a
                funcionalidade do seu site.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-cinzaClaro min-w-screen min-h-[35rem] justify-around">
        <div className="flex flex-col mt-10 w-[40%]">
          <span className="text-white text-2xl">Habilidades</span>
          <span className="text-white text-5xl mt-5">
            Vamos explorar{" "}
            <span className="text-verde">minhas habilidades</span>
          </span>
          <span className="text-justify text-white mt-10">
            Sou Desenvolvedor Front-End com experiência sólida nas últimas e
            mais eficientes tecnologias. Ao longo da minha jornada como
            freelancer, tenho entregue projetos que não apenas atendem às
            expectativas, mas também as superam. Estou comprometido em oferecer
            soluções inovadoras e funcionais para o seu projeto.
          </span>
          <div className="flex">
            <button className="bg-verde p-2 mt-10 text-2xl rounded-2xl hover:bg-black hover:text-white font-bold duration-500">
              Contate-me
            </button>
          </div>
        </div>
        <div className="flex mt-10 w-[40%] justify-center flex-wrap">
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                }
                alt="React"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-xl mt-10 text-white">React</span>
          </div>
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                }
                alt="Typeescript"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">Typescript</span>
          </div>
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                }
                alt="Next.js"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">Next.js</span>
          </div>
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                }
                alt="Tailwind CSS"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                }
                alt="GitHub"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">GitHub</span>
          </div>
          <div className="flex flex-col items-center bg-cinzaMedio p-2 h-40 w-32 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                }
                alt="Javascript"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">Javascript</span>
          </div>
        </div>
      </section>
    </>
  );
}
