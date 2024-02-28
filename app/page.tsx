import React from "react";
import Image from "next/image";
import setaDireita from "../public/seta-direita.png";
import fotoInicio from "../public/foto-inicio.png";
import iconTelefone from "../public/telefone.png";
import iconEmail from "../public/email.png";
import check from "../public/check.png";
import estrela from "../public/estrela.png";
import enviar from "../public/enviar.png";
import Link from "next/link";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>

      <section className="bg-cinzaEscuro min-w-screen min-h-screen flex justify-around">
        <div className="flex flex-col min-h-screen w-[40%] ml-12">
          <span className="text-cinzaMedio text-2xl mt-48">Olá eu sou,</span>
          <span className="text-verde text-5xl">Marcos Fernandes</span>
          <span className="text-white text-5xl">Desenvolvedor Front End</span>
          <span className="text-cinzaMedio text-lg mt-12 text-justify">
            Atuando há mais de 3 anos como Freelancer, venho entregando
            consistentemente projetos que superam as expectativas dos meus
            clientes. Minha paixão pelo que faço se reflete em meus projetos,
            que não apenas seguem as últimas tendências do mercado, mas também
            capturam a identidade única de cada cliente.
          </span>
          <div className="flex mt-12">
            <button className="bg-verde text-2xl p-2 rounded-2xl hover:bg-black hover:text-white font-bold duration-500">
              Contate-Me
            </button>
            <button className="text-white ml-16 text-2xl transition-transform transform hover:scale-110 duration-500 font-bold flex items-center">
              Download CV
              <Image
                src={setaDireita}
                alt="Seta Direita"
                className="w-4 h-4 ml-3 filter brightness-0 invert"
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
              <Image src={check} alt="Check"></Image>
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
              <Image src={check} alt="Check"></Image>
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
              <Image src={check} alt="Check"></Image>
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
              <Image src={check} alt="Check"></Image>
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
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
                }
                alt="Nodejs"
                width={70}
                height={70}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-10">Node.js</span>
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

      <section className="min-w-screen min-h-screen bg-black flex flex-col items-center">
        <div className="flex flex-col items-center h-40 mt-16">
          <span className="text-cinzaMedio text-xl">
            Trabalhos mais recentes
          </span>
          <span className="text-white text-4xl">
            Explore meus <span className="text-verde">Projetos Populares</span>
          </span>
        </div>
        <div className="flex justify-around min-w-[70%] min-h-80">
          <div className="min-w-[30%] bg-cinzaMedio rounded-xl transition-transform transform hover:scale-110 duration-500"></div>
          <div className="flex flex-col justify-center">
            <span className="text-verde text-xl">Landing Page</span>
            <span className="text-white text-4xl mt-5">
              {" "}
              Página de captura de lead
            </span>
            <span className="text-cinzaMedio mt-5 text-justify">
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
              inventore veritatis...
            </span>
            <div>
              <button className="bg-verde p-2 text-xl rounded-xl mt-10 font-bold transition-transform transform hover:scale-110 duration-500">
                Ver mais...
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around min-w-[70%] min-h-80 mt-16">
          <div className="flex flex-col justify-center">
            <span className="text-verde text-xl">Landing Page</span>
            <span className="text-white text-4xl mt-5">
              {" "}
              Página de captura de lead
            </span>
            <span className="text-cinzaMedio mt-5 text-justify">
              Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
              inventore veritatis...
            </span>
            <div>
              <button className="bg-verde p-2 text-xl rounded-xl mt-10 font-bold transition-transform transform hover:scale-110 duration-500">
                Ver mais...
              </button>
            </div>
          </div>
          <div className="min-w-[30%] bg-cinzaMedio rounded-xl transition-transform transform hover:scale-110 duration-500"></div>
        </div>
        <Link
          href="/projects"
          className="bg-verde p-2 text-2xl rounded-xl font-bold hover:scale-110 duration-500 items-center flex my-8 cursor-pointer"
        >
          Ver mais projetos{" "}
          <Image
            src={setaDireita}
            alt="Seta Direita"
            className="w-4 h-4 ml-3"
          ></Image>
        </Link>
      </section>

      <section className="flex bg-cinzaClaro min-w-screen min-h-[35rem] justify-around">
        <div className="flex flex-col w-[40%] mt-10">
          <span className="text-cinzaClaro text-2xl">Contato</span>
          <span className="text-white text-5xl mt-5">
            Vamos conversar sobre seus{" "}
            <span className="text-verde">próximos projetos</span>
          </span>
          <span className="text-cinzaClaro mt-10 text-justify">
            Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
            inventore veritatis
          </span>
          <div className="flex mt-14 items-center text-2xl font-bold text-white">
            <span>
              <Image src={estrela} alt="Estrela" className="w-8 h-8"></Image>
            </span>
            <span className="ml-4">2+ Anos de Experiência</span>
          </div>
          <div className="flex mt-6 items-center text-2xl font-bold text-white">
            <span>
              <Image src={estrela} alt="Estrela" className="w-8 h-8"></Image>
            </span>
            <span className="ml-4">Profissional Desenvolvedor Front End</span>
          </div>
          <div className="flex mt-6 items-center text-2xl font-bold text-white">
            <span>
              <Image src={estrela} alt="Estrela" className="w-8 h-8"></Image>
            </span>
            <span className="ml-4">Suporte personalizado</span>
          </div>
        </div>

        <div className="flex w-[40%] mt-10">
          <form action="">
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Nome <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  className="bg-cinzaMedio rounded-xl mt-2 min-h-10 w-64 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col ml-16">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  E-mail <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  className="bg-cinzaMedio rounded-xl mt-2 min-h-10 w-64 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-10">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Número de Telefone{" "}
                  <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  className="bg-cinzaMedio rounded-xl mt-2 min-h-10 w-64 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-10 ml-16">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Assunto <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  className="bg-cinzaMedio rounded-xl mt-2 min-h-10 w-64 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-10 flex-grow">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Mensagem <span className="text-verde text-2xl">*</span>
                </label>
                <textarea className="bg-cinzaMedio rounded-xl mt-2 min-h-24 w-full text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde" />
              </div>
            </div>
            <button className="bg-verde flex mt-10 p-2 text-xl rounded-xl items-center font-bold hover:scale-110 duration-500">
              Enviar mensagem
              <Image src={enviar} alt="Enviar" className="w-4 h-4 ml-2"></Image>
            </button>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
