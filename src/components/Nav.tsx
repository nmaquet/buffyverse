import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex">
      <Link to="/doc" className="p-4 text-3xl text-white font-lacquer">
        Doc
      </Link>
      <Link
        className="p-4 text-3xl text-white cursor-pointer font-lacquer"
        to="/about"
      >
        About
      </Link>
    </div>
  );
};

export default Nav;
