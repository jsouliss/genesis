import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BG_Square_2 from "./svg/BG_Square_2";
import BG_Square from "./svg/BG_Square";
import "./styles/component_styles/BG-Square.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className={"bg-square-top"}>
          <BG_Square />
        </div>
        <div className={"content"}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
      </Router>
      <div className={"bg-square-bottom"}>
        <BG_Square_2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
