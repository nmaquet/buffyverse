import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page from "./components/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Page title="about" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
