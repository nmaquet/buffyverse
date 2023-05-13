import { Link, useParams } from "react-router-dom";
import { people } from "./people.json";
import Card from "../components/Card";

const filterForSingleChar = (charName: string) => {
  const single = people.filter((name) => name.name === charName);
  return single;
};

const died = [{ killedBy: "The Master", date: "E12S01" }];
const lovers = ["Angel", "Spike", "Riley"];

const Character = () => {
  const { char } = useParams();
  const character = filterForSingleChar(`${char}`);

  return (
    <div className="flex justify-between mx-auto text-center animate-fadeInRight">
      <Card {...character} />
      <div className="flex-col">
        <div className="mb-3 ml-2 text-3xl bg-cover font-almendra bg-texture rounded-2xl">
          Lovers
          {lovers.map((lover, i) => (
            <div key={i} className="p-1 text-3xl">
              <Link className="text-2xl hover:text-red-900 " to={lover}>
                {lover}
              </Link>
            </div>
          ))}
        </div>
        <div className="p-2 ml-2 text-3xl bg-cover font-almendra bg-texture rounded-2xl">
          Killed By
          {died.map(({ killedBy, date }, i) => (
            <div key={i} className="flex-col">
              <Link
                className="text-2xl hover:text-red-900 "
                to={`c/${killedBy}`}
              >
                {killedBy}
              </Link>
              <br />
              <Link className="text-2xl hover:text-red-900 " to={`e/${date}`}>
                during {date}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/"
        className="w-10 h-10 rounded-md font-longCang text-white text-5xl px-3.5 py-2.5"
      >
        X
      </Link>
    </div>
  );
};

export default Character;
