import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavHome from "./components/NavHome";
import Work from "./routes/Work";
import Resume from "./routes/Resume";
import WhoAmI from "./routes/WhoAmI";
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
          <Route path="/" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/whoami" element={<WhoAmI />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
