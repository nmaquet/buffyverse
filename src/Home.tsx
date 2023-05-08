import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { people } from "./people.json";
import Page from "./components/Page";
import Filters from "./components/Filter";

const Home = () => {
  <div className="pt-6 bg-fixed bg-cover bg-center bg-[url('src/assets/header/sky.jpg')]">
    <div className="mx-64">
      <Header />
    </div>
    <Filters />
    <div className="flex justify-center my-10">
      <Page />
    </div>
    <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
      <ul
        role="list"
        className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-20"
      >
        {people.map((person) => (
          <Card {...person} />
        ))}
      </ul>
    </div>
    <Footer />
  </div>;
};

export default Home;
