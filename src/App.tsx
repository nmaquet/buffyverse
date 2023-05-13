import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./RootLayout";
import Docs from "./Pages/Docs";
import About from "./Pages/About";
import Deck from "./Pages/Deck";
import Character from "./Pages/Charater";
import { loader } from "./components/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Deck />} loader={loader} />
      <Route path="/:char" element={<Character />} loader={loader} />
      <Route path="/about" element={<About />} />
      <Route path="/doc" element={<Docs />} />
      <Route path="*" element={<div>No Match</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading</p>} />;
}

export default App;
