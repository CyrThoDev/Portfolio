import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-red text-white flex flex-col justify-between items-center px-10 tablet:flex-row">
        <div className="py-4 flex flex-col gap-4 items-center tablet:flex-row">
          <p className="">cyriellethomas.pro@gmail.com</p>
          <p>07 61 15 09 13</p>
        </div>
        <div className="py-4 flex flex-row gap-4">
          <a href="https://www.facebook.com/cyriellewebdev/" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/cyr_webdev" target="_blank">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-2xl items-center text-center justify-center lg:justify-end bg-background tablet:flex-row">
        <div className="flex gap-4 my-4 tablet:mr-20 ">
          <Link href="/projets">Mes réalisations</Link>
          <Link href="/prestations">Vous avez un projet?</Link>
          <Link href="/apropos">A propos</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
