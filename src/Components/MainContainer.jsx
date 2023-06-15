import React from "react";

import { Progress, Stack } from "@chakra-ui/react";

import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";

import Eu from "../Assets/img/eu.jpeg";
import Code from "../Assets/img/code.png";
import SenacLogo from "../Assets/img/SenacLogo.png";
import UninoveLogo from "../Assets/img/LogoUninove.jpeg";
import AugmensysLogo from "../Assets/img/AugmensysLogo.jpg";
import ConfitecLogo from "../Assets/img/ConfitecLogo.jpg";
import RochelleGif from "../Assets/img/rochelle.gif";
import GoToTopBtn from "./GoToTopBtn";

import PuraColuna from "../Assets/img/PuraColuna.png";
import AQuiropraxia from "../Assets/img/AQuiropraxia.png";

export default function MainContainer() {
  return (
    <main>
      <section className="bg-black  flex flex-col p-10" id="SobreMim">
        <h2 className="text-white text-center ">Sobre mim</h2>
        <div className="flex flex-col items-center">
          <img
            src={Eu}
            alt="Minha foto"
            typeof="img/jpeg"
            className="w-32 mt-5 rounded-full"
          />
          <p className="text-white mt-12 text-center md:text-justify">
            Oi, eu sou o Marco! Tenho 22 anos e se você caiu aqui de
            para-quedas, esse é meu portfólio, o lugar onde você vai poder
            conhecer um pouco sobre mim, sobre as coisas que eu estou
            aprendendo, trabalhos que eu executei e o que está em andamento por
            aqui.
          </p>
          <p className="text-white mt-12 text-center md:text-justify ">
            Pra começar, eu vou contar um pouco sobre os cursos que eu fiz e os
            que estão prestes a terminar:
          </p>
        </div>
      </section>
      <section
        className=" flex flex-col p-10 bg-black text-white"
        id="Educacao"
      >
        <h2 className="text-white text-center"> Educação</h2>
        <p className="text-center mt-5">
          Aqui você encontra os principais cursos que fiz e estou fazendo,
          porque estudar nunca é demais!
        </p>
        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-wrap justify-center">
            <div className="h-72 w-64 border-2 border-lime-500 m-4 flex flex-col justify-center items-center">
              <img
                className="rounded-full w-1/2"
                src={SenacLogo}
                alt="Logo Senac"
              />
              <p className="mt-5">Iniciação em Linguagem Java</p>
              <p className="mt-4">
                Status: <span className="text-lime-500">Concluído</span>
              </p>
              <AiFillCheckCircle className="text-lime-500 mt-2" />
            </div>
            <div className="h-72 w-64 border-2 border-lime-500 m-4 flex flex-col justify-center items-center">
              <img
                className="rounded-full w-1/2"
                src={SenacLogo}
                alt="Logo Senac"
              />
              <p className="mt-5">Lógica de Programação</p>
              <p className="mt-4">
                Status: <span className="text-lime-500">Concluído</span>{" "}
              </p>
              <AiFillCheckCircle className="text-lime-500 mt-2" />
            </div>
            <div className="h-72 w-64 border-2 border-lime-500 m-4 flex flex-col justify-center items-center">
              <img
                className="rounded-full w-1/2"
                src={SenacLogo}
                alt="Logo Senac"
              />
              <p className="mt-5">Técnico em Informática</p>
              <p className="mt-4">
                Status: <span className="text-lime-500">Concluído</span>{" "}
              </p>
              <AiFillCheckCircle className="text-lime-500 mt-2" />
            </div>
            <div className="h-72 w-64 border-2 border-lime-500 m-4 flex flex-col justify-center items-center">
              <img
                className="rounded-full w-1/2"
                src={UninoveLogo}
                alt="Logo Uninove"
              />
              <p className="mt-5 text-center">Ciência da Computação</p>
              <p className="mt-4">
                Status: <span className="text-lime-500">Concluído</span>{" "}
              </p>
              <AiFillCheckCircle className="text-lime-500 mt-2" />
            </div>
          </div>
        </div>
      </section>
      <section
        className=" flex flex-col p-10 bg-black text-white"
        id="Experiencia"
      >
        <h2 className="text-white text-center">Experiência</h2>
        <p className="text-center mt-5 md:text-center">
          Por conta das coisas que eu aprendi nesses cursos eu tive/tenho a
          oportunidade de mostrar o que eu sei e aprender mais ainda nesses
          lugares:
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-center mt-10">
          <div className="flex flex-col md:mx-8 items-center">
            <img
              className="rounded bg-white w-60 h-60"
              src={AugmensysLogo}
              alt="Logo Augmensys"
            />
            <p className="text-center mt-5">
              <span className="text-red-500">Cargo: </span>Estagiário em
              desenvolvimento front-end
            </p>
          </div>
          <div className="flex flex-col md:mx-8 mt-5 md:mt-0">
            <img
              className="rounded w-60 h-60"
              src={ConfitecLogo}
              alt="Logo Confitec"
            />
            <p className="text-center mt-5">
              <span className="text-lime-500">Cargo: </span>Analista de sistemas
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 text-center">
          <p>Mas nem só de um trabalho vive um dev não é mesmo...</p>
          <img
            className="my-5"
            src={RochelleGif}
            alt="Gif Rochelle Meu marido tem dois empregos"
          />
          <p>
            E é por isso que aqui tenho mais alguns trabalhos que estão no ar:
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center my-10">
          <div className="flex flex-col items-center mx-5 hover:scale-150 transition-all">
            <h3>A Quiropraxia</h3>
            <div className="w-80">
              <a href="https://aquiropraxia.com.br" target="_blank">
                <img
                  src={AQuiropraxia}
                  className="rounded-md"
                  alt="Captura de tela do site a quiropraxia"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center hover:scale-150 transition-all">
            <h3>Pura Coluna</h3>
            <div className="w-80">
              <a href="https://puracoluna.com.br" target="_blank">
                <img
                  src={PuraColuna}
                  className="rounded-md"
                  alt="Captura de tela do site pura coluna"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" flex flex-col p-10 bg-black text-white"
        id="Habilidades"
      >
        <h2 className="text-white text-center">Tecnologias</h2>
        <p className="text-center mt-5">
          Aqui você encontra as tecnologias com as quais eu trabalhei e trbalho,
          e o meu nível aproximado de familiaridade com cada uma delas
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 ">
          <div className="flex flex-col md:m-8">
            <div className="mt-10">
              <label>HTML</label>
              <Progress
                width={120}
                rounded="md"
                value={75}
                colorScheme="green"
              />
            </div>
            <div className="mt-10">
              <label>CSS</label>
              <Progress
                width={120}
                rounded="md"
                value={60}
                colorScheme="green"
              />
            </div>
            <div className="mt-10">
              <label>JS</label>
              <Progress
                width={120}
                rounded="md"
                value={45}
                colorScheme="green"
              />
            </div>
            <div className="mt-10">
              <label>TS</label>
              <Progress
                width={120}
                rounded="md"
                value={10}
                colorScheme="green"
              />
            </div>
          </div>
          <div className="flex flex-col md:m-8">
            <div className="mt-10">
              <label>C#</label>
              <Progress
                width={120}
                rounded="md"
                value={25}
                colorScheme="green"
                _placeholder="teste"
              />
            </div>
            <div className="mt-10">
              <label>Angular</label>
              <Progress
                width={120}
                rounded="md"
                value={30}
                colorScheme="green"
              />
            </div>
            <div className="mt-10">
              <label>React</label>
              <Progress
                width={120}
                rounded="md"
                value={45}
                colorScheme="green"
              />
            </div>
            <div className="mt-10">
              <label>Tailwind</label>
              <Progress
                width={120}
                rounded="md"
                value={45}
                colorScheme="green"
              />
            </div>
          </div>
        </div>
        <GoToTopBtn />
      </section>
    </main>
  );
}
