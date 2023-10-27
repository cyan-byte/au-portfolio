import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import UXQuiz from "./routes/UXQuiz";
import ASLDictionary from "./routes/ASLDictionary";
import ArtisanStore from "./routes/ArtisanStore"

function App() {
  return (
    <Router>
      <div className="App font-link">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/uxquiz" element={<UXQuiz />} />
          <Route path="/asldictionary" element={<ASLDictionary />} />
          <Route path="/artisanstore" element={<ArtisanStore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
