import { SpeciesType } from "../interfaces";

const Species = (species: SpeciesType) => {
  console.log(species);
  const s = [
    "werewolf",
    "demon",
    "key",
    "mr-pointy",
    "watcher",
    "human",
    "bite",
  ];
  return (
    <div className="flex">
      <img className="w-10" src={`src/assets/icons/${s[0]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[1]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[2]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[3]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[4]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[5]}.png`} alt="stack" />
      <img className="w-10" src={`src/assets/icons/${s[6]}.png`} alt="stack" />
    </div>
  );
};

export default Species;
