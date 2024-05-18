"use client";

import React, { useState } from "react";
import Image from "next/image";
import setaDireita from "../public/seta-direita.png";
import fotoInicio from "../public/foto-inicio.png";
import iconTelefone from "../public/telefone.png";
import iconEmail from "../public/email.png";
import check from "../public/check.png";
import estrela from "../public/estrela.png";
import enviar from "../public/enviar.png";
import Link from "next/link";
import NavBar from "../app/components/navbar";
import Footer from "../app/components/footer";
import wheatherApp from "../public/wheather_app.png";
import todoApp from "../public/todo_app.png";
import Swal from "sweetalert2";
import "../app/globals.css";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const downloadCV = () => {
  const cv =
    "https://drive.google.com/file/d/1WyDjhkSbkWgsaU3va9MDlBvMdJg5smqA/view?usp=sharing";

  window.open(cv, "_blank");
};

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const sendMessage = async () => {
    if (!name || !email || !phone || !subject || !message) {
      // Verificar se todos os campos estão preenchidos antes de continuar
      Swal.fire(
        "Por favor, preencha todos os campos do formulário!",
        "",
        "error"
      );
      return;
    }
    const data = {
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/nVYcKZPoMNrYW8F9DtCWTd",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        Swal.fire("Mensagem enviada com sucesso!", "", "success");
        // Limpar os campos após o envio bem-sucedido
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      Swal.fire(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
        "",
        "error"
      );
    }
  };

  return (
    <>
      <NavBar></NavBar>

      <section
        className="bg-cinzaEscuro min-w-screen min-h-screen flex justify-around"
        id="inicio"
      >
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
            <button
              className="bg-verde text-2xl p-2 rounded-2xl hover:bg-black hover:text-white font-bold duration-500"
              onClick={scrollToBottom}
            >
              Contate-Me
            </button>
            <button
              className="text-white ml-16 text-2xl transition-transform transform hover:scale-110 duration-500 font-bold flex items-center"
              onClick={downloadCV}
            >
              Download CV
              <Image
                src={setaDireita}
                alt="Seta Direita"
                className="w-4 h-4 ml-3 filter brightness-0 invert"
              ></Image>
            </button>
          </div>
        </div>
        <div className="rounded-full bg-black w-[40%] h-[80vh] mt-24">
          <Image
            src={fotoInicio}
            alt="Foto Inicio"
            className="object-contain mt-8"
          ></Image>
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row bg-black min-w-screen min-h-[35rem] md:justify-around"
        id="sobre"
      >
        <div className="flex flex-col w-[80%] mx-6 md:w-[40%]">
          <span className="text-cinzaMedio text-2xl mt-10">Sobre mim</span>
          <span className="text-white text-5xl mt-4">
            Profissional{" "}
            <span className="text-verde">Desenvolvedor Front End</span>
          </span>
          <span className="text-white mt-8 text-justify">
            Desenvolvedor front-end apaixonado por transformar ideias em
            experiências digitais atrativas. Acredito que cada projeto é uma
            oportunidade de criar algo único e impactante. Minha jornada no
            mundo da tecnologia é impulsionada pela busca constante por
            conhecimento. Estou sempre aberto a novos desafios e colaborações.
            Seja bem-vindo ao meu espaço virtual, onde a paixão pela criação se
            encontra com a expertise técnica.
          </span>
          <div className="flex justify-around bg-cinzaClaro min-h-28 rounded-3xl mt-10 ">
            <div className="flex items-center transition-transform transform hover:scale-110 duration-500">
              <span className="bg-verde rounded-full w-7 h-7">
                <Image src={iconEmail} alt="icon email" className="p-1"></Image>
              </span>
              <div className="flex flex-col justify-center ml-2">
                <span className="text-cinzaClaro">E-mail</span>
                <a
                  href="mailto:marcosdev@zohomail.com"
                  target="_blank"
                  className="text-white font-bold "
                >
                  marcosdev@zohomail.com
                </a>
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
                <a
                  href="https://wa.me/5511988591854"
                  target="_blank"
                  className="text-white font-bold "
                >
                  +55 11 98859-1854
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] md:w-[40%] mt-10 mx-6 mb-10">
          <span className="text-cinzaMedio text-2xl">Serviços</span>
          <div className="flex items-center mt-5">
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

      <section
        className="flex flex-col bg-cinzaClaro min-w-screen min-h-[35rem] justify-around md:flex-row"
        id="habilidades"
      >
        <div className="flex flex-col mt-10 w-[85%] md:w-[40%] mx-10">
          <span className="text-white text-2xl">Habilidades</span>
          <span className="text-white text-5xl mt-5">
            Vamos explorar{" "}
            <span className="text-verde">minhas habilidades</span>
          </span>
          <span className="text-justify text-white mt-10">
            Profissional com sólida experiência nas últimas tecnologias do
            mercado. Apaixonado por transformar ideias em realidade digital.
            Especializado na criação não apenas de sites intuitivos e atrativos,
            mas também em sistemas personalizados, como menus interativos e
            eficientes sistemas de agendamento online para o seu negócio.
          </span>
          <div className="flex">
            <button
              className="bg-verde p-2 mt-10 text-2xl rounded-2xl hover:bg-black hover:text-white font-bold duration-500"
              onClick={scrollToBottom}
            >
              Contate-me
            </button>
          </div>
        </div>
        <div className="flex my-10 mx-10 w-[85%] justify-center flex-wrap md:w-[40%]">
          <div className="flex mb-5 flex-col items-center bg-cinzaMedio p-2 h-32 w-24 md:h-36 md:w-28 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                }
                alt="React"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-xl mt-5 md:mt-10 text-white">
              React
            </span>
          </div>
          <div className="flex mb-5 flex-col items-center bg-cinzaMedio p-2 h-32 w-24 md:h-36 md:w-28 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                }
                alt="Typeescript"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-5 md:mt-10">
              Typescript
            </span>
          </div>
          <div className="flex flex-col mb-5 items-center bg-cinzaMedio p-2 h-32 w-24 md:h-36 md:w-28 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                }
                alt="Next.js"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-5 md:mt-10">
              Next.js
            </span>
          </div>
          <div className="flex flex-col mb-5 items-center bg-cinzaMedio p-2 h-32 w-24 mx-6 md:h-36 md:w-28 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                }
                alt="Tailwind CSS"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-5 md:mt-10">
              Tailwind
            </span>
          </div>
          <div className="flex flex-col mb-5 items-center bg-cinzaMedio p-2 h-32 w-24 md:h-36 md:w-28 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
                }
                alt="Nodejs"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-5 md:mt-10">
              Node.js
            </span>
          </div>
          <div className="flex flex-col mb-5 items-center bg-cinzaMedio p-2 h-32 w-24 md:h-36 md:w-28 mx-6 rounded-2xl transition-transform transform hover:scale-110 duration-500">
            <span>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                }
                alt="Javascript"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mb-auto text-white text-xl mt-5 md:mt-10">
              Javascript
            </span>
          </div>
        </div>
      </section>

      <section
        className="min-w-screen min-h-screen bg-black flex flex-col items-center"
        id="projetos"
      >
        <div className="flex flex-col items-center h-40 mt-16">
          <span className="text-cinzaMedio text-xl">
            Trabalhos mais recentes
          </span>
          <span className="text-white text-4xl">
            Explore meus <span className="text-verde">Projetos Populares</span>
          </span>
        </div>
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
        <Link
          href="/projects"
          className="bg-verde p-2 text-2xl rounded-xl font-bold hover:scale-110 duration-500 items-center flex my-16 cursor-pointer"
        >
          Ver mais projetos{" "}
          <Image
            src={setaDireita}
            alt="Seta Direita"
            className="w-4 h-4 ml-3"
          ></Image>
        </Link>
      </section>

      <section
        className="flex flex-col md:flex-row bg-cinzaClaro min-w-screen min-h-[35rem] justify-around items-center"
        id="contato"
      >
        <div className="flex flex-col w-[85%] md:w-[40%] mt-10">
          <span className="text-cinzaClaro text-2xl">Contato</span>
          <span className="text-white text-5xl mt-5">
            Vamos conversar sobre seus{" "}
            <span className="text-verde">próximos projetos</span>
          </span>
          <span className="text-cinzaClaro mt-10 text-justify">
            Obrigado por visitar meu portfólio. Para iniciarmos uma conversa
            sobre como posso contribuir para o seu projeto, por favor, preencha
            o formulário ao lado. Estou comprometido em responder prontamente.
            Até logo!
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

        <div className="flex w-[85%] md:w-[40%] mt-10">
          <form action="">
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col mt-5 w-[45%]">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Nome <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-cinzaMedio rounded-xl mt-2 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-5 w-[45%]">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  E-mail <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-cinzaMedio rounded-xl mt-2 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-5 w-[45%]">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Telefone <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-cinzaMedio rounded-xl mt-2 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-5 w-[45%]">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Assunto <span className="text-verde text-2xl">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-cinzaMedio rounded-xl mt-2 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
              <div className="flex flex-col mt-10 flex-grow w-full">
                {" "}
                <label htmlFor="" className="text-white text-xl">
                  Mensagem <span className="text-verde text-2xl">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-cinzaMedio rounded-xl mt-2 min-h-24 text-white p-2 text-xl focus:outline-none focus:ring-2 focus:ring-verde"
                />
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              className="bg-verde flex my-10 p-2 text-xl rounded-xl items-center font-bold hover:scale-110 duration-500"
            >
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
