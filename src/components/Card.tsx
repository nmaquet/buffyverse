import React from "react";
import Accordion from "./Accordion";
import { Character } from "../interfaces";
import Species from "./Species";
import Age from "./Age";
import Debut from "./Debut";

const Card: React.FC<Character> = ({
  id,
  name,
  imageUrl,
  age,
  species,
  debut,
  onClick,
}) => {
  const moreDetails = {
    loves: [
      { name: "Angel", id: 2 },
      { name: "Demons", id: 666 },
    ],

    kills: [{ name: "Angel", id: 2 }],
    RoseFromTheDead: [{ name: "Master", id: 90 }],
  };

  return (
    <div className="w-[300px] h-[470px] group perspective">
      <div className="relative w-full h-full duration-1000 preserve-3d group-hover:my-rotate-y-180 bg-[url('src/assets/frames/texture.jpg')] bg-cover rounded-3xl">
        <div className="absolute w-full h-full p-1 border-2 backface-hidden border-amber-400 rounded-3xl ">
          <div className="p-2 m-2 text-4xl text-black font-almendra">
            {name}
          </div>
          <div className="border-2 border-amber-400 rounded-3xl">
            <img
              className="mx-auto mix-blend-multiply rounded-3xl"
              src="https://flxt.tmsimg.com/assets/p7896403_b1t_v9_aa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute w-full h-full overflow-hidden border-2 my-rotate-y-180 backface-hidden border-amber-400 rounded-3xl">
          <div className="flex-col ">
            <div className="p-2 mt-2 text-4xl text-black font-almendra">
              {name}
            </div>
            <div className="mt-4">
              <Age age={age} />
              <Species species={species} />
              <Debut debut={debut} />
              <div className="flex">
                <Accordion type="Kills" options={moreDetails.kills} />
                <Accordion type="Rip" options={moreDetails.RoseFromTheDead} />
                <Accordion type="Loves" options={moreDetails.loves} />
              </div>
            </div>
            <div className="p-2 text-2xl text-black border-t-2 border-amber-400 font-almendra">
              She Who Hangs Out in Graveyards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
