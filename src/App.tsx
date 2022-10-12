import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import CreatePost from "./pages/CreatePost";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
