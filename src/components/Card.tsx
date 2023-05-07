import React from "react";
import Dropdown from "./Dropdown";
import { Character } from "../interfaces";
import Species from "./Species";
import Age from "./Age";
import Debut from "./Debut";

const MoreDetails = () => {
  const moreDetails = {
    loves: [
      { name: "Angel", id: 2 },
      { name: "Demons", id: 666 },
    ],

    kills: [{ name: "Angel", id: 2 }],
    RoseFromTheDead: [{ killedBy: "Angel", when: "Episode 2", id: 3 }],
  };

  return (
    <ul role="list" className="flex justify-center mt-6 gap-x-6">
      <li>
        <Dropdown type="loves" options={moreDetails.loves} />
      </li>
      <li>
        <Dropdown type="kills" options={moreDetails.kills} />
      </li>
      <li>
        <Dropdown type="deaths" options={moreDetails.RoseFromTheDead} />
      </li>
    </ul>
  );
};

const Card: React.FC<Character> = ({
  id,
  name,
  imageUrl,
  age,
  species,
  debut,
  onClick,
}) => {
  return (
    <div
      key={id}
      className="p-5 bg-[url('src/assets/frames/texture.jpg')] bg-cover rounded-md"
    >
      <div className="flex justify-center border-black">
        <li key={name} className="px-8 py-2 ">
          <img
            className="w-48 mx-auto md:w-56"
            src="https://flxt.tmsimg.com/assets/p7896403_b1t_v9_aa.jpg"
            alt=""
          />
          <div className="text-3xl tracking-tight text-black font-almendra">
            {name}
          </div>
          <Species species={species} />
          <Age age={age} />
          <Debut debut={debut} />
          <MoreDetails />
        </li>
      </div>
    </div>
  );
};

export default Card;
