/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white flex flex-row justify-around items-center bg-black mt-28 p-10 pt-5 ">
      <div className="flex w-1/3">
        <p>
          {" "}
          Je suis située à Mimizan dans les Landes mais je suis très à l'aise
          avec le travail à distance et je mettrai tous les outils à votre
          disposition pour que notre collaboration se passe comme si nous étions
          à côté!{" "}
        </p>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4 justify-center">
          <a href="https://www.facebook.com/cyriellewebdev/" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/cyr_webdev" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
        <Link href="#">Mentions légales</Link>
      </div>
    </div>
  );
};

export default Footer;
