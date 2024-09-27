import React from "react";
import heroImage from "../assets/heroimage.png";
import Button from "./Button";
import Blob from "./blob";

const Hero = () => {
  return (
    <section className="bg-teal-700 relative flex flex-col md:flex-row items-center justify-between md:px-20 px-4  pt-8 ">
      {/* Texte à gauche */}
      <div className="max-w-lg z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          TRANSFORMER VOS IDÉES EN{" "}
          <span className="text-yellow-500">RÉALITÉ.</span>
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl">
          Faites appel à un bricoleur passionné pour des solutions sur mesure et
          un travail de qualité.
        </p>
        <Button text="Contacter" />
      </div>

      {/* Image à droite */}
      <div className="relative w-full md:w-auto mt-12 md:mt-0 flex justify-center md:block">
        <Blob image={heroImage} />
      </div>
    </section>
  );
};

export default Hero;
