import React from "react";
import HeaderSecondaire from "@/components/HeaderSecondaire";
import Link from "next/link";

export default async function Porfolio() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <HeaderSecondaire />
        </div>
        <p className="text-center mt-10">
          Une présentation des projets réalisés sera bientôt disponible
        </p>
      </div>
      {/* <div className="flex flex-row align-center gap-2 mx-40">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="flex flex-col items-center gap-4 m-4 border-2 border-solid border-red "
          >
            <h3>{projet.name}</h3>
            <h3>{projet.shortdesc}</h3>
            <p>{projet.longdesc}</p>
            <Link href={projet.github} target="_blank">
              Lien Github
            </Link>
            <Link href={projet.website} target="_blank">
              Site web
            </Link>
          </div>
        ))}
      </div> */}
    </>
  );
}
