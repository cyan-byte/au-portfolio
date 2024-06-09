import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./routes/Work";
import About from "./routes/About";
import Home from "./components/Home";
import BookletDesign from "./components/BookletDesign";
import HeroLayouts from "./components/HeroLayouts";
import MobileUIUX from "./components/MobileUIUX";
import DigitalIllustrator from "./components/DigitalIllustrator";
import Artist from "./components/Artist";
import PortraitArtist from "./components/PortraitArtist";

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
          <Route path="/mobile-uiux" element={<MobileUIUX />} />
          <Route path="/digital-illustrator" element={<DigitalIllustrator />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/portrait-artist" element={<PortraitArtist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
