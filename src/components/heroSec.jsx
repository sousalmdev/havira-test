import React from "react";
import havImage from "./img/logo-havira 1.png";

export const HeroSection = () => {
  return (
    <div className="bg-hav bg-center overflow-y-hidden bg-cover">
      <div className="bg-gradient-to-t from-black from-30% to-transparent backdrop-blur-sm text-white min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col h-svh justify-between p-8">
          <div className="flex flex-col justify-start ">
            <h2 className="text-3xl ">Uma iniciativa</h2>
            <img
              src={havImage}
              alt="havLogo"
              className="sm:w-80 w-56 h-auto mx-auto mb-4 "
            />
          </div>
          <div className="flex animate-fadeUp my-auto flex-col items-center justify-center">
            <h1 className="sm:text-7xl text-5xl font-semibold mb-4">
              Bem-vindo ao <span className="animate-colorChange">háv</span>
              Finder
            </h1>
            <p className="sm:text-2xl text-base md:w-8/12 w-11/12 mb-8">
              Localize usuários exclusivos e cadastre novos facilmente.
              Acessibilidade e segurança, o que você mais precisa, e o que mais
              temos.
            </p>
            <button className="bg-white text-black font-semibold sm:w-1/2 w-11/12 p-3 rounded hover:bg-havGreen hover:text-white transition">
              <a href="/home">Começar Agora</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
