import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavHome from "./components/NavHome";
import Home from "./routes/Home";
import MoreProjects from "./routes/MoreProjects";
import About from "./routes/About";
import EmailButton from "./components/EmailButton";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App font-link">
        {" "}
        <NavHome />
        <div className="sticky-email-button">
          <EmailButton />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moreprojects" element={<MoreProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
