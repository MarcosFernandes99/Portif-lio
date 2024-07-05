import Nav from "../app/components/Nav";
import Rodape from "../app/components/Rodape";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Projects } from "@/types/projects.interface";
import MenuSelect from "@/app/components/MenuSelected";
import { scrollToSection } from "@/utils/scrollSection";
import wheatherApp from "../public/wheather_app.png";
import todoApp from "../public/todo_app.png";
import registroelogin from "../public/registroelogin.jpg";
import "../app/globals.css";

const Project = () => {
  // const [data, setData] = useState<Projects[]>([]);
  // const [originaldata, setOriginalData] = useState<Projects[]>([]);

  // const techValue = (event: string) => {
  //   techSelect(event);
  // };

  // const techSelect = (e: string) => {
  //   const result = originaldata.filter((project) => {
  //     return project.tecnologias.includes(e);
  //   });

  // console.log(result);
  // setData(result);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/api/projects");
  //       const jsonData = await response.json();

  //       setData(jsonData);
  //       setOriginalData(jsonData);
  //     } catch (error) {
  //       console.error("Erro ao obter dados do MongoDB;", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <MenuSelect scrollToSection={scrollToSection}></MenuSelect>
      <Nav scrollToSection={scrollToSection}></Nav>

      <section className="min-w-screen min-h-screen bg-cinzaEscuro flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-20">
          <span className="text-white text-5xl mt-24 flex justify-center">
            Portifólio
          </span>
          {/* <span className="text-cinzaClaro text-2xl mt-5 flex justify-center items-center">
            Escolhe a tecnologia utilizada no projeto:
          </span> */}
        </div>

        {/* <div className="flex justify-around mt-5 items-center w-[13.3rem] h-[3.3rem] bg-verde rounded-xl">
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
        </div> */}

        <div className="flex flex-col md:flex-row justify-around w-[70%] min-h-80">
          <div className="w-full md:w-[35%] transition-transform transform hover:scale-110 duration-500">
            <Image
              src={wheatherApp}
              alt="Wheather App"
              className="object-cover rounded-xl"
            ></Image>
          </div>
          <div className="flex flex-col justify-center w-full md:w-[35%]">
            <span className="text-verde text-xl">Wheather App</span>
            <span className="text-white text-4xl mt-5">
              Aplicativo de previsão de tempo
            </span>
            <span className="text-cinzaMedio mt-5 text-justify">
              É um projeto desenvolvido para mobile, onde o usuário tem a opção
              de pesquisar a temperatura da sua respectiva cidade ou qualquer
              outra que seja.
            </span>
            <div className="mt-10 hover:scale-105 duration-500">
              <a
                className="bg-verde p-2 text-xl rounded-xl font-bold"
                href="https://github.com/MarcosFernandes99/weather-app"
                target="_blank"
              >
                Ver mais...
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-around w-[70%] min-h-80 mt-16">
          <div className="flex flex-col justify-center w-full md:w-[35%]">
            <span className="text-verde text-xl">Todo APP</span>
            <span className="text-white text-4xl mt-5">
              {" "}
              Aplicativo de agendamento de tarefas
            </span>
            <span className="text-cinzaMedio mt-5 text-justify">
              É um projeto onde o usuário tem a opção de inserir suas tarefas,
              marcá-las como concluída ou se preferir exclui-las, como também
              tem a opção de limpar a lista, onde todas as tarefas são
              deletadas.
            </span>
            <div className="mt-10 transition-transform transform hover:scale-105 duration-500">
              <a
                href="https://github.com/MarcosFernandes99/todo-app?tab=readme-ov-file"
                target="_blank"
                className="bg-verde p-2 text-xl rounded-xl font-bold cursor-pointer"
              >
                Ver mais...
              </a>
            </div>
          </div>
          <div className="w-full md:w-[35%] transition-transform transform hover:scale-110 duration-500">
            <Image
              src={todoApp}
              alt="Todo App"
              className="rounded-xl object-cover"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-[70%] min-h-80 my-16">
          <div className="w-full md:w-[35%] transition-transform transform hover:scale-110 duration-500">
            <Image
              src={registroelogin}
              alt="Registro e Login"
              className="object-contain rounded-xl"
            ></Image>
          </div>
          <div className="flex flex-col justify-center w-full md:w-[35%]">
            <span className="text-verde text-xl">Registro e Login</span>
            <span className="text-white text-4xl mt-5">
              Teste de Registro e Login
            </span>
            <span className="text-cinzaMedio mt-5 text-justify">
              É um projeto onde o usuário faz o registro de uma conta, esses
              dados serão armazenados no Local Storage. A seguir, o usuário é
              direcionado a tela de login, onde ele precisa colocar o e-mail e
              senha registrados anteriormente. Após análise dos dados, se
              estiverem corretos, ele é direcionada ao Portal de notícias.
            </span>
            <div className="mt-10 hover:scale-105 duration-500">
              <a
                className="bg-verde p-2 text-xl rounded-xl font-bold"
                href="https://github.com/MarcosFernandes99/registerLogin"
                target="_blank"
              >
                Ver mais...
              </a>
            </div>
          </div>
        </div>
      </section>

      <Rodape></Rodape>
    </>
  );
};

export default Project;
