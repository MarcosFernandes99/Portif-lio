import React from "react";
import NavBar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <NavBar></NavBar>

      <section className="min-w-screen min-h-screen bg-cinzaEscuro flex flex-col items-center">
        <div className="flex flex-col">
          <span className="text-white text-5xl mt-16 flex justify-center">
            Portifólio
          </span>
          <span className="text-cinzaClaro text-2xl mt-5">
            Escolhe a tecnologia utilizada no projeto:
          </span>
        </div>

        <div className="w-[70rem] bg-black h-20 rounded-xl flex justify-around mt-5 items-center">
          <button className="h-[80%] w-32 bg-sky-400 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-sky-800 duration-500">
            React
          </button>
          <button className="h-[80%] w-32 bg-slate-200 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-slate-400 duration-500">
            Typescript
          </button>
          <button className="h-[80%] w-32 bg-yellow-400 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-yellow-800 duration-500">
            Javascript
          </button>
          <button className="h-[80%] w-32 bg-gray-400 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-gray-600 duration-500">
            Next.js
          </button>
          <button className="h-[80%] w-32 bg-blue-500 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-blue-800 duration-500">
            Tailwind CSS
          </button>
          <button className="h-[80%] w-32 bg-green-400 rounded-xl font-bold text-2xl p-2 flex items-center justify-center hover:bg-green-800 duration-500">
            Node.js
          </button>
        </div>

        <div className="flex flex-wrap justify-around min-w-[70rem] h-full my-20">
          <div className="flex flex-col min-w-[40%] h-96 mb-24">
            <div className="bg-cinzaClaro h-full rounded-xl cursor-pointer hover:scale-105 duration-500"></div>
            <div className="flex text-cinzaMedio text-xl justify-around mt-2">
              <span>React</span>
              <span>Typescript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-evenly items-center mt-5">
              <span className="text-white text-3xl mt-5 font-bold">
                Título do Projeto
              </span>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="filter brightness-0 invert cursor-pointer hover:scale-110 duration-500"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col min-w-[40%] h-96 mb-24">
            <div className="bg-cinzaClaro h-full rounded-xl cursor-pointer hover:scale-105 duration-500"></div>
            <div className="flex text-cinzaMedio text-xl justify-around mt-2">
              <span>React</span>
              <span>Typescript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-evenly items-center mt-5">
              <span className="text-white text-3xl mt-5 font-bold">
                Título do Projeto
              </span>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="filter brightness-0 invert cursor-pointer hover:scale-110 duration-500"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col min-w-[40%] h-96 mb-24">
            <div className="bg-cinzaClaro h-full rounded-xl cursor-pointer hover:scale-105 duration-500"></div>
            <div className="flex text-cinzaMedio text-xl justify-around mt-2">
              <span>React</span>
              <span>Typescript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-evenly items-center mt-5">
              <span className="text-white text-3xl mt-5 font-bold">
                Título do Projeto
              </span>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="filter brightness-0 invert cursor-pointer hover:scale-110 duration-500"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col min-w-[40%] h-96 mb-24">
            <div className="bg-cinzaClaro h-full rounded-xl cursor-pointer hover:scale-105 duration-500"></div>
            <div className="flex text-cinzaMedio text-xl justify-around mt-2">
              <span>React</span>
              <span>Typescript</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-evenly items-center mt-5">
              <span className="text-white text-3xl mt-5 font-bold">
                Título do Projeto
              </span>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                width={40}
                height={40}
                className="filter brightness-0 invert cursor-pointer hover:scale-110 duration-500"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Projects;
