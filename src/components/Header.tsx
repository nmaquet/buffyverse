import React from "react";

const Header: React.FC = () => {
  return (
    <div className="pb-96">
      <img
        className="absolute ml-32 w-96 left-96"
        src="src/assets/header/moon.png"
        alt="Buffy the Vampire Slayer"
      />
      <img
        className="absolute w-1/3 mt-20 ml-64"
        src="src/assets/header/title-noclouds.png"
        alt="Buffy the Vampire Slayer"
      />
      <div className="absolute top-4 right-6">
        <a
          href="/doc"
          className="p-4 text-2xl text-white underline font-lacquer"
        >
          Doc
        </a>
        <a
          href="/about"
          className="p-4 text-2xl text-white underline cursor-pointer font-lacquer"
        >
          About
        </a>
      </div>
    </div>
  );
};
export default Header;
