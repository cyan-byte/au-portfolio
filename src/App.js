import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./routes/Work";
import About from "./routes/About";
import Home from "./components/Home";
import BookletDesign from "./components/BookletDesign";
import HeroLayouts from "./components/HeroLayouts";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/booklet-design" element={<BookletDesign />} />
          <Route path="/hero-layouts" element={<HeroLayouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
