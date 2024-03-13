import NavBar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Projects, Technologys } from "@/types/projects.interface";
import getTechs from "@/services/api/getTechs";

const Projects = () => {
  const [data, setData] = useState<Projects[]>([]);
  const [technology, setTechnology] = useState<Technologys[]>([]);

  console.log(technology);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/projects");
        const jsonData = await response.json();
        const resultTech = await getTechs();

        let i = 0;
        let techArray: any = [];

        for (i = 0; i < resultTech.length; i++) {
          techArray.push(resultTech[i].tecnologias);
        }

        setData(jsonData);
        setTechnology(techArray);
      } catch (error) {
        console.error("Erro ao obter dados do MongoDB;", error);
      }
    };

    fetchData();
  }, []);

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

        <div className="flex justify-evenly my-20 w-screen">
          {data.map((item: Projects, index: number) => (
            <div className="flex flex-col">
              <div className="hover:scale-105 duration-500 w-full">
                <div className="object-contain">
                  <img
                    src={item.imagem}
                    alt="Imagem"
                    className="rounded-xl h-96 w-96"
                  />
                </div>
              </div>

              <div className="flex text-cinzaMedio justify-around text-xl mt-4">
                {technology[index].map((tech: number, i: number) => (
                  <span key={i} className="">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-evenly items-center mt-5">
                <span className="text-white text-3xl mt-5 font-bold">
                  {item.titulo}
                </span>
                <a href={item.urlGit} target="_blank">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                    alt="GitHub"
                    width={40}
                    height={40}
                    className="filter brightness-0 invert cursor-pointer hover:scale-125 duration-500"
                  ></Image>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Projects;
