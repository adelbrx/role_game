import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Victory from "../pages/Victory";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/victory" element={<Victory />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
