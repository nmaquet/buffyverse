import { Link, useParams } from "react-router-dom";
import { people } from "./people.json";
import Card from "../components/Card";

const Character = () => {
  const { charId } = useParams();
  const char = parseInt(charId);
  const person = people.find(({ id }) => id === char);
  return (
    <div className="flex justify-between mx-auto text-center animate-fadeInRight">
      <Card {...person} />
      <div className="flex-col">
        <div className="mb-3 ml-2 text-3xl bg-cover font-almendra bg-texture rounded-2xl">
          Lovers
          {person &&
            person?.relationships.map((person, i) => (
              <div key={i} className="p-1 text-3xl">
                <Link
                  className="text-2xl hover:text-red-900 "
                  to={`/${person.id}`}
                >
                  {person.name}
                </Link>
              </div>
            ))}
        </div>
        {/* <div className="p-2 ml-2 text-3xl bg-cover font-almendra bg-texture rounded-2xl">
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
        </div> */}
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
