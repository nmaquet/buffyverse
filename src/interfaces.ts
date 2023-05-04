interface Location {
  name: string;
  type: "Earth" | "Hell" | "Heaven" | "Demon-Demension" | "Past";
}

export interface Character {
  id: number;
  name: string;
  url?: string;
  age?: number;
  isAlive: boolean;
  species:
    | "Human"
    | "Vampire"
    | "Demon"
    | "Spirit"
    | "Robot"
    | "Werewolf"
    | "Witch"
    | "Zombie"
    | "God"
    | "Other";
  dated?: string[];
  firstAppearance: {
    season: number;
    episode: number;
    location: Location;
  };
  funFact?: string[];
  tags?: string[];
  onClick: (id: number) => void;
}

interface Episode {
  name: string;
  season: number;
  episode: number;
  characters: Character[];
  mainLocation: Location;
  url: string;
  description: string;
}
