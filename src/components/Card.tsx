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
    <div
      key={id}
      className="bg-[url('src/assets/frames/texture.jpg')] bg-cover rounded-3xl p-1 shadow-xl"
    >
      <div className="flex justify-center m-2 border-2 border-amber-400 rounded-3xl">
        <div className="flex-col">
          <div className="p-2 mb-4 text-4xl text-black font-almendra">
            {name}
          </div>
          {false && (
            <img
              className="mx-auto border-t-2 border-amber-400 mix-blend-multiply rounded-b-3xl"
              src="https://flxt.tmsimg.com/assets/p7896403_b1t_v9_aa.jpg"
              alt=""
            />
          )}
          {true && (
            <div className="m-2">
              <Age age={age} />
              <Species species={species} />
              <Debut debut={debut} />
              <div className="flex">
                <Accordion type="Kills" options={moreDetails.kills} />
                <Accordion type="Rip" options={moreDetails.RoseFromTheDead} />
                <Accordion type="Loves" options={moreDetails.loves} />
              </div>
            </div>
          )}
          {/* <div className="p-2 text-2xl text-black border-t-2 border-amber-400 font-almendra">
            She Who Hangs Out in Graveyards
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
