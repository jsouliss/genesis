/* Routes */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
/* Components */
import Navbar from "./components/Navbar";
import BG_Square_2 from "./svg/BG_Square_2";
import BG_Square from "./svg/BG_Square";
import Footer from "./components/Footer";
/* Styles*/
import "./App.css";
import "./styles/component_styles/BG-Square.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Navigate to="/home" replace />} />
            <Route path={"home"} element={<Home />} />
            <Route path={"posts"} element={<Posts />} />
            <Route path={"about"} element={<About />} />
          </Routes>
        </div>
      </Router>
      <div className="bg-square-top">
        <BG_Square />
      </div>
      <div className="bg-square-bottom">
        <BG_Square_2 />
      </div>
      <Footer classname={"footer"} />
    </div>
  );
}

export default App;
