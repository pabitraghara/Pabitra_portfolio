import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./layout/Footer";
import Job from "./pages/Job";
import Myapproach from "./pages/Myapproach";

const App = () => {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     {/* <Route path="/skills" element={<Skills />} /> */}
    //     {/* <Route path="/about-me" element={<AboutMe />} /> */}
    //     {/* <Route path="/experience" element={<Experience />} /> */}
    //     {/* <Route path="/project" element={<Projects />} /> */}
    //     {/* <Route path="/contact" element={<Contact />} /> */}
    //   </Routes>
    // </Router>

    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Myapproach />
      <Skills />
      <Job />
      <Footer />
    </div>
  );
};

export default App;
