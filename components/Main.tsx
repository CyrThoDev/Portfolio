import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 mt-10">
      <div className="flex flex-col items-center">
        <p className="font-beautiful text-center text-7xl lg:text-9xl">
          Cyrielle Thomas
        </p>
        <h2 className=" text-red text-4xl lg:text-4xl">
          Développeuse web fullstack
        </h2>
        <Link href="/">
          <Image
            src="/imagecyrlogo.png"
            width={200}
            height={200}
            alt="Logo"
            className="pb-4 tablet:flex"
          />
        </Link>
      </div>
      <Image
        src="/vague.png"
        width={200}
        height={200}
        alt="Logo"
        className="self-center tablet:flex"
      />
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <Image
          src="/photocyrsite.png"
          width={350}
          height={350}
          alt="Logo"
          loading="lazy"
          className="hidden ml-40 lg:flex"
        />
        <div className="flex flex-col  items-center gap-4 w-full lg:w-1/2 px-8">
          <p className="tracking-widest text-4xl mb-8">
            Quelques présentations{" "}
          </p>
          <p>
            Je suis Cyrielle, développeuse web passionnée par le design et la
            création d’applications web.{" "}
          </p>
          <p>
            J’ai découvert la programmation il y a 20 ans pendant mes études.
            J’ai commencé mon parcours professionnel dans d’autres domaines mais
            l’attrait pour le développement web a toujours été présent. J’ai
            continué à me former en parallèle en autodidacte et réalisé
            plusieurs sites web pour des amis. Devenant de plus en plus une
            évidence, j’ai décidé de reprendre un formation en développement web
            pour en faire mon métier à temps plein.
          </p>
          <p>
            Au delà de la technique , je suis captivée par l’aspect esthétique
            et le design que peut présenter un site web. Je vous propose de vous
            démarquer avec un site web sur mesure à la fois fonctionnel et
            visuellement attrayant.
          </p>
          <Link
            href="/apropos"
            className="w-2/4 border-2 text-center text-red border-red mt-10 p-4"
          >
            En savoir plus sur mon parcours
          </Link>
        </div>
      </div>
      <Image
        src="/vague.png"
        width={200}
        height={200}
        alt="Logo"
        className="self-center tablet:flex"
      />
      <div className="flex flex-col gap-4 text-center tablet:items-center mt-10">
        <p>
          Vous avez êtes une entreprise et avez besoin d'un prestataire
          ponctuel?
        </p>
        <p>
          Vous êtes un particulier ou un professionnel et avez besoin d'un site
          web pour votre activité?
        </p>
        <p className="tracking-widest text-4xl text-red m-8 px-8  ">
          Concrétisons ensemble vos projets !{" "}
        </p>
      </div>
      <Image
        src="/vague.png"
        width={200}
        height={200}
        alt="Logo"
        className="self-center tablet:flex"
      />
    </div>
  );
};

export default Main;
