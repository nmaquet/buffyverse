import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      <img
        className="absolute mr-72 right-80 opacity-80"
        src="src/assets/moon.png"
        alt="Buffy the Vampire Slayer"
      />
      <img
        className="w-1/3 mx-auto mix-blend-lighten invert"
        src="src/assets/BF-0797b-1.png"
        alt="Buffy the Vampire Slayer"
      />
      <div className="absolute top-4 right-6">
        <a href="/#" className="p-4 text-2xl text-white underline">
          Doc
        </a>
        <a
          href="/#"
          className="p-4 text-2xl text-white underline cursor-pointer"
        >
          About
        </a>
      </div>
    </div>
  );
};
export default Header;
