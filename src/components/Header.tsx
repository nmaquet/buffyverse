import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <img
        className="justify-center opacity-50 place-self-center"
        src="src/assets/moon.png"
        alt="Buffy the Vampire Slayer"
      />
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Buffy the Vampire Slayer
        </h2>
      </div>
    </div>
  );
};
