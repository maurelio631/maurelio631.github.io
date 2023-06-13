import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

import FooterBackground from "../Assets/img/FooterBackground.png";
import TechMemoji from "../Assets/img/TechMemoji.webp";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center  text-white bg-black">
      <div className="flex flex-col justify-center items-center my-4">
        <p className="mt-4">Se quiser, entre em contato comigo</p>
        <div className="flex my-4">
          <a
            href="https://www.linkedin.com/in/marco-aur%C3%A9lio-449459109/"
            target="_blank"
          >
            <FaLinkedinIn
              href=""
              className="m-3 hover:scale-125 transition-all"
              fontSize={30}
            />
          </a>
          <a href="https://github.com/maurelio631" target="_blank">
            <FaGithub
              className="m-3 hover:scale-125 transition-all"
              fontSize={30}
            />
          </a>
          <a href="https://twitter.com/ymarc0" target="_blank">
            <FiTwitter
              className="m-3 hover:scale-125 transition-all"
              fontSize={30}
            />
          </a>
          <a href="mailto:marco.silva631@outlook.com">
            <AiOutlineMail
              className="m-3 hover:scale-125 transition-all"
              fontSize={30}
            />
          </a>
        </div>
        <a href="#">
          <img src={TechMemoji} className="w-32 my-4 hover:scale-150 transition-all" />
        </a>
        <p className="text-center my-4">
          Todos os direitos reservados &copy; 2022 - Design created by
          <span>
            <a href="https://linkr.bio/linhas.soutas" target="_blank" className="hover:text-pink-400"> @linhas.soutas&reg; </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
