import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Teclado from "../Assets/img/teclado.png";
import Like from "../Assets/img/LikeMemoji.webp";

export default function NavBar() {
  const textoH1 = "Oi, eu sou o Marco :)";
  const botaoToggle = document.querySelector("#toggleMenu");
  const navbarLinks = document.querySelector("#navbarLinks");
  const [navbarOpen, setNavbarOpen] = useState(false);
  function ocultarMenu() {
    navbarLinks.classList.toggle("hidden");
    if (botaoToggle.classList.contains("hidden")) {
      navbarLinks.classList.remove("hidden");
    }
  }

  return (
    <header>
      <nav className="flex flex-col md:flex-row justify-center md:justify-around items-center bg-black text-white text-base py-5 relative">
        <div className="">
          <a href="index.html" className="text-xl">
            <h1 className="m-8">{textoH1}</h1>
          </a>
          <button
            className="absolute top-12 right-8 cursor-pointer md:hidden"
            id="toggleMenu"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {navbarOpen ? (
              <AiOutlineClose size="2em" />
            ) : (
              <GiHamburgerMenu size="2em" />
            )}
          </button>
        </div>
        <ul className={navbarOpen ? "d-block" : "hidden"} id="navbarLinks">
          <li className="p-4 text-center">
            <Link
              to="SobreMim"
              spy={true}
              offset={-100}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-2 hover:border-lime-500 text-center"
            >
              Sobre mim{" "}
            </Link>
          </li>
          <li className="p-4 text-center">
            <Link
              to="Educacao"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer hover:border-b-2 hover:border-lime-500"
            >
              {" "}
              Educação
            </Link>
          </li>
          <li className="p-4 text-center">
            <Link
              to="Experiencia"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer hover:border-b-2 hover:border-lime-500"
            >
              Experiência
            </Link>
          </li>
          <li className="p-4 text-center">
            <Link
              to="Habilidades"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer hover:border-b-2 hover:border-lime-500"
            >
              Habilidades
            </Link>
          </li>
          <div className="flex p-4">
            <a
              href="https://www.linkedin.com/in/marco-aur%C3%A9lio-449459109/"
              target="_blank"
            >
              <FaLinkedinIn
                fontSize="1.7rem"
                className="mx-4 hover:scale-125 transition-all"
              />
            </a>
            <a href="https://github.com/maurelio631" target="_blank">
              <FaGithub
                fontSize="1.7rem"
                className="mx-4 hover:scale-125 transition-all"
              />
            </a>
            <a href="https://twitter.com/ymarc0" target="_blank">
              <FiTwitter
                fontSize="1.7rem"
                className="mx-4 hover:scale-125 transition-all"
              />
            </a>
            <a href="mailto:marco.silva631@outlook.com">
              <AiOutlineMail
                fontSize="1.7rem"
                className="mx-4 hover:scale-125 transition-all"
              />
            </a>
          </div>
        </ul>
      </nav>

      <div className="relative text-center">
        <img src={Teclado} alt="teclado" className="h-80 w-full" />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex">
          <div className="flex flex-col items-center">
            <img
              src={Like}
              typeof="image/webp"
              alt="Memoji sorrindo e fazendo positivo com a mão"
              className="w-32 hover:scale-150 transition-all"
            />
            <h2 className="text-white font my-3">Marco Aurélio Sousa Silva</h2>
            <p className="text-white">Desenvolvedor Fullstack</p>
          </div>
        </div>
      </div>
    </header>
  );
}
