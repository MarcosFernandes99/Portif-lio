import NavBar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Projects } from "@/types/projects.interface";

const Projects = () => {
  const [data, setData] = useState<Projects[]>([]);
  const [originaldata, setOriginalData] = useState<Projects[]>([]);

  const techValue = (event: string) => {
    techSelect(event);
  };

  const techSelect = (e: string) => {
    const result = originaldata.filter((project) => {
      return project.tecnologias.includes(e);
    });

    console.log(result);
    setData(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/projects");
        const jsonData = await response.json();

        setData(jsonData);
        setOriginalData(jsonData);
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
          <span className="text-white text-5xl mt-24 flex justify-center">
            Portifólio
          </span>
          <span className="text-cinzaClaro text-2xl mt-5">
            Escolhe a tecnologia utilizada no projeto:
          </span>
        </div>

        <div className="flex justify-around mt-5 items-center w-[13.3rem] h-[3.3rem] bg-verde rounded-xl">
          <select
            name="Tech"
            id="Tech"
            onChange={(e) => techValue(e.target.value)}
            className="bg-black w-[13rem] h-[3rem] rounded-xl p-1 text-white text-xl"
          >
            <option value="" disabled selected hidden>
              Tecnologia
            </option>
            <option value="Nextjs">Nextjs</option>
            <option value="React">React</option>
            <option value="Typescript">Typescript</option>
            <option value="Javascript">Javascript</option>
            <option value="CSS">CSS</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
            <option value="REST Api">REST Api</option>
            <option value="SASS">SASS</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-evenly my-20 w-[70vw]">
          {data.map((item: Projects, index: number) => (
            <div className="flex flex-col mb-20">
              <div className="hover:scale-105 duration-500">
                <div className="object-contain">
                  <img
                    src={item.imagem}
                    alt="Imagem"
                    className="rounded-xl h-96 w-96"
                  />
                </div>
              </div>

              <div className="flex text-cinzaMedio justify-around text-xl mt-4">
                {item.tecnologias.map((tech, i) => (
                  <span key={i}>{tech}</span>
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
