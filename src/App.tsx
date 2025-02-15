import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Resume from "./pages/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/skills" element={<Skill />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

function wrapApp() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
}

export default wrapApp;
