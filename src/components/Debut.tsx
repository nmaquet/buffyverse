import { Debut as DebutType } from "../interfaces";

const Debut = ({ season, episode }: DebutType) => {
  return (
    <div className="flex justify-center">
      <p className="text-2xl text-black font-lacquer">
        Debut: E0{episode} S0{season}
      </p>
    </div>
  );
};
export default Debut;
