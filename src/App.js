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
import Bg_Square_Top from "./svg/Bg_Square_Top";
import Bg_Square_Bottom from "./svg/Bg_Square_Bottom";
import Footer from "./components/Footer";
/* Styles*/
import "./styles/App.css";
import "./styles/Bg-Square.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="bg-square-top">
              <Bg_Square_Top />
          </div>
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Navigate to="/home" replace />} />
            <Route path={"home"} element={<Home />} />
            <Route path={"posts"} element={<Posts />} />
            <Route path={"about"} element={<About />} />
          </Routes>
        </div>
          <div className="bg-square-bottom">
              <Bg_Square_Bottom />
          </div>
          <Footer classname={"footer"} />
      </Router>
    </div>
  );
}

export default App;
