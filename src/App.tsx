import { useState } from "react";
import Card from "./components/Card";
import people from "./people.json";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="py-24 sm:py-32 bg-fixed bg-cover bg-center bg-[url('src/assets/944296.jpg')]">
      <Header />
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.people.map((person) => (
            <Card {...person} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
